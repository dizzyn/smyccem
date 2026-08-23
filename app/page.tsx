import { Suspense, use } from "react";
import ConcertsStrip from "./components/concertsStrip";
import Hero from "./components/hero";
import About from "./components/sections/about";
import Music from "./components/sections/music";
import VideoSection from "./components/sections/video";
import ConcertsSection from "./components/sections/concerts";
import ContactSection from "./components/sections/contact";
import fetchConcerts from "./fetchConcerts";

function ConcertsStripWrap() {
  const concerts = use(fetchConcerts());

  return (
    <Suspense fallback="...">
      <ConcertsStrip concerts={concerts} />
    </Suspense>
  );
}

export default function Page() {
  return (
    <>
      <Hero concertSlot={<ConcertsStripWrap />} />
      <About />
      <Music />
      <VideoSection />
      <ConcertsSection />
      <ContactSection />
    </>
  );
}
