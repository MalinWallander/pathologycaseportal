import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import AboutPage from "./components/AboutPage/aboutPage.tsx";
import RecallPage from "./components/RecallPage/recallPage.tsx";
import LegalPage from "./components/LegalPage/legalPage.tsx";
import SubmitPage from "./components/SubmitPage/submitPage.tsx";
import TablePage from "./components/TablePage/tablePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "recall",
        element: <RecallPage />,
      },
      {
        path: "legal",
        element: <LegalPage />,
      },
      {
        path: "submit",
        element: <SubmitPage />,
      },
      {
        path: "/",
        element: <TablePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
