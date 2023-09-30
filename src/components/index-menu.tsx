import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function IndexMenu() {
   return (
      <Link href="/">
         <Button variant="secondary" className="pl-0 w-full rounded-none">
            <span className="ml-2 pt-[0.2vh] text-muted-foreground hover:text-white">
               New chat
            </span>
         </Button>
      </Link>
   )
}
