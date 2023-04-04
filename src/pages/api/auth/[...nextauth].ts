import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_ACCOUNT_SECRET
		}),
		// Email({})
	],
}

export default NextAuth(NextAuthOptions)