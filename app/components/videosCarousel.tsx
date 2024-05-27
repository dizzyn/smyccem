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

  const Btn = ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className="bg-white hover:bg-black text-black rounded hover:text-white cursor-pointer transition-all px-1 lg:px-2"
    >
      {children}
    </button>
  );
  return (
    <div className="max-w-2xl relative overflow-hidden">
      <div className="flex gap-1 border-4 border-white bg-white rounded-lg">
        <Btn onClick={prevSlide}>
          <PiArrowLeft className="w-5 h-5" />
        </Btn>
        <Swiper
          slidesPerView={1}
          loop
          onSwiper={(s: any) => {
            setSwiper(s);
          }}
          className="overflow-hidden aspect-video"
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide>
                <iframe
                  src={
                    (i === currentSlide &&
                      `https://www.youtube.com/embed/${item.metadata?.youtube}?si=plShCFYB2r81LBzc?vq=hd1080&modestbranding=0&rel=0`) ||
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
        <Btn onClick={nextSlide}>
          <PiArrowRight className="w-5 h-5" />
        </Btn>
      </div>
    </div>
  );
}
