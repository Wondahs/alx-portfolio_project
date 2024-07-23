import { Link } from "react-router-dom";

const Navbar = ({loggedIn}) => {
  return ( 
    <nav id="nav-bar">
      <ul className="header-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to={loggedIn ? "/dashboard" : "/login"}>{loggedIn ? "DashBoard" : "Login"}</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
   );
}
 
export default Navbar;