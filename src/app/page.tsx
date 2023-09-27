import dynamic from 'next/dynamic'

const Chat = dynamic(() => import('@/components/chat'), { ssr: false });

export default function Home() {
   return (
      <>
         {(typeof window !== undefined) &&
            <Chat />
         }
      </>
   )
}
