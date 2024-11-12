import { Link } from "react-router-dom";
import "./navMenuMobile.css";
import { IoArrowForward } from "react-icons/io5";

export type headerProps = {
  setShowMenu: (value: boolean) => void;
};

const NavMenuMobile: React.FC<React.PropsWithChildren<headerProps>> = (
  props
) => {
  return (
    <div className='navMenuContainer'>
      <Link
        to={"/"}
        className='navMenuItem'
        onClick={() => props.setShowMenu(false)}
      >
        <div className='titleNavMenu'>Home</div>
        <IoArrowForward className='navArrowIcon' />
      </Link>
      <Link
        to={"/about"}
        className='navMenuItem'
        onClick={() => props.setShowMenu(false)}
      >
        <div className='titleNavMenu'>Cases</div>
        <IoArrowForward className='navArrowIcon' />
      </Link>
      <Link
        to={"/cases"}
        className='navMenuItem'
        onClick={() => props.setShowMenu(false)}
      >
        <div className='titleNavMenu'>About</div>
        <IoArrowForward className='navArrowIcon' />
      </Link>
      <Link
        to={"/submit"}
        className='navMenuItem'
        onClick={() => props.setShowMenu(false)}
      >
        <div className='titleNavMenu'>Submit case</div>
        <IoArrowForward className='navArrowIcon' />
      </Link>
      <Link
        to={"/recall"}
        className='navMenuItem'
        onClick={() => props.setShowMenu(false)}
      >
        <div className='titleNavMenu'>Recall case</div>
        <IoArrowForward className='navArrowIcon' />
      </Link>
      <Link
        to={"/legal"}
        className='navMenuItem'
        onClick={() => props.setShowMenu(false)}
      >
        <div className='titleNavMenu'>Legal notice</div>
        <IoArrowForward className='navArrowIcon' />
      </Link>
    </div>
  );
};

export default NavMenuMobile;
