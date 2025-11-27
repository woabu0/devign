import React from "react";
import SectionTitle from "../ui/section-title";
import data from "../data/data.json";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ANIMATION_DURATION } from "../../constants";

export const Case = () => {
  const cases = data.Case;
  return (
    <div id="case" className="w-full max-w-7xl m-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
      <SectionTitle
        heading="Cases"
        paragraph="Discover how we turn ideas into results. Our case studies showcase real-world projects where we delivered measurable impact, innovative, and seamless digital experiences for our clients."
      />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={3}
        navigation={{
          nextEl: ".case-next",
          prevEl: ".case-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {cases.map((c, index) => (
          <SwiperSlide key={index}>
            <div className="p-3 sm:p-4 md:p-5 my-4 sm:my-5 md:my-6 border-2 border-secondary rounded-xl sm:rounded-2xl min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex flex-col">
              <div className="rounded-xl sm:rounded-2xl w-full h-[140px] sm:h-[160px] md:h-[180px] overflow-hidden flex-shrink-0">
                <img 
                  src={c.img} 
                  alt={c.alt} 
                  width="400"
                  height="300"
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              <div className="flex flex-col flex-grow min-h-0 mt-3 sm:mt-4">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black mb-2">{c.title}</h1>
                <p className="text-xs sm:text-sm md:text-base text-black flex-grow overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  lineHeight: '1.5',
                }}>{c.details}</p>
              </div>
              <div className="flex justify-between mt-3 sm:mt-4 flex-shrink-0">
                <h6 className="text-xs sm:text-sm md:text-base cursor-pointer hover:underline text-black transition-all">View Project →</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: ANIMATION_DURATION.SLOW }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3 sm:gap-4 m-auto select-none mt-4 sm:mt-6">
          <h1 className="case-prev cursor-pointer text-2xl sm:text-3xl md:text-4xl hover:opacity-70 transition-opacity">←</h1>
          <h1 className="case-next cursor-pointer text-2xl sm:text-3xl md:text-4xl hover:opacity-70 transition-opacity">→</h1>
        </div>
      </motion.div>
    </div>
  );
};
