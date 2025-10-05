import React from "react";
import SectionTitle from "../ui/section-title";
import data from "../data/data.json";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export const Case = () => {
  const cases = data.Case;
  return (
    <div id="case" className="w-[1280px] m-auto mt-24 scroll-mt-24">
      <SectionTitle
        heading="Cases"
        paragraph="Discover how we turn ideas into results. Our case studies showcase real-world projects where we delivered measurable impact, innovative, and seamless digital experiences for our clients."
      />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
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
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {cases.map((c) => (
          <SwiperSlide>
            <div className="p-5 my-10 border-2 border-secondary rounded-2xl h-full">
              <img src={c.img} alt={c.alt} className="rounded-2xl" />
              <h1 className="mt-5 text-lg font-semibold">{c.title}</h1>
              <p className="mt-1 text-sm">{c.details}</p>
              <div className="flex justify-between mt-5">
                <h6 className="text-sm cursor-pointer">View Project →</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3 m-auto select-none">
          <h1 className="case-prev cursor-pointer text-3xl">←</h1>
          <h1 className="case-next cursor-pointer text-3xl">→</h1>
        </div>
      </motion.div>
    </div>
  );
};
