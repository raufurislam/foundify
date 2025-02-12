import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [slides] = useState([
    {
      id: 1,
      title: "Find What You’ve Lost, Return What You’ve Found.",
      description:
        "Connect with your community to reunite lost items with their rightful owners. Together, let’s make a difference.",
      image: "https://i.ibb.co.com/nsBgz0d/Foundify-Banner-09-09.png",
    },
    {
      id: 2,
      title: "Lost Something? We’ll Help You Find It!",
      description:
        "Easily report lost items and search for found items in your area. Let’s bring your belongings back home.",
      image: "https://i.ibb.co/hZSkjfK/Foundify-Banner-07.png",
    },
    {
      id: 3,
      title: "Bringing Communities Together, One Item at a Time",
      description:
        "Join a network of people dedicated to helping others recover lost belongings and create trust.",
      image: "https://i.ibb.co/qYGRFfC/Foundify-Banner-08.png",
    },
    {
      id: 4,
      title: "Your Partner in Finding the Missing Pieces",
      description:
        "Whether you’ve lost something or found an item, our platform makes it simple to connect and resolve.",
      image: "https://i.ibb.co/7vqNdwZ/Foundify-Banner-06.png",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-screen-xl mx-auto pt-2 lg:px-2 px-4">
      <div className="rounded-lg bg-base-200 lg:px-12 px-4 md:px-7 py-5">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Target the custom class
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                {/* Text Content */}
                <div
                  className={`flex-1 ${
                    activeIndex === index
                      ? "animate__animated animate__fadeIn"
                      : "opacity-0"
                  }`}
                >
                  <h1 className="lg:text-4xl md:text-3xl text-2xl mb-3 font-bold">
                    {slide.title}
                  </h1>
                  <p className="lg:w-2/3 text-sm text-gray-500">
                    {slide.description}
                  </p>
                  <Link
                    to="/allItem"
                    className="btn btn-neutral text-white mt-8 w-full md:w-auto"
                  >
                    Explore Now
                  </Link>
                </div>
                {/* Image */}
                <div className="flex-1">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
};

export default Banner;
