"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const dataArray = [
  {
    descriptions: [
      "Simple bot setup",
      "Completing the trend bot flow",
      "Simple bot setup",
      "Completing the trend bot flow",
      "Simple bot setup",
      "Setup to receive real-time buy alerts",
      "Simple bot setup",
      "Deployement",
    ],
  },
  {
    descriptions: [
      "Completing the trend bot flow",
      "Simple bot setup",
      "Simple bot setup",
      "Simple bot setup",
    ],
  },
  {
    descriptions: [
      "Simple bot setup",
      "Completing the trend bot flow",
      "Simple bot setup",
      "Setup to receive real-time buy alerts",
      "Simple bot setup",
      "Deployement",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section className="bg-[#120e11] text-white w-screen py-12 px-5">
      <div className="w-[95%] md:w-[90%] mx-auto">
      <h1 className="text-xl md:text-4xl w-[90%] container mx-auto font-bold relative -bottom-14">
        Our RoadMap
      </h1>
      <div className="md:mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2.5}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {dataArray.map((item, index) => (
            <SwiperSlide
              key={index}
              className="p-6 shadow-md bg-[rgba(87,92,105,0.1)] mt-24"
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-FAQs p-2 pl-4 text-black rounded-lg">
                Phase {index + 1}
              </h3>
              <ul>
                {item.descriptions.map((description, i) => (
                  <li key={i} className="mb-2 flex gap-x-3">
                    <img src="Images/arrow.svg" alt="arrow" /> {description}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
