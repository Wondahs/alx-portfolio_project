import { Link } from "react-router-dom";
import facebookIcon from "../assets/images/logo-facebook.svg";
import githubIcon from "../assets/images/logo-github.svg";
import instagramIcon from "../assets/images/logo-instagram.svg";
import twitterIcon from "../assets/images/logo-twitter.svg";
import jobSyncIcon from "../assets/images/footer-company-logo.svg";


const Footer = () => {

  return (
    <footer>
      <div className="logo-address-nav-help">
        <div className="description">
          <div className="logo-and-name">
            <img src={jobSyncIcon} alt="Company Logo"/>
              <h4>JobSync</h4>
          </div>
          <p>Discover and unlock your potentials.</p>
          <div className="socials">
            <Link to="/"><img src={facebookIcon} alt="Facebook Icon"/></Link>
            <Link to="/"><img src={twitterIcon} alt="Twitter Icon"/></Link>
            <Link to="/"><img src={instagramIcon} alt="Instagram Icon"/></Link>
            <Link to="/"><img src={githubIcon} alt="Github Icon"/></Link>
          </div>
        </div>
        <div className="contact">
          <h4>Address</h4>
          <p>BladeVille, Ojo, Lagos, Nigeria.</p>
          <h4>Contact</h4>
          <p>+234 905 460 4494</p>
          <p>support@jobsync.com</p>
        </div>
        <div className="navigation">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Job List</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <div className="help">
          <h4>Help</h4>
          <ul>
            <li><Link to="/">FAQs</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; 2024 JobSync. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
