import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { StrapiUserResponse } from '../../../modules/auth/types/StrapiUserResponse'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            process.env.NEXT_PUBLIC_API_URL + '/api/auth/local',
            credentials
          )
          return res.data
        } catch (e) {
          console.log(e)
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      if (!user?.user.isBlocked) return true
      return false
    },
    async jwt({ token, user }) {
      if (user && user?.jwt && user?.user) {
        const _user: StrapiUserResponse = user?.user
        const { id, username, email } = _user
        token = { accessToken: user.jwt, id, username, email }
      }
      return token
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
})
