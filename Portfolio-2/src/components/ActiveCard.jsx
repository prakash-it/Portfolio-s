import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { slides } from "../utils/data";
import { RxArrowTopRight } from "react-icons/rx";

export default function ActiveCard() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 py-16"
      id="Projects"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-primary text-3xl md:text-4xl font-bold tracking-wide">
          Featured Projects
        </h5>
        <p className="text-neutral-500 mt-2 text-sm md:text-base">
          A glimpse of my recent creative work
        </p>
      </div>

      <Swiper
        breakpoints={{
          340: { slidesPerView: 1.2, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        freeMode
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[95%] mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Card */}
            <div className="group relative rounded-2xl overflow-hidden 
                            bg-white/60 backdrop-blur-lg 
                            shadow-lg hover:shadow-2xl
                            transition-all duration-500
                            hover:-translate-y-2">

              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-56 object-cover 
                           transition-transform duration-700
                           group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-black/70 via-black/20 to-transparent 
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-4 
                              flex items-center justify-between
                              opacity-0 group-hover:opacity-100
                              translate-y-6 group-hover:translate-y-0
                              transition-all duration-500">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {slide.title || "Project Title"}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    View Details
                  </p>
                </div>

                {/* Arrow Button */}
            
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center
             rounded-full bg-primary text-white
             hover:bg-primary/90
             transition-transform duration-300
             scale-90 group-hover:scale-100"
                  >
                    <RxArrowTopRight size={20} />
                  </a>

  
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
