import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function DashboardMenu() {
   return (
      <Link href="/dashboard">
         <Button variant="ghost" className="pl-0">
            <span className="ml-2 pt-[0.2vh] text-muted-foreground hover:text-white">
               Dashboard
            </span>
         </Button>
      </Link>
   )
}
