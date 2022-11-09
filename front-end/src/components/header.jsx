import NavigationBar from "./navigationBar";
import Image from "next/image";
import logo from "../../public/devitlogo.png";

const Header = () => {
  return (
    <div className="header">
      <Image src={logo} className="logo" alt="Dev-It Logo" />
      <NavigationBar htmlClass="nav-bar" />
    </div>
  );
};

export default Header;
