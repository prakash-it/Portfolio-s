import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { slides } from '../utils/data';
import { RxArrowTopRight } from 'react-icons/rx';

export default function ActiveCard() {
  return (
    <section className='max-w-screen-xl px-6 mx-auto pb-10 mt-20' id='Projects'>
      <h5 className='text-primary md:text-4xl text-2xl font-semibold text-center pb-8 md:pb-14'>
        Projects
      </h5>

      <div className='mt-5'>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="max-w-[90%] lg:max-w-[80%]">
          {slides.map((slide) => (
            <SwiperSlide 
              key={slide.id} 
              className="p-4 rounded-lg flex flex-col items-center"
              style={{ 
                aspectRatio: '16/9', 
                width: '100%',
              }}>
              <img 
                src={slide.image} 
                alt={`Slide ${slide.id}`} 
                className="w-full h-full object-cover rounded-lg" 
              />
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
