import React from "react";
import RelativeFullScreen from "../relative_layout";
import ClientSection from "./client_section";
import LandingPage from "./landing_section";
import ShapesSection from "./shapes_section";
import WhoWeAreSection from "./we_are_section";
import WhoIsSection from "./who_section";
import WhoWeHelpPage from "./we_help_section";
import WhoWeArePage from "./we_are_case_studies_section";
import LetsTalk from "./lets_talk_section";


export default function HomePage() {
  return (
    <>
      {/* <RelativeFullScreen classNames="">
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

      <RelativeFullScreen>
        <WhoWeHelpPage />
      </RelativeFullScreen>

      <RelativeFullScreen>
        <WhoWeArePage />        
      </RelativeFullScreen>

      <RelativeFullScreen>
        <LetsTalk />        
      </RelativeFullScreen>
    </>
  );
}
