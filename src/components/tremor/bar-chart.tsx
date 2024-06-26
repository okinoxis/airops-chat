'use client'
import { Card, Title, BarChart, Subtitle } from '@tremor/react'
import ChatDashboardButton from '../chat-dashboard-button'

const chartdata = [
   {
      name: 'Amphibians',
      'Number of threatened species': 2488
   },
   {
      name: 'Birds',
      'Number of threatened species': 1445
   },
   {
      name: 'Crustaceans',
      'Number of threatened species': 743
   }
]

const dataFormatter = (number: number) => {
   return '$ ' + Intl.NumberFormat('us').format(number).toString()
}
type CardComponentProps = {
   onShow: (value: boolean) => void
}
const BarChartComponent : React.FC<CardComponentProps> = ({ onShow }) => (
   <Card className=' dark:bg-black'>
      <ChatDashboardButton onShow={onShow} />
      <Title>Number of species threatened with extinction (2021)</Title>
      <Subtitle>
         The IUCN Red List has assessed only a small share of the total known
         species in the world.
      </Subtitle>
      <BarChart
         className="mt-6"
         data={chartdata}
         index="name"
         categories={['Number of threatened species']}
         colors={['blue']}
         valueFormatter={dataFormatter}
         yAxisWidth={48}
      />
   </Card>
)

export default BarChartComponent