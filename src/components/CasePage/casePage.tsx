import { useEffect, useState } from "react";
import baseUrl, { IRow } from "../../constants";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import TablePage from "./tablePage";
import CaseCardPage from "./caseCardPage";

function CasePage() {
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

  return (
    <div>
      <Header />
      <TablePage rowData={rowData} />
      <CaseCardPage rowData={rowData} />
      <Footer />
    </div>
  );
}

export default CasePage;
