import FormSubscription from "app/components/FormSubscription";
import Concerts from "app/components/concerts";

export default function ConcertsSection() {
  return (
    <section
      id="koncerty"
      className="scroll-mt-8 px-6 py-16 lg:scroll-mt-4 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl leading-[0.95] text-stone-50 lg:text-6xl">
          Koncerty
        </h2>

        <div className="mt-12">
          <Concerts />
        </div>

        <div className="mt-16">
          <FormSubscription />
        </div>
      </div>
    </section>
  );
}
