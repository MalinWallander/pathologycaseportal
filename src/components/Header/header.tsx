import { useState } from "react";
import Logo from "../../assets/PathologyCasePortal_logo2.png";
import "./header.css";
import NavMenuDesktop from "./navMenuDesktop";
import NavMenuMobile from "./navMenuMobile";
import HeaderMobileOption from "./headerMobileOption";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='headerContainer'>
        {/* <img src={Logo} alt='' className='headerLogo' /> */}
        <div className='navigationPartHeader'>
          <div className='navMenuBigScreen'>
            <NavMenuDesktop />
          </div>
          <div className='navMenuSmallScreen'>
            <HeaderMobileOption setShowMenu={setShowMenu} />
          </div>
        </div>
      </div>
      {showMenu && <NavMenuMobile setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;
