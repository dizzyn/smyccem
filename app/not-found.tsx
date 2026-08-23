import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.35em] text-stone-300/80">
        Chyba 404
      </p>
      <h1 className="mt-3 font-display text-6xl italic text-accent-soft lg:text-8xl">
        Stránka nenalezena
      </h1>
      <p className="mt-6 max-w-md text-stone-300/80">
        Zdá se, že jste zabloudili. Tahle stránka neexistuje nebo byla
        přesunuta.
      </p>
      <Link
        href="/"
        className="mt-10 flex h-10 items-center border border-stone-100/40 px-4 text-[11px] uppercase tracking-[0.25em] text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
      >
        Zpět na hlavní stránku
      </Link>
    </section>
  );
}
