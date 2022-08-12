import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

export const Carousel = ({ img1, img2, img3, img4, img5, img6, video  }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-md bg-grey h-fit w-96"
      >
        {img1 ?
          <SwiperSlide><img src={img1} alt='Imagenes proyectos'></img></SwiperSlide> 
          :
          <></>
        }
        {img2 ?
          <SwiperSlide><img src={img2} alt='Imagenes proyectos'></img></SwiperSlide> 
          :
          <></>
        }
        {img3 ?
          <SwiperSlide><img src={img3} alt='Imagenes proyectos'></img></SwiperSlide> 
          :
          <></>
        }
        {img4 ?
          <SwiperSlide><img src={img4} alt='Imagenes proyectos'></img></SwiperSlide> 
          :
          <></>
        }
        {img5 ?
          <SwiperSlide><img src={img5} alt='Imagenes proyectos'></img></SwiperSlide> 
          :
          <></>
        }
        {img6 ?
          <SwiperSlide><img src={img6} alt='Imagenes proyectos'></img></SwiperSlide> 
          :
          <></>
        }       
        {video ?
          <SwiperSlide><video src={video} alt='Imagenes proyectos' className='w-96 h-auto' controls poster='https://firebasestorage.googleapis.com/v0/b/portfolio-victoria.appspot.com/o/Connection%201.5%2Fportada.jpg?alt=media&token=dd1cae05-f58d-4974-bd65-457c96085a06'></video></SwiperSlide> 
          :
          <></>
        } 
      </Swiper>
    </>
  )
          
}
export default Carousel


 

