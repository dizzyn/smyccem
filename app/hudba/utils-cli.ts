import { baseUrl } from "app/basepath";
import { Song } from "./[slug]/page";

export const generateThumbUrl = ({ metadata: { thumbnail } }: Song) =>
  thumbnail ? `${baseUrl}/thumbs/${thumbnail}` : `${baseUrl}/thumbs/thumb.jpeg`;

//   song.metadata.youtube
//     ? `https://img.youtube.com/vi/${song.metadata.youtube}/0.jpg`
//     : `/og?title=${encodeURIComponent(song.metadata.title)}`;
