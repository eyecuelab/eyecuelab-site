import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./components/homepage";
import InnovationAssessment from "./components/quiz";
import "./styles/App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/InnovationAssessment", element: <InnovationAssessment /> },
  ]);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-zinc-400 w-screen h-screen overflow-x-auto snap-y snap-normal capitalize"
    >
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
