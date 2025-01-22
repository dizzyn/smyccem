"use client";

import { Song } from "app/hudba/[slug]/page";
import { generateThumbUrl } from "app/hudba/utils-cli";
import Link from "next/link";
import React, { useState } from "react";
import { BsPlayBtnFill } from "react-icons/bs";
import { PiX, PiYoutubeLogo } from "react-icons/pi";

export default function VideoSwitch({
  song,
  btnClassNames,
  style,
  autoplay,
}: {
  autoplay?: boolean;
  song: Song;
  btnClassNames?: string;
  style: "button" | "thumb";
}) {
  const [showVideo, setShowVideo] = useState(autoplay);

  return (
    <>
      {style == "button" ? (
        <a className={btnClassNames} onClick={() => setShowVideo(!showVideo)}>
          <PiYoutubeLogo />
          Video
        </a>
      ) : (
        <div
          onClick={() => setShowVideo(!showVideo)}
          className="group relative border-white border-3 cursor-pointer aspect-video backdrop-blur-2xl"
        >
          <img src={generateThumbUrl(song)} alt="Cover Image" />
          <BsPlayBtnFill className="absolute top-0 left-1  text-2xl lg:text-4xl hover:color-black group-hover:text-3xl group-hover:lg:text-5xl transition-all" />
          <div className="absolute left-0 right-O bottom-0.5 pl-1 text-right">
            {song.metadata.title}
          </div>
        </div>
      )}

      {showVideo && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-2xl z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 p-4 cursor-pointer hover:bg-white group transition-all"
            onClick={() => setShowVideo(false)}
          >
            <PiX className="text-white group-hover:text-black w-7 h-7" />
          </button>
          <div className="max-w-5xl w-full rounded-lg relative aspect-video overflow-hidden">
            <iframe
              src={
                "https://www.youtube.com/embed/" +
                song.metadata.youtube +
                "?autoplay=1"
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
