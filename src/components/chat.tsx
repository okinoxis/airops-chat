'use client'
import { userIdHash } from '@/lib/userIdHash'
import React, { useEffect, useState } from 'react'
import AirOps from '@airops/airops-js'
import useMessageManager, { MessageType } from '@/hooks/useMessageManager'
import { cn } from '@/lib/utils'
import { EmptyScreen } from './empty-screen'
import { FooterText } from './footer'
import { PromptForm } from './prompt-form'
import { ButtonScrollToBottom } from './button-scroll-to-bottom'
import { Button } from './ui/button'
import { IconRefresh, IconStop } from './ui/icons'
import { ChatScrollAnchor } from './chat-scroll-anchor'
import { ChatMessage } from './chat-message'
import { Separator } from './ui/separator'

export default function Chat() {
   const { messages, addMessage } = useMessageManager()
   const [stream, setStream] = useState('')
   const [error, setError] = useState(null)
   const [airopsInstance, setAiropsInstance] = useState(null)
   const [message, setMessage] = useState('')
   const [sessionId, setSessionId] = useState(null)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      // PRIVATE KEYS
      // const airopsInstance = AirOps.identify({
      //   userId: process.env.AIROPS_USER_ID,
      //   workspaceId: process.env.AIROPS_WORKSPACE_ID,
      //   hashedUserId: userIdHash(),
      // });

      // PUBLIC KEYS
      const airopsInstance = new AirOps()
      // @ts-ignore
      setAiropsInstance(airopsInstance)
   }, [])

   // @ts-ignore
   const handleSendMessage = async event => {
      if (airopsInstance === null || message.trim() === '') {
         return
      }
      event.preventDefault()
      setLoading(true)

      addMessage(MessageType.User, message)

      try {
         // @ts-ignore
         const response = await airopsInstance.apps.chatStream({
            appId:
               process.env.AIROPS_APP_ID ||
               '1af76a43-a987-4a7f-83cb-c58b3a34ecb7',
            message,
            streamCallback: ({ action, token, tool }: any) => {
               if (action === 'agent-response' && token.trim() !== '') {
                  console.log('agent-response', token)
                  setStream(stream => stream + token)
               }

               if (action === 'agent-action') {
                  console.log('agent-action', tool)
               }
            },
            streamCompletedCallback: (data: { result: string }) => {
               addMessage(MessageType.Assistant, data.result)
               console.log('stream completed callback result: ', data.result)
               setStream('')
            },
            // @ts-ignore
            ...(sessionId && { sessionId })
         })
         console.log('response: ', response)
         setSessionId(response.sessionId)
         const result = await response.result
         console.log('result: ', result)
         setMessage('')
      } catch (e: any) {
         setError(e.message)
      }
   }

   useEffect(() => {
      if (stream) {
         setLoading(true)
      } else {
         setLoading(false)
      }
   }, [stream])

   return (
      <>
         {airopsInstance && (
            <>
               <div className={cn('pb-[200px] pt-4 md:pt-10')}>
                  {messages.length ? (
                     <>
                        <div className="relative mx-auto max-w-2xl px-4">
                           {messages.map((message, index) => (
                              <div key={index}>
                                 <ChatMessage message={message} />
                                 {index < messages.length - 1 && (
                                    <Separator className="my-4 md:my-8" />
                                 )}
                              </div>
                           ))}
                           {stream && (
                              <>
                                 <Separator className="my-4 md:my-8" />
                                 <ChatMessage
                                    message={{ type: 'text', message: stream }}
                                 />
                              </>
                           )}
                        </div>
                        <ChatScrollAnchor trackVisibility={loading} />
                     </>
                  ) : (
                     <EmptyScreen />
                  )}
               </div>

               <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
                  <ButtonScrollToBottom />
                  <div className="mx-auto sm:max-w-2xl sm:px-4">
                     <div className="flex h-10 items-center justify-center">
                        {loading ? (
                           <Button
                              variant="outline"
                              // onClick={() => stop()}
                              className="bg-background"
                           >
                              <IconStop className="mr-2" />
                              Stop generating
                           </Button>
                        ) : (
                           messages?.length > 0 && (
                              <Button
                                 variant="outline"
                                 // onClick={() => reload()}
                                 className="bg-background"
                              >
                                 <IconRefresh className="mr-2" />
                                 Regenerate response
                              </Button>
                           )
                        )}
                     </div>
                     <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
                        <PromptForm
                           onSubmit={handleSendMessage}
                           input={message}
                           setInput={setMessage}
                           isLoading={loading}
                        />
                        <FooterText error={error} className="hidden sm:block" />
                     </div>
                  </div>
               </div>
            </>
         )}
      </>
   )
}
