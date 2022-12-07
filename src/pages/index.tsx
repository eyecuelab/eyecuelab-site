import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./homepage"
import Header from "../components/header"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <HomePage />
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
