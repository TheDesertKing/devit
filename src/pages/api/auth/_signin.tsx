import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  GetServerSideProps,
} from "next"
import type { Session } from "next-auth"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { NextAuthOptions } from "@/api/auth/[...nextauth]"

export default function SignIn() {}

export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async (context: GetServerSidePropsContext) => {
  const session = await getServerSession(
    context.req,
    context.res,
    NextAuthOptions
  )

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
