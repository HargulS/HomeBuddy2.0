import Resources from "./Resources";
import Menu from "./Menu";
import SignIn from "./SignIn";
import Team from "./Team";
import HouseLogo from "../assets/images/houseLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar() {
  return (
    <nav>
      <section className="navbar">
        <Link className="navbar__siteTitleLink"to="/homepage">
          <img className="navbar__siteLogo"src={HouseLogo}/>
          <h1 className="navbar__siteTitle">HomeBuddy </h1>
    </Link>

      <section className="navbar__menu">
       <div className="navbar__menuItems">
        <Menu />
        <FontAwesomeIcon icon="bars"
        className="navbar__menuIcons"
         />
        </div>
        <div className="navbar__menuItems">
        <Resources />
        <FontAwesomeIcon icon={["fab", "sourcetree"]} className="navbar__menuIcons" />
        </div>
        <div className="navbar__menuItems">
     <Team/>
        <FontAwesomeIcon icon="sign-in-alt"className="navbar__menuIcons" />
        </div>
        <div className="navbar__menuItems">
        <SignIn />
        <FontAwesomeIcon icon="sign-in-alt" className="navbar__menuIcons"/>
        </div>
       
      </section>
      </section>
    </nav>
  );
}
