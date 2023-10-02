import { auth } from '../../auth'
import { LoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'

export default async function AccessRoute() {
   const session = await auth()
   // redirect to home if user is already logged in
   if (session?.user) {
      redirect('/')
   }
   return (
      <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
         <LoginButton className='px-[4vh] py-[3vh] text-xl' />
      </div>
   )
}
