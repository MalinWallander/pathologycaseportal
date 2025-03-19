import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { FC, useEffect, useState } from "react";
import "./tablePage.css";
import baseUrl, { IRow } from "../../constants";
import DetailedView from "./detailedView";

interface props {
  rowData: IRow[];
}

const TablePage: FC<props> = (): JSX.Element => {
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [isDetailedViewVisible, setIsDetailedViewVisible] = useState(false);
  const [caseData, setCaseData] = useState<IRow>();

  const fetchCases = () => {
    fetch(`http://${baseUrl}/portal/cases`)
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(rowData);
      });
  };
  useEffect(() => {
    fetchCases();
  }, []);

  const toggleDetailedView = () => {
    setIsDetailedViewVisible(!isDetailedViewVisible);
  };

  const [colDefs] = useState<ColDef<IRow>[]>([
    { field: "tumorClass", filter: "agSetColumnFilter" },
    { field: "histologicalDiagnosis", filter: "agSetColumnFilter" },
    { field: "anatomicalLocation", filter: "agSetColumnFilter" },
    { field: "genetics", filter: "agSetColumnFilter" },
    { field: "methylationCluster", filter: "agSetColumnFilter" },
    { field: "evidence", filter: "agSetColumnFilter" },
    { field: "comment", filter: "agSetColumnFilter" },
    { field: "institution", filter: "agSetColumnFilter" },
  ]);

  return (
    <div className='pageContainer'>
      <div className='tableContainer'>
        <h1 className='titlePageCases'>Cases</h1>
        <div
          className={"ag-theme-quartz"}
          style={{ width: "100%", height: 600 }}
        >
          <AgGridReact
            className='table'
            rowData={rowData}
            columnDefs={colDefs}
            onRowClicked={(e) => {
              toggleDetailedView();
              setCaseData(e.data);
            }}
          />
          {isDetailedViewVisible && (
            <DetailedView
              caseData={caseData}
              isDetailedViewVisible={isDetailedViewVisible}
              toggleDetailedView={toggleDetailedView}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePage;
