import * as React from 'react'
import { IconSeparator } from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'

export async function Header() {
  return (
      <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
        <div className="flex items-center">
            <div className="flex items-center">
              <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
              <UserMenu />
            </div>
        </div>
        <div className="flex items-center justify-end space-x-2"></div>
      </header>
  )
}
