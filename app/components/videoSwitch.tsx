'use client';

import React, { useState } from 'react';
import { PiX, PiYoutubeLogo } from 'react-icons/pi';

export default function VideoSwitch({ videoID }: { videoID?: string }) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    videoID && (
      <>
        <a
          className="flex gap-1 text-sm items-center cursor-pointer"
          onClick={() => setShowVideo(!showVideo)}
        >
          <PiYoutubeLogo className="text-red-500 w-7 h-7" />
          Video
        </a>
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
                src={'https://www.youtube.com/embed/' + videoID}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full shadow-2xl"
              />
            </div>
          </div>
        )}
      </>
    )
  );
}
