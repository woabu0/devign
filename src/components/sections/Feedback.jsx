import React from "react";
import data from "../data/data.json";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";

export const Feedback = () => {
  const feed = data.Feedback;
  return (
    <div
      id="feedback"
      className="w-[360px] md:w-[535px] lg:w-[800px] xl:w-[1280px] m-auto mt-24"
    >
      <SectionTitle
        heading="Feedback"
        paragraph="We value your thoughts and experiences. Your feedback helps us improve and inspires us to deliver even better digital solutions. Share your story and let us know how we’re doing."
      />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
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
          1280: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {feed.map((f) => (
          <SwiperSlide>
            <div className="p-10 my-10 rounded-3xl transition-all border-2 border-secondary">
              <div className="flex justify-between">
                <div></div>
                <img src={f.profile} alt={f.alt} className="w-16 h-16" />
              </div>
              <div>
                <h1 className="text-7xl leading-[.25]">“</h1>
                <p className="text-3xl">{f.feed}</p>
              </div>
              <div className="mt-5">
                <h4 className="text-lg bg-primary p-1 inline rounded-sm">
                  {f.name}
                </h4>
                <h5 className="text-sm">{f.country}</h5>
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
          <h1 className="feed-prev cursor-pointer text-3xl">←</h1>
          <h1 className="feed-next cursor-pointer text-3xl">→</h1>
        </div>
      </motion.div>
    </div>
  );
};
