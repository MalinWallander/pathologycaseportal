import { FC } from "react";
import "./recallPopup.css";

interface props {
  toggleRecallPopup: () => void;
}

const RecallPopup: FC<props> = (props): JSX.Element => {
  return (
    <>
      <div className='overlayBackground'></div>
      <div className='recallPopupContainer'>
        <p>
          A message has been sent and you case will be deleted shortly. Please
          contact us if you have any questions.
        </p>
        <button
          className='confirmButton'
          onClick={() => props.toggleRecallPopup()}
        >
          OK
        </button>
      </div>
    </>
  );
};

export default RecallPopup;
