import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./components/homepage";
import "../styles/sass/main.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <HomePage  />
    </>
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
