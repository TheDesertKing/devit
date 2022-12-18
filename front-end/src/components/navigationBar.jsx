import Link from "next/link"

const NavigationLink = ({ text, href }) => {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  )
}

const LINKS = ["Home", "Ideas", "Projects", "About"]

let navLinks = LINKS.map((link) => {
  return (
    <NavigationLink
      key={link}
      text={link}
      href={link == "Home" ? "/" : "/" + link.toLowerCase()}
      //the Home button should redirect to "/" rather than "/home"
    />
  )
})

const NavigationBar = ({ htmlClass }) => {
  return <nav className={htmlClass}>{navLinks}</nav>
}

export default NavigationBar
