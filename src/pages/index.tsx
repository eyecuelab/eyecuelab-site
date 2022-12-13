import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import HomePage from "./components/homepage";
import Header from "./components/header";
import ContactPage from "./components/contactpage";
import "../styles/sass/main.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="w-full h-screen flex">
      {/* <Header /> */}
      {/* <HomePage /> */}
      <ContactPage />
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>EyeCueLab</title>
    </>
  )
}
