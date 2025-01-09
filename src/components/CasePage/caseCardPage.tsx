import { FC } from "react";
import CaseCard from "./caseCard";
import { IRow } from "../../constants";

interface props {
  rowData: IRow[];
}

const CaseCardPage: FC<props> = (props): JSX.Element => {
  return (
    <div>
      <CaseCard rowdata={props.rowData} />
    </div>
  );
};

export default CaseCardPage;
