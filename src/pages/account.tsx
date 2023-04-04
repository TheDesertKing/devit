import { useSession, signIn, signOut } from "next-auth/react"
import Unauthenticated from "@/components/unauthenticated"

export default function AccountPage() {
  const { data: session, status } = useSession({
    required: true,
  })

  if (status === "loading") {
    console.log("loading...")
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    //This should never be reachable!
    console.log("authenticated!")
    if (session.user === undefined) {
      return (
        <>
          <p> Coulden't find your mail...</p>,
          <Unauthenticated />
        </>
      )
    }
    const userEmail = session?.user.email
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  )
}
