import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./components/homepage";
import "../styles/sass/main.scss";
import Header from "./components/header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col font-proxima eyecuebody">
      <Header />
      <HomePage />
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
