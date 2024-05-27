import { getSongs } from "app/hudba/utils";
import { baseUrl } from "./basepath";

export default async function sitemap() {
  let blogs = getSongs().map((post) => ({
    url: `${baseUrl}/hudba/${post.slug}`,
    youtube: post.metadata.youtube,
    info: post.metadata.info,
  }));

  let routes = ["", "/hudba", "/o-projektu", "/koncerty", "/kontakt"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return [...routes, ...blogs];
}
