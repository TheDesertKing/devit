import NavigationBar from "./navigationBar";

const Header = ({ logoPath }) => {
  return (
    <div className="header">
      <img htmlClass="logo" alt="Dev-It Logo" src={logoPath} />
      <NavigationBar htmlClass="nav-bar" />
    </div>
  );
};

export default Header;
