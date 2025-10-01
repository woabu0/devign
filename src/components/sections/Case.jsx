import React from "react";
import data from "../data/data.json"
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export const Case = () => {
  const cas = data.Case
  return (
    <div id="case" className="text-[50px] bg-black py-[100px] text-white">
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grad-text text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-none text-center"
      >
        Our cases
      </motion.h1>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mt-3"
      >
        <div></div>
        <div className="flex items-center gap-[10px] lg:pb-10 px-10 2xl:px-[70px]">
          <div className="case-prev w-[43px] h-[23px] md:w-[104px] md:h-[56px] border-[#4F4F4F] border-[1px] rounded-[90px] flex items-center justify-center">
            <img
              src="img/case-arrow.svg"
              alt="arrow"
              className="w-[13px] h-[13px] md:w-[36px] md:h-[41px] "
            />
          </div>
          <div className="case-next w-[43px] h-[23px] md:w-[104px] md:h-[56px] border-[#4F4F4F] border-[1px] rounded-[90px] flex items-center justify-center">
            <img
              src="img/case-arrow.svg"
              alt="arrow"
              className="w-[13px] h-[13px] md:w-[36px] md:h-[41px] rotate-180"
            />
          </div>
        </div>
      </motion.div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
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
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cas.map((c) => (
          <SwiperSlide>
            <div className="py-10 px-10 2xl:px-[70px] transition-all hover:bg-[#0F0F0F] case-hov">
              <img src={c.img} alt={c.alt} />
              <h1 className="mt-10 text-[16px] xl:text-[18px] semi">
                {c.title}
              </h1>
              <p className="mt-5 text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] vio">
                {c.details}
              </p>
              <div className="mt-[30px] flex items-center gap-[25px] text-[14px] grad-text vio">
                <h6 className="tag">{c.tag1}</h6>
                <h6 className="tag">{c.tag2}</h6>
              </div>
              <div className="flex justify-between mt-[30px] vio">
                <h6 className="text-[14px]">View Project</h6>
                <img
                  src={c.arrow}
                  alt={c.alt}
                  className="w-[36px] h-[41px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
