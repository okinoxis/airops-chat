import { Card, Metric, Text } from '@tremor/react'
import { ChatMessageActions } from '../chat-message-actions'
import ChatDashboardButton from '../chat-dashboard-button'

type CardComponentProps = {
   onShow: (value: boolean) => void
}

const CardComponent: React.FC<CardComponentProps> = ({ onShow }) => (
   <Card className="max-w-xs mx-auto dark:bg-black">
      <ChatDashboardButton onShow={onShow} />
      <Text>Sales</Text>
      <Metric>$ 34,743</Metric>
   </Card>
)

export default CardComponent
