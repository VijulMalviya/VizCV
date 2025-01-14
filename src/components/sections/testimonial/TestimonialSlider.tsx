import { testimonials } from "@/constant";
import TestimonialCard from "./TestimonialCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function TestimonialSlider() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      style={{ margin: 0 }}
      spaceBetween={10}
      className="scv-swiper"
      breakpoints={{
        900: {
          slidesPerView: 1,
        },

        901: {
          slidesPerView: 2,
        },
      }}
    >
      {testimonials?.map((testimonial, index) => (
        <React.Fragment key={index}>
          <SwiperSlide style={{ width: "100%", height: "100%" }}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        </React.Fragment>
      ))}
    </Swiper>
  );
}

export default TestimonialSlider;
