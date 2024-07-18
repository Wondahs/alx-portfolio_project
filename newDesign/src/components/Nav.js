import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav id="nav-bar">
      <ul className="header-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Job List</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
   );
}
 
export default Navbar;