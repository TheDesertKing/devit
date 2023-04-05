import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import authOptions from "../api/auth/[...nextauth]"
import { SignInIconSVG } from "@/components/signInIconSVG"

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div className="justify-center padding-2-percent" key={provider.name}>
          <button
            className="login-button flex-column"
            onClick={() => signIn(provider.id)}
          >
            <SignInIconSVG providerName={provider.name} />
            <p className="login-button-text">{provider.name}</p>
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()

  return {
    props: {
      providers: providers ?? [],
    },
  }
}
