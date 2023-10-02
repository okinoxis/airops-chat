'use client'

import { Button } from '@/components/ui/button'
import { IconCopy } from '@/components/ui/icons'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

type CardComponentProps = {
   onShow: (value: boolean) => void
}

const ChatDashboardButton: React.FC<CardComponentProps> = ({ onShow }) => (
      <div
         className={cn(
            'flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute -right-[8px] -top-2'
         )}
      >
         <Button variant="secondary" size="icon" onClick={() => onShow(true)}>
            {<ChatBubbleIcon />}
            <span className="sr-only">Copy message</span>
         </Button>
      </div>

)
export default ChatDashboardButton;