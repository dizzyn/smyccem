import FormSubscription from "app/components/FormSubscription";
import Concerts from "app/components/concerts";
import HeadingMobile from "app/components/typography";

export const metadata = {
  title: "Koncerty",
  description: "Naše koncerty",
};

export default function Page() {
  return (
    <section className="px-6 lg:pr-12 py-8 lg:py-4">
      <HeadingMobile>Koncerty</HeadingMobile>
      <Concerts />
      <div className="mt-16">
        <FormSubscription />
      </div>
    </section>
  );
}
