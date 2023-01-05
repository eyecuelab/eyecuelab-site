import { useState } from "react";
import Header from "./components/header";
import HomePage from "./components/homepage";
import "./styles/App.css";

// bg-zinc-400

function App() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="w-screen h-screen overflow-x-auto snap-y snap-normal capitalize"
    >
      {/* <Header /> */}
      <HomePage />
    </div>
  );
}

export default App;
