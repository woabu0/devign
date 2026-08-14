import React from "react";
import data from "../data/data.json";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import SectionTitle from "../ui/section-title";
import { ANIMATION_DURATION } from "../../constants";

export const Feedback = () => {
  const feed = data.Feedback;
  return (
    <div
      id="feedback"
      className="w-full max-w-7xl m-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <SectionTitle
        heading="Feedback"
        paragraph="We value your thoughts and experiences. Your feedback helps us improve and inspires us to deliver even better digital solutions. Share your story and let us know how we’re doing."
      />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
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
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {feed.map((f, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 sm:p-5 md:p-6 my-4 sm:my-6 md:my-8 rounded-xl sm:rounded-2xl transition-all border-2 border-secondary min-h-[380px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[440px] flex flex-col">
              <div className="flex justify-between">
                <div></div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src={f.profile} 
                    alt={f.alt} 
                    width="64"
                    height="64"
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    onError={(e) => {
                      e.target.src = "./img/feedback-david.jpg";
                    }}
                  />
                </div>
              </div>
              <div className="flex-grow flex flex-col mt-2 sm:mt-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl leading-none">"</h1>
                <p className="text-sm sm:text-base md:text-lg mt-1 sm:mt-2 flex-grow overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: 'vertical',
                  lineHeight: '1.5',
                }}>{f.feed}</p>
              </div>
              <div className="mt-3 sm:mt-4 flex-shrink-0">
                <h4 className="text-xs sm:text-sm md:text-base lg:text-lg bg-primary p-1 sm:p-2 inline rounded-sm">
                  {f.name}
                </h4>
                <h5 className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{f.country}</h5>
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
          <h1 className="feed-prev cursor-pointer text-2xl sm:text-3xl md:text-4xl hover:opacity-70 transition-opacity">←</h1>
          <h1 className="feed-next cursor-pointer text-2xl sm:text-3xl md:text-4xl hover:opacity-70 transition-opacity">→</h1>
        </div>
      </motion.div>
    </div>
  );
};
