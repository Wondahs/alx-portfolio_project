import githibIcon from "../assets/images/icon-github-coloured.svg";
import emailIcon from "../assets/images/icon-email.svg";
import { Link } from "react-router-dom";

const TeamMember = ({ name, title, bio, image, email, github }) => {
  const firstName = name.split(" ")[0].toUpperCase();
  const otherNames = name.split(" ").slice(1);
  return (
    <div className="team-member-card">
      <div className="name-icon">
        <img className="member-icon" src={image} alt={name} />
        <h3><span>{firstName}</span> {otherNames}</h3>
        <div className="socials">
          <Link to={github}> <img src={githibIcon} alt="Github Link" /> </Link>
          <Link type="email" to={email}><img src={emailIcon} fill="#B2B1FF" alt="Email" /> </Link>
        </div>
      </div>
      <div className="description">
        <p className="title">{title}</p>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
}

export default TeamMember;
