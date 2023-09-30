export interface Chat extends Record<string, any> {
   id: string
   title: string
   createdAt: Date
   userId: string
   path: string
   messages: {
      type: string
      message: string
      length: number
   }
   sharePath?: string
}

export type ServerActionResult<Result> = Promise<
   | Result
   | {
      error: string
   }
>
