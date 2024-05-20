import { Songs } from 'app/components/songs';

export const metadata = {
  title: 'Hudba',
  description: 'Naše hudba',
};

export default function Page() {
  return (
    <section className="py-4">
      <Songs />
    </section>
  );
}
