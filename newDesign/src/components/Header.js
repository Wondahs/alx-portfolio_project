import Navbar from "./Nav";
import navButton from "../assets/images/nav-button.svg";
import { Link } from "react-router-dom";
import useNavControl from "../assets/scripts/nav-control";
import openNav from "../assets/images/nav-button.svg";
import closeNav from "../assets/images/close-nav-icon.svg";

const Header = ({ loggedIn }) => {

  useNavControl(openNav, closeNav, loggedIn);
  return (
    <header className="header">
      <h1 id="company-name"><Link to={'/'}>JobSync</Link></h1>
      <Navbar loggedIn={loggedIn} />
      {!loggedIn && <Link className="get-started" to="/signup">
        <button id="get-started-cta">Get Started</button>
      </Link>}
      <img
        id="nav-button"
        src={navButton}
        alt="Nav Button"
        className="nav-button"
      />
    </header>
  );
}

export default Header;
