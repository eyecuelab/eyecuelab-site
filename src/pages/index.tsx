import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import HomePage from "./homepage";
import "../styles/sass/main.scss";
import Header from "./components/header";
import ContactPage from "./contactpage";
import WhoWeArePage from "./wearepage";
import WhoWeHelpPage from "./whowehelppage";
import "../styles/sass/main.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    // bg-zinc-800
    // font-proxima
    <div className="w-screen h-screen">
    {/* <div> */}
      {/* <Header /> */}
      {/* <HomePage /> */}
      {/* <ContactPage /> */}
      <WhoWeHelpPage />
      {/* <WhoWeArePage /> */}
      {/* <div className="relative bg-nav-blue h-full " /> */}
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
