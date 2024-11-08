import "./headerMobileOption.css";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export type headerProps = {
  setShowMenu: (value: boolean) => void;
};

const NavMenuMobile: React.FC<React.PropsWithChildren<headerProps>> = (
  props
) => {
  const [crossIcon, setCrossIcon] = useState(false);
  const onClickMenu = () => {
    setCrossIcon(true);
    props.setShowMenu(true);
  };
  const onClickCross = () => {
    setCrossIcon(false);
    props.setShowMenu(false);
  };

  return (
    <>
      <div className='navMenuMobileContainer'></div>
      {!crossIcon && (
        <div onClick={() => onClickMenu()}>
          <IoMenuOutline className='menuButton' />
        </div>
      )}
      {crossIcon && (
        <div onClick={() => onClickCross()}>
          <IoCloseOutline className='closeButton' />
        </div>
      )}
    </>
  );
};

export default NavMenuMobile;
