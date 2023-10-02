'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { type Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Switch } from '@/components/ui/switch'
import {
   FileTextIcon,
   TableIcon,
   ImageIcon,
   MagicWandIcon,
   PersonIcon,
   MagnifyingGlassIcon,
   ExitIcon
} from '@radix-ui/react-icons'

export interface UserMenuProps {
   user: Session['user']
}

function getUserInitials(name: string) {
   const [firstName, lastName] = name.split(' ')
   return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2)
}

export function UserMenu({ user }: UserMenuProps) {
   return (
      <div className="flex items-center justify-between">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="pl-0 ">
                  {user?.image ? (
                     <Image
                        className="w-6 h-6 transition-opacity duration-300 rounded-full select-none ring-1 ring-zinc-100/10 hover:opacity-80"
                        src={user?.image ? `${user.image}&s=60` : ''}
                        alt={user.name ?? 'Avatar'}
                        height={48}
                        width={48}
                     />
                  ) : (
                     <div className="flex items-center justify-center text-md font-medium uppercase rounded-full select-none h-7 w-7 shrink-0 bg-muted/50 text-muted-foreground">
                        {user?.name ? getUserInitials(user?.name) : null}
                     </div>
                  )}
                  <span className="ml-2">{user?.name}</span>
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
               sideOffset={8}
               align="start"
               className="w-[300px]"
            >
               <DropdownMenuItem className="flex-col items-start">
                  <div className="text-md font-medium">{user?.name}</div>
                  <div className="text-xs text-zinc-500">{user?.email}</div>
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem aria-disabled aria-hidden className="flex justify-between py-[2vh]">
                  <div className="flex gap-[1vh] items-center justify-center">
                     <MagnifyingGlassIcon width={"4vh"} height={"2vh"} />
                     <div className="text-md font-medium pt-[0.1vh]">
                        Internet browsing
                     </div>
                  </div>
                  <Switch className='z-10' id="browsing" />
               </DropdownMenuItem>
               <DropdownMenuItem aria-disabled aria-hidden className="flex justify-between py-[2vh]">
                  <div className="flex gap-[1vh] items-center justify-center">
                     <PersonIcon width={"4vh"} height={"2vh"} />
                     <div className="text-md font-medium pt-[0.1vh]">
                        Assistants
                     </div>
                  </div>
                  <Switch className='z-10'  id="assistants" />
               </DropdownMenuItem>
               <DropdownMenuItem className="flex justify-between py-[2vh]">
                  <div className="flex gap-[1vh] items-center justify-center">
                     <FileTextIcon width={"4vh"} height={"2vh"} />
                     <div className="text-md font-medium pt-[0.1vh]">
                        Chat with document
                     </div>
                  </div>
               </DropdownMenuItem>
               <DropdownMenuItem  className="flex justify-between py-[2vh]">
                  <div className="flex gap-[1vh] items-center justify-center">
                     <ImageIcon width={"4vh"} height={"2vh"} />
                     <div className="text-md font-medium pt-[0.1vh]">
                        Chat with image
                     </div>
                  </div>
               </DropdownMenuItem>
               <DropdownMenuItem className="flex justify-between py-[2vh]">
                  <div className="flex gap-[1vh] items-center justify-center">
                     <TableIcon width={"4vh"} height={"2vh"} />
                     <div className="text-md font-medium pt-[0.1vh]">
                        Chat with data
                     </div>
                  </div>
               </DropdownMenuItem>
               <DropdownMenuItem className="flex justify-between py-[2vh]">
                  <div className="flex gap-[1vh] items-center justify-center">
                     <MagicWandIcon width={"4vh"} height={"2vh"}/>
                     <div className="text-md font-medium pt-[0.1vh]">
                        Generate image
                     </div>
                  </div>
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem
                  onClick={() =>
                     signOut({
                        callbackUrl: '/'
                     })
                  }
                  className="gap-[1vh] flex items-center py-[2vh]"
               >
                  <ExitIcon width={"4vh"} height={"2vh"} />
                  <div className="text-md font-medium pt-[0.1vh]">Log Out</div>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}
