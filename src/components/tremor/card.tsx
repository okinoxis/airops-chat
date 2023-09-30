import { Card, Metric, Text } from '@tremor/react'

const CardComponent = () => (
   <Card className="max-w-xs mx-auto dark:bg-black" decoration="top" decorationColor="indigo">
      <Text>Sales</Text>
      <Metric>$ 34,743</Metric>
   </Card>
)

export default CardComponent