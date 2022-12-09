import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./components/homepage";
import "../styles/sass/main.scss";
import Layout from "tailwindcss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
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
