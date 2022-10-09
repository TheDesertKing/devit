import { Link } from "react-router-dom";

const NavigationLink = ({ text, href }) => {
  return (
    <Link className="nav-link" to={href}>
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
      //the Home button should redirect to / rather than /home
    />
  );
});

const NavigationBar = ({ htmlClass }) => {
  return <div className={htmlClass}>{navLinks}</div>;
};

export default NavigationBar;
