import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getSongs } from "app/hudba/utils";
import ChordSwitch from "./chords";
import { baseUrl } from "app/basepath";
import { YouTubeEmbed } from "@next/third-parties/google";

export async function generateStaticParams() {
  let posts = getSongs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({}) {
  let songs = getSongs().find((songs) => songs.slug === songs.slug);
  if (!songs) {
    return;
  }

  let { title, youtube, info, thumbnail } = songs.metadata;
  let ogImage = thumbnail
    ? thumbnail
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    youtube,
    info,
    openGraph: {
      title,
      type: "article",
      url: `${baseUrl}/hudba/${songs.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogImage],
    },
  };
}

export interface Metadata {
  title: string;
  info?: string;
  youtube?: string;
  thumbnail?: string;
}

export interface Song {
  metadata: Metadata;
  slug: string;
  content: string;
}

export default function Song({ params }: { params: { slug: string } }) {
  let song = getSongs().find((post) => post.slug === params.slug);

  if (!song) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: song.metadata.title,
            // datePublished: post.metadata.publishedAt,
            // dateModified: post.metadata.publishedAt,
            // description: post.metadata.summary,
            image: song.metadata.thumbnail
              ? `${baseUrl}${song.metadata.thumbnail}`
              : `/og?title=${encodeURIComponent(song.metadata.title)}`,
            url: `${baseUrl}/hudba/${song.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {song.metadata.title}
      </h1>

      {song.metadata.info}
      {song.metadata.youtube && (
        <div className="noprint">
          <YouTubeEmbed videoid={song.metadata.youtube} height={400} />
        </div>
      )}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {/* {formatDate(post.metadata.publishedAt)} */}
        </p>
      </div>
      <article className="songLyrics">
        <ChordSwitch>
          <CustomMDX source={song.content} />
        </ChordSwitch>
      </article>
    </section>
  );
}
