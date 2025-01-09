import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { FC, useEffect, useState } from "react";
import "./tablePage.css";
import baseUrl, { IRow } from "../../constants";

interface props {
  rowData: IRow[];
}

const TablePage: FC<props> = (props): JSX.Element => {
  const [rowData, setRowData] = useState<IRow[]>([]);

  const fetchCases = () => {
    fetch(`http://${baseUrl}/cases`)
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(rowData);
      });
  };
  useEffect(() => {
    fetchCases();
  }, []);

  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "histologicalDiagnosis" },
    { field: "anatomicalLocation" },
    { field: "tumorClass" },
    { field: "genetics" },
    { field: "methylationCluster" },
    { field: "evidence" },
    { field: "comment" },
    { field: "institution" },
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
          />
        </div>
      </div>
    </div>
  );
};

export default TablePage;
