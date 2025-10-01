import React from "react";
import data from "../data/data.json"
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export const Feedback = () => {
  const feed = data.Feedback
  return (
    <div
      id="feedback"
      className="w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1440px] m-auto mt-[80px]"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-none"
      >
        What Client
      </motion.h1>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between"
      >
        <h1 className="text-[70px] md:text-[100px] lg:text-[150px] xl:text-[205px] 2xl:text-[276px] leading-none">
          Says
        </h1>
        <div className="flex items-center justify-between">
          <p className="hidden lg:flex w-[60%] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[22px] text-[#424242]">
            Cultivating Trust Through Each Testimonial Shared.
          </p>
          <div className="flex items-center gap-5">
            <div className="feed-prev w-[43px] h-[23px] md:w-[104px] md:h-[56px] border-[#4F4F4F] border-[1px] rounded-[90px] flex items-center justify-center">
              <img
                src="img/feed-arrow.svg"
                alt="arrow"
                className="w-[13px] h-[13px] md:w-[36px] md:h-[41px]"
              />
            </div>
            <div className="feed-next w-[43px] h-[23px] md:w-[104px] md:h-[56px] border-[#4F4F4F] border-[1px] rounded-[90px] flex items-center justify-center">
              <img
                src="img/feed-arrow.svg"
                alt="arrow"
                className="w-[13px] h-[13px] md:w-[36px] md:h-[41px] rotate-180"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[60%] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[22px] text-[#424242] mt-3 lg:hidden"
      >
        Cultivating Trust Through Each Testimonial Shared.
      </motion.p>
      <div className="mt-[70px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".feed-next",
            prevEl: ".feed-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {feed.map((f) => (
            <SwiperSlide>
              <div className="px-10 xl:px-[70px] py-[45px] rounded-[45px] transition-all  hov">
                <div className="flex justify-between">
                  <div></div>
                  <img
                    src={f.profile}
                    alt={f.alt}
                    className="w-[90px] h-[90px]"
                  />
                </div>
                <div>
                  <h1 className="text-[80px] leading-[.25]">“</h1>
                  <p className="text-[30px] w-[80%]">{f.feed}</p>
                </div>
                <div className="flex items-center gap-5 mt-[150px]">
                  <div>
                    <h4 className="text-[25px]">{f.name}</h4>
                    <h5 className="text-[18px]">{f.position}</h5>
                    <h5 className="text-[14px]">{f.country}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
