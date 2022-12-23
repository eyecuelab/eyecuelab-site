import RelativeFullScreen from "../relative_layout";
import ClientSection from "./client_section";
import LandingPage from "./landing_section";
import ShapesSection from "./shapes_section";
import WhoWeAreSection from "./we_are_section";
import WhoIsSection from "./who_section";

export default function HomePage() {
  return (
    <>
      <RelativeFullScreen classNames="">
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
    </>
  );
}
