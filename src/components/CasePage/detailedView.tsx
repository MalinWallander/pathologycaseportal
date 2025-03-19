import { FC } from "react";
import { IRow } from "../../constants";
import "./detailedView.css";

interface props {
  isDetailedViewVisible: boolean;
  caseData: IRow | undefined;
  toggleDetailedView: () => void;
}

const DetailedView: FC<props> = (props): JSX.Element => {
  return (
    <>
      <div className='overlay'>
        <div
          className='overlayBackground'
          onClick={() => props.toggleDetailedView()}
        ></div>
        <div className='overlayContainer'>
          <div className='headerDetailedView'>Case details</div>
          <div className='caseDetails'>
            <div className='caseDetail'>
              <div className='titleDetail'>Tumor class:</div>
              <div className='infoDetail'>{props.caseData?.tumorClass}</div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Histological diagnosis:</div>
              <div className='infoDetail'>
                {props.caseData?.histologicalDiagnosis}
              </div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Anatomical location:</div>
              <div className='infoDetail'>
                {props.caseData?.anatomicalLocation}
              </div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Genetics:</div>
              <div className='infoDetail'>{props.caseData?.genetics}</div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Methylation cluster:</div>
              <div className='infoDetail'>
                {props.caseData?.methylationCluster}
              </div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Evidence:</div>
              <div className='infoDetail'>{props.caseData?.evidence}</div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Comment:</div>
              <div className='infoDetail'>{props.caseData?.comment}</div>
            </div>
            <div className='caseDetail'>
              <div className='titleDetail'>Institution:</div>
              <div className='infoDetail'>{props.caseData?.institution}</div>
            </div>
            <div className='buttonContainer'>
              <button
                className='buttonDetailedView'
                onClick={() => props.toggleDetailedView()}
              >
                Close
              </button>
              <button className='buttonDetailedView'>
                Message case submitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedView;
