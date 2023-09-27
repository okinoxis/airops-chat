import React from 'react'
import { cn } from '@/lib/utils'

interface FooterTextProps extends React.ComponentProps<'p'> {
  error?: string | null;
}

export function FooterText({ className, error, ...props }: FooterTextProps) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      {error && `Error running the app: ${error}`}
    </p>
  )
}
