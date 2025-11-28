import { DefaultSession, DefaultUser } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Étendre la session pour inclure accessToken et id
   */
  interface Session extends DefaultSession {
    accessToken?: string
    user: {
      id: string
    } & DefaultSession['user']
  }

  /**
   * Étendre le User pour inclure accessToken
   */
  interface User extends DefaultUser {
    accessToken?: string
  }
}

declare module 'next-auth/jwt' {
  /**
   * Étendre le JWT pour inclure accessToken et id
   */
  interface JWT extends DefaultJWT {
    id?: string
    accessToken?: string
  }
}