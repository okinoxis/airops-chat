import * as React from 'react'
import { IconSeparator } from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { Sidebar } from './sidebar'
import { SidebarFooter } from './sidebar-footer'
import { ThemeToggle } from './theme-toggle'
import { SidebarList } from './sidebar-list'
import DashboardMenu from './dashboard-menu'
import IndexMenu from './index-menu'
// import { ClearHistory } from './clear-history'

export async function Header() {
  return (
      <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
        <div className="flex items-center">
            {/* {session?.user ? ( */}
              <Sidebar>
                <IndexMenu />
                <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
                  {/* @ts-ignore */}
                  <SidebarList userId={1} />
                </React.Suspense>
                <SidebarFooter>
                  {/* <ThemeToggle /> */}
                  {/* <ClearHistory clearChats={clearChats} /> */}
                </SidebarFooter>
              </Sidebar>
            {/* // ) : (
            //   <Link href="/" target="_blank" rel="nofollow">
            //     <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
            //     <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
            //   </Link>
            // )} */}
            <div className="flex items-center">
              <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
              <DashboardMenu />
            </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <ThemeToggle />
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          <UserMenu />
        </div>
      </header>
  )
}
