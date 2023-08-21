import './TourCard.css'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import TourCardBox from "./TourCardBox";


// Swiper JS 
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";




const TourCard = ({children}) => {
    const { hotels, activeCategory } = useContext(AuthContext);

    console.log(hotels)

    
  return (
    <div className="">
      <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] mx-auto">
        <h2 className='text-[18px] xl:text-base24 text-txt-primary_light mt-[8px]  font-medium leading-[140%]'>{children}</h2>
        <Swiper
          id="customSwiper"
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
              slidesPerView: 1.3,
            },
            480: {
              width: 480,
              slidesPerView: 1.3,
            },
            768: {
              width: 768,
              slidesPerView: 2.75,
            },
            1024: {
              width: 1024,
              slidesPerView: 4.3,
            },
          }}
        >
          {hotels.map((item, indx) => (
            <SwiperSlide
              key={item.rpredi}
              className={`swiper-slide-margin flex flex-col customWrapper ${indx === 0? 'pl-[4px]' : ''}`}
            >
              <TourCardBox hotel={item}></TourCardBox>
            </SwiperSlide>
          ))}
        </Swiper>

      <div className='pt-[2px] pb-[16px] xl:pt-[22px]  xl:pb-[32px] text-base16 underline underline-offset-2  text-center text-txt-primary_light'>Show All</div>
      </div>
    </div>
  );
}

export default TourCard