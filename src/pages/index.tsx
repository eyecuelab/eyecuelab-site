import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "./components/header"
import HomePage from "./components/homepage";
import "../scss/main.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="eyecue-body">
      <Header />
      <HomePage />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>EyeCueLab</title>
    </>
  )
}
