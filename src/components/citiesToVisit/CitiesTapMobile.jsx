import CitiesToVisitDesktop from "./CitiesToVisitDesktop";
import { useState } from "react";
import './CitiesToVisit.css'

// For get the Swiper Slider Class
import './../tours/TourCard.css'


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const CitiesTapMobile = () => {
    const [desktopArray, setDesktopArray] = useState(new Array(8).fill(null));
  return (
    <div>
                            <Swiper
                             id="customButtonSwiper"
                             slidesPerView={"auto"}
                             centeredSlides={false}
                             spaceBetween={0}
                             freeMode={true}
                             navigation={true}
                             grabCursor={true}
                             modules={[FreeMode, Pagination, Navigation]}
                             className="mySwiper"
                             breakpoints={{
                               // when window width is >= 640px
                               200: {
                                 width: 200,
                                 slidesPerView: 1.3,
                               },
                               375: {
                                 width: 375,
                                 slidesPerView: 1.5,
                               },
                               480: {
                                 width: 480,
                                 slidesPerView: 2,
                               },
                               768: {
                                 width: 768,
                                 slidesPerView: 3.2,
                               },
                               1024: {
                                 width: 1024,
                                 slidesPerView: 4.3,
                               },
                             }}>
                                <div className="">
                                {desktopArray.map((item, indx) => (
                                    <SwiperSlide key={indx} className=" flex flex-col customWrapper my-[10px]">
                                        <CitiesToVisitDesktop />
                                    </SwiperSlide>
                            ))}
                                </div>
                            </Swiper>
                        </div>
  )
}

export default CitiesTapMobile