import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
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
  Chords({ text }: { text: string }) {
    return (
      <span className="chords inline" style={{ color: "tomato" }}>
        [{text}]
      </span>
    );
  },
};

export function CustomMDX({ source }: { source: string }) {
  const src = source.replaceAll("[", "<Chords text='").replaceAll("]", "'/>");
  return <MDXRemote source={src} components={components as any} />;
}
