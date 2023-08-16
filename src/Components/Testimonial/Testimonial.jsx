import React from 'react'
import './Testimonial.css'
// Import Pagination from swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';

import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";

import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
const clients =[
    {
        img: profilepic1,
        review:
        "Lorem ipusm dolor, dsit amet consekgjhg yrgg niughlu ygerukwg kyrfdktv yjtgfydg dfrtcd jytefd yfedtve yfdyrtv dfeytc ."
    },
    {
        img: profilepic2,
        review:
        "Lorem ipusm dolor, dsit amet consekgjhg yrgg niughlu ygerukwg kyrfdktv yjtgfydg dfrtcd jytefd yfedtve yfdyrtv dfeytc ."
    },
    {
        img: profilepic3,
        review:
        "Lorem ipusm dolor, dsit amet consekgjhg yrgg niughlu ygerukwg kyrfdktv yjtgfydg dfrtcd jytefd yfedtve yfdyrtv dfeytc ."
    },
    {
        img: profilepic4,
        review:
        "Lorem ipusm dolor, dsit amet consekgjhg yrgg niughlu ygerukwg kyrfdktv yjtgfydg dfrtcd jytefd yfedtve yfdyrtv dfeytc ."
    },
]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper 
       
        slidesPerView={1}
        Pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">

                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>



    </div>
  )
}

export default Testimonial