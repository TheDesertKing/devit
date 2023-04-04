import Link from "next/link"
const Unauthenticated = () => {
  return (
    <div className="Unauthenticated">
      <p> Uh Oh... Need a hookup for a user?</p>
      <Link href="/login">Come over here for a moment...</Link>
    </div>
  )
}

export default Unauthenticated
