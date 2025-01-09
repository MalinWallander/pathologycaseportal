import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import AboutPage from "./components/AboutPage/aboutPage.tsx";
import RecallPage from "./components/RecallPage/recallPage.tsx";
import LegalPage from "./components/LegalPage/legalPage.tsx";
import SubmitPage from "./components/SubmitPage/submitPage.tsx";
import FirstPage from "./components/FirstPage/firstPage.tsx";
import ContactPage from "./components/ContactPage/contactPage.tsx";
import CasePage from "./components/CasePage/casePage.tsx";

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
        path: "cases",
        element: <CasePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/",
        element: <FirstPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
