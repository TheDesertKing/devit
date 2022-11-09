import Link from "next/link";

const NavigationLink = ({ text, href }) => {
  return (
    <Link htmlClass="nav-link" href={href}>
      {text}
    </Link>
  );
};

const LINKS = ["Home", "Ideas", "Projects", "About"];

let navLinks = LINKS.map((link) => {
  return (
    <NavigationLink
      key={link}
      text={link}
      href={link == "Home" ? "/" : "/" + link.toLowerCase()}
      //the Home button should redirect to "/" rather than "/home"
    />
  );
});

const NavigationBar = ({ htmlClass }) => {
  return <div className={htmlClass}>{navLinks}</div>;
};

export default NavigationBar;
