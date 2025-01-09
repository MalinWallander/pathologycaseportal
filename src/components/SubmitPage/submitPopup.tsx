import { FC } from "react";
import "./submitPopup.css";

interface props {
  toggleSubmitPopup: () => void;
}

const SubmitPopup: FC<props> = (props): JSX.Element => {
  return (
    <>
      <div className='overlayBackground'></div>
      <div className='submitPopupContainer'>
        <p>
          You have successfully submitted your case. We will send a confirmation
          email to the email address you gave. Contact us if you have any
          questions about your case, please include the case ID from your
          confirmation email.
        </p>
        <button
          className='confirmButton'
          onClick={() => props.toggleSubmitPopup()}
        >
          OK
        </button>
      </div>
    </>
  );
};

export default SubmitPopup;
