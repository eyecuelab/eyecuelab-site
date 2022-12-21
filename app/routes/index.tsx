import Header from "./components/header";
import HomePage from "./components/homepage";

import WhoWeHelpPage from "./components/we_help_section";
import LetsTalk from "./components/lets_talk_section";
import WhoWeArePage from "./components/we_are_case_studies_section";

// bg-zinc-400

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="w-screen h-screen overflow-x-auto snap-y snap-mandatory capitalize"
    >
      {/* <Header /> */}
      {/* <RelativeFullScreen classNames="" >
       <LandingPage />
      </RelativeFullScreen>

      <RelativeFullScreen>
        <WhoIsSection />
      </RelativeFullScreen>

      <RelativeFullScreen>
        <WhoWeAreSection />
      </RelativeFullScreen>
   
      <RelativeFullScreen>
        <ClientSection />
      </RelativeFullScreen>

      <RelativeFullScreen>
        <ShapesSection />
      </RelativeFullScreen> */}
      {/* <Header />
      <HomePage/> */}
      <WhoWeHelpPage />
      <WhoWeArePage />
      <LetsTalk />
    </div>
  );
}

