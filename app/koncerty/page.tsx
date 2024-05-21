import Concerts from "app/components/concerts";

export const metadata = {
  title: "Koncerty",
  description: "Naše koncerty",
};

export default function Page() {
  return (
    <section className="px-6 pr-12 py-8 lg:py-4">
      <Concerts />
    </section>
  );
}
