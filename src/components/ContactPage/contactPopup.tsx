import { FC } from "react";
import "./contactPopup.css";

interface props {
  toggleContactPopup: () => void;
}

const ContactPopup: FC<props> = (props): JSX.Element => {
  return (
    <>
      <div className='overlayBackground'></div>
      <div className='submitPopupContainer'>
        <p>
          Your message has been sent. We will get back to you as soon as
          possible.
        </p>
        <button
          className='confirmButton'
          onClick={() => props.toggleContactPopup()}
        >
          OK
        </button>
      </div>
    </>
  );
};

export default ContactPopup;
