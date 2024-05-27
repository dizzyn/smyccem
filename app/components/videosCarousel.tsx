'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperTypes } from 'swiper/types';
import 'swiper/css';
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi';

export default function VideosCarousel({ data }: { data: any[] }) {
  const [swiper, setSwiper] = useState<null | SwiperTypes>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    swiper?.slidePrev();
    setCurrentSlide(swiper?.realIndex || 0);
  };

  const nextSlide = () => {
    swiper?.slideNext();
    setCurrentSlide(swiper?.realIndex || 0);
  };

  return (
    <div className="max-w-2xl relative overflow-hidden">
      <div className="flex">
        <button
          onClick={prevSlide}
          className="bg-black/40 hover:bg-black text-white cursor-pointer rounded-l px-1 lg:px-3"
        >
          <PiArrowLeft className="w-5 h-5" />
        </button>
        <Swiper
          slidesPerView={1}
          loop
          onSwiper={(s: any) => {
            setSwiper(s);
          }}
          className="rounded overflow-hidden aspect-video"
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide>
                <iframe
                  src={
                    (i === currentSlide &&
                      `https://www.youtube.com/embed/${item.metadata?.youtube}?si=plShCFYB2r81LBzc?vq=hd1080&modestbranding=1&rel=0`) ||
                    ''
                  }
                  title="Trhni si smyčcem"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full aspect-video bg-black"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          onClick={nextSlide}
          className="bg-black/40 hover:bg-black text-white cursor-pointer rounded-r px-1 lg:px-3"
        >
          <PiArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
