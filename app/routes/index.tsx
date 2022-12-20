

import ClientSection from "./components/client_section";

import Header from "./components/header";
import LandingPage from "./components/landing_section";
import RelativeFullScreen from "./components/relative_layout";
import ShapesSection from "./components/shapes_section";

import WhoWeAreSection from "./components/we_are_section"
import WhoIsSection from "./components/who_section"

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-zinc-400 w-screen h-screen overflow-x-auto snap-y snap-mandatory capitalize"
    >
      <Header />
      <RelativeFullScreen classNames="" >
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
      </RelativeFullScreen>
    </div>
  );
}

