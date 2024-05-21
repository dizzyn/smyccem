import { Suspense, use } from "react";
import ConcertsStrip from "./components/concertsStrip";
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
    <div className="h-full flex items-center lg:items-end justify-end absolute inset-0 lg:relative">
      <ConcertsStripWrap />
    </div>
  );
}
