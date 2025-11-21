import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <div style={{ width: "100%",maxWidth:"1280px", margin: "0 auto", }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#CF2030" }}>
        React Swiper Carousel Demo
      </h1>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        // spaceBetween={20}
        // slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        // navigation
        style={{
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
        }}
      >

        <SwiperSlide>
          <img
            src="https://imgcdn.floweraura.com/birthday-landingpage-fa-desktop.jpg?tr=w-1280,dpr-1.5,q-70"
            alt="Nature 1"
            style={{ width: "100%", height: "350px", objectFit: "fill" }}
          />
        </SwiperSlide>

         

        <SwiperSlide>
          <img
            src="https://imgcdn.floweraura.com/anniversary-cake-homepage-fa-desktop.jpg?tr=w-1280,dpr-1.5,q-70"
            alt="Nature 3"
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://imgcdn.floweraura.com/chocolate-cake-landingpage-fa-desktop.jpg?tr=w-1280,dpr-1.5,q-70"
            alt="Nature 4"
            style={{ width: "100%", height: "350px", objectFit: "fill" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
