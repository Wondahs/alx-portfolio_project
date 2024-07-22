import { Link } from "react-router-dom";
import CancelIcon from "./CancelIcon";
import { useEffect } from "react";
import '../assets/styles/NotFound.css'

const Notfound = ({title}) => {


  useEffect(() => {
    document.title = title;
  }, [title]);

  return ( 
    <div className="not-found">
      <CancelIcon className='cancel'></CancelIcon>
      <p>The page you seek<br/>does not yet exist</p>
      <p><Link>Go Home</Link></p>
    </div>
   );
}
 
export default Notfound;