import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getSongs } from 'app/hudba/utils';
import { baseUrl } from 'app/basepath';
import classNames from 'classnames';
import ChordsSwitch from '../../components/chordsSwitch';
import VideoSwitch from 'app/components/videoSwitch';

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
      type: 'article',
      url: `${baseUrl}/hudba/${songs.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
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
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: song.metadata.title,
            // datePublished: post.metadata.publishedAt,
            // dateModified: post.metadata.publishedAt,
            // description: post.metadata.summary,
            image: song.metadata.thumbnail
              ? `${baseUrl}${song.metadata.thumbnail}`
              : `/og?title=${encodeURIComponent(song.metadata.title)}`,
            url: `${baseUrl}/hudba/${song.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

      <div className="space-y-8">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-y-1 px-6 py-3 uppercase bg-white">
          <h1 className="font-bold text-xl lg:text-3xl text-black">
            {song.metadata.title}
          </h1>
          <div className="flex items-center gap-4">
            <ChordsSwitch />
            <VideoSwitch videoID={song.metadata.youtube} />
          </div>
        </div>

        {song.metadata.info && (
          <div className="px-6">
            <p className="text-white font-medium uppercase">
              {song.metadata.info}
            </p>
          </div>
        )}

        <article className={classNames('songLyrics px-6')}>
          <CustomMDX source={song.content} />
        </article>
      </div>
    </section>
  );
}
