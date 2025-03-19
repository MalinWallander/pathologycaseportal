import { FC } from "react";
import { IoMdMore, IoMdMail } from "react-icons/io";
import { IRow } from "../../constants";

interface props {
  rowdata: undefined | IRow[];
}

const CaseCard: FC<props> = (): JSX.Element => {
  console.log("testar");

  return (
    <div className='caseCardContainer'>
      <div className='caseCardInfo'>Tumor data: {}</div>
      <div className='caseCardButtonContainer'>
        <button className='caseCardbutton'>
          <IoMdMore />
        </button>
        <button className='caseCardbutton'>
          <IoMdMail />
        </button>
      </div>
    </div>
  );
};

export default CaseCard;
