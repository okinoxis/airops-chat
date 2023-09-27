import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Next.js AI Chatbot with Airops!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          AI chatbot app built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
          <ExternalLink href="https://www.airops.com">
            Airops
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here writing a message
        </p>
      </div>
    </div>
  )
}
