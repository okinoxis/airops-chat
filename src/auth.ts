import NextAuth, { type DefaultSession } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

declare module 'next-auth' {
   interface Session {
      user: {
         /** The user's id. */
         id: string
      } & DefaultSession['user']
   }
}

export const {
   handlers: { GET, POST },
   auth,
   CSRF_experimental // will be removed in future
} = NextAuth({
   providers: [
      GoogleProvider({
         clientId: '176409456033-kd96g3d9t1m3ul95hc6q8fto2g0s54pr.apps.googleusercontent.com',
         clientSecret: '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'
      })
   ],
   callbacks: {
      jwt({ token, profile }) {
         if (profile) {
            // @ts-ignore
            token.id = profile.id
            // @ts-ignore
            token.image = profile.avatar_url || profile.picture || profile.photos[0]?.value || profile.image
         }
         return token
      },
      // @ts-ignore
      authorized({ auth }) {
         return !!auth?.user // this ensures there is a logged in user for -every- request
      }
   },
   pages: {
      signIn: '/access' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
   }
})
