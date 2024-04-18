import { slugify } from 'app/hudba/utils';
import classNames from 'classnames';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Chords({ text, block }: { text: string; block: boolean }) {
    return (
      <span
        className={classNames(
          'chords text-white px-2 py-1 rounded bg-orange-500/80',
          block ? 'block' : 'inline'
        )}
      >
        [{text}]
      </span>
    );
  },
};

export function CustomMDX({ source }: { source: string }) {
  const src = source
    .replaceAll('[', "<Chords text='")
    .replaceAll(']\\', "' block/>\\")
    .replaceAll(']', "'/>");
  return <MDXRemote source={src} components={components as any} />;
}
