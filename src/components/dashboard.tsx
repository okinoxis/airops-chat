'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import AreaChartComponent from './tremor/area-chart'

import CardComponent from './tremor/card'
import BarChartComponent from './tremor/bar-chart'
import LineChartComponent from './tremor/line-chart'
import { PromptForm } from './prompt-form'
import { FooterText } from './footer'
import { PromptFormDashboard } from './prompt-form-dashboard'
import { ButtonScrollToBottom } from './button-scroll-to-bottom'

export default function Dashboard() {
   const [message, setMessage] = useState('')
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const [showChatInput, setShowChatInput] = useState(false)

   // @ts-ignore
   const handleSendMessage = async event => {
      event.preventDefault()
      setMessage("")
      setShowChatInput(false)
      return
   }

   return (
      <>
         <div className={cn('pb-[200px] pt-4 md:pt-10')}>
            <div className="relative mx-auto max-w-2xl px-4 flex flex-col gap-[3vh]">
               {/* <div className="border bg-background px-4 py-2 shadow-lg sm:rounded-xl sm:border md:py-4">
                  <PromptFormDashboard
                     onSubmit={handleSendMessage}
                     input={message}
                     setInput={setMessage}
                     isLoading={loading}
                  />
                  <FooterText error={error} className="hidden sm:block" />
               </div> */}
               <div className="flex gap-[2vh]">
                  <CardComponent onShow={setShowChatInput} />
                  <CardComponent onShow={setShowChatInput} />
                  <CardComponent onShow={setShowChatInput} />
               </div>
               <AreaChartComponent onShow={setShowChatInput} />
               <BarChartComponent onShow={setShowChatInput} />
               <LineChartComponent onShow={setShowChatInput} />
            </div>
         </div>
         {showChatInput && (
            <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50% dark:bg-none">
               <div className="mx-auto sm:max-w-2xl sm:px-4">
                  <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
                     <PromptFormDashboard
                        onSubmit={handleSendMessage}
                        input={message}
                        setInput={setMessage}
                        isLoading={loading}
                     />
                     <FooterText error={error} className="hidden sm:block" />
                  </div>
               </div>
            </div>
         )}
      </>
   )
}
