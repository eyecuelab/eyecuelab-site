import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./homepage";
import "../styles/sass/main.scss";
import Header from "./components/header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="font-proxima bg-zinc-800 w-screen h-screen">
      <Header />
      <HomePage />
      <div className="relative bg-nav-blue h-full " />
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
