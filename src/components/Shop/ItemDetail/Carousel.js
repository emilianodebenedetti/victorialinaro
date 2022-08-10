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
          <SwiperSlide><video src={video} alt='Imagenes proyectos' className='w-96 h-auto' controls></video></SwiperSlide> 
          :
          <></>
        } 
      </Swiper>
    </>
  )
          
}
export default Carousel
{/* h-96 carousel carousel-horizontal rounded-box gap-5 overflow-hidden 
  <div class="flex overflow-x-scroll relative carousel-center max-w-md bg-grey h-fit w-96"  id='default-carousel'>  
  {img1 ?
    <div class="flex snap-center carousel-item duration-100 ease-in-out" >
      <img src={img1} className='carousel-item w-96 h-auto max-h-md object-cover'/>
    </div> 
    :
    <></>
  }
  {img2 ?
    <div class="flex snap-center carousel-item duration-100 ease-in-out" >
      <img src={img2} className='carousel-item w-96 h-auto max-h-full object-cover'/>
    </div> 
    :
    <></>
  }
  {img3 ?
    <div class="flex snap-center carousel-item h-full duration-100 ease-in-out" >
      <img src={img3} className='carousel-item w-96 h-auto max-h-md object-cover'/>
    </div>
    :
    <></>
  }
  {img4 ?
    <div class="flex snap-center carousel-item h-full duration-100 ease-in-out" >
      <img src={img4} className='carousel-item w-96 h-auto max-h-md object-cover'/>
    </div>
    :
    <></>
  }
  {img5 ?
    <div class="flex snap-center carousel-item h-full duration-100 ease-in-out" >
      <img src={img5} className='carousel-item w-96 h-auto max-h-md object-cover'/>
    </div>
    :
    <></>
  }
  {img6 ?
    <div class="flex snap-center carousel-item h-full duration-100 ease-in-out" >
      <img src={img6} className='carousel-item w-96 h-auto max-h-md object-cover'/>
    </div>
    :
    <></>
  }
  </div> */} 

  /*  <div className="swiper w-96 h-auto">

          <div className="swiper-wrapper">
            {/* <!-- Slides --> 
            {img1 ?
              <img src={img1} className="swiper-slide" alt='Imagen de proyecto'></img>
              :
              <></>
            }img3
            {img2 ?
              <img src={img2} className="swiper-slide" alt='Imagen de proyecto'></img>
              :
              <></>
            }
            {img3 ?
              <img src={img3} className="swiper-slide" alt='Imagen de proyecto'></img>
              :
              <></>
            }
            {img4 ?
              <img src={img4} className="swiper-slide" alt='Imagen de proyecto'></img>
              :
              <></>
            }
            {img5 ?
              <img src={img5} className="swiper-slide" alt='Imagen de proyecto'></img>
              :
              <></>
            }
            {img6 ?
              <img src={img6} className="swiper-slide" alt='Imagen de proyecto'></img>
              :
              <></>
            }
          </div>*/

          {/* <!-- If we need navigation buttons --> */}
/*           <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
 */
          {/* <!-- If we need scrollbar --> */}
          {/* <div className="swiper-scrollbar"></div>
        </div> */} 

 

