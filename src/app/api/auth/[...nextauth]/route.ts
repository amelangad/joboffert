import NextAuth from 'next-auth/next'
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
      GithubProvider ({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      GoogleProvider ({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLESECRET as string,
      }),
      CredentialsProvider({
        name: "Login",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "login" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Tupe": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
        })
      })
      const user = await res.json()
    
          if (user) {
            return user
          } else {
            return null
          }
      }}),
    ],

})


export { handler as GET, handler as POST }