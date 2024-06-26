import fs from "fs";
import path from "path";
import type { Song, Metadata } from "./[slug]/page";

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = slugify(path.basename(file, path.extname(file)));

    return {
      metadata,
      slug,
      content,
    } satisfies Song;
  });
}

export function getSongs() {
  return getMDXData(path.join(process.cwd(), "app", "hudba", "songs"));
}

// export function formatDate(date: string, includeRelative = false) {
//   let currentDate = new Date();
//   if (!date.includes("T")) {
//     date = `${date}T00:00:00`;
//   }
//   let targetDate = new Date(date);

//   let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
//   let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
//   let daysAgo = currentDate.getDate() - targetDate.getDate();

//   let formattedDate = "";

//   if (yearsAgo > 0) {
//     formattedDate = `${yearsAgo}y ago`;
//   } else if (monthsAgo > 0) {
//     formattedDate = `${monthsAgo}mo ago`;
//   } else if (daysAgo > 0) {
//     formattedDate = `${daysAgo}d ago`;
//   } else {
//     formattedDate = "Today";
//   }

//   let fullDate = targetDate.toLocaleString("en-us", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });

//   if (!includeRelative) {
//     return fullDate;
//   }

//   return `${fullDate} (${formattedDate})`;
// }
