import "./navMenuDesktop.css";
import { Link } from "react-router-dom";

const NavMenuDesktop = () => {
  return (
    <div className='navMenuDesktopContainer'>
      <Link to={"/"} className='titleDesktopNav'>
        Home
      </Link>
      <Link to={"/cases"} className='titleDesktopNav'>
        Cases
      </Link>
      <Link to={"/submit"} className='titleDesktopNav'>
        Submit case
      </Link>
      <Link to={"/about"} className='titleDesktopNav'>
        About
      </Link>
      <Link to={"/recall"} className='titleDesktopNav'>
        Recall case
      </Link>
      <Link to={"/contact"} className='titleDesktopNav'>
        Contact us
      </Link>
      <Link to={"/legal"} className='titleDesktopNav'>
        Legal notice
      </Link>
    </div>
  );
};

export default NavMenuDesktop;
