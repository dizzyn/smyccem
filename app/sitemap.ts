import { getSongs } from "app/hudba/utils";
import { baseUrl } from "./basepath";

export default async function sitemap() {
  let blogs = getSongs().map((post) => ({
    url: `${baseUrl}/hudba/${post.slug}`,
    youtubeId: post.metadata.youtubeId,
  }));

  let routes = ["", "/hudba"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
