
import './TourCard.css'

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const TourCardBox = ({ hotel }) => {
  let {
    property_name,
    class_rating,
    short_address,
    display_facilities,
    discount_percent,
    black_price,
    red_price,
    images,
    rpredi,
  } = hotel;

  // const [isItemInCart, setIsItemInCart] = useState(isInCart(rpredi));




  return (
    // <div className="my-4">
    //   <Swiper
    //   id='custom_card_box'
    //     slidesPerView={1}
    //     spaceBetween={30}
    //     keyboard={{
    //       enabled: true,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Keyboard, Pagination, Navigation]}
    //     className="mySwiper"
    //   >
    //     {images.slice(0, 7).map((img, indx) => (
    //       <SwiperSlide key={indx} className="">
    //         <div className='bg-bg-warning'>
    //           <img className="bg-cover object-cover h-[205px] w-full" src={img} alt="" />
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>







    <div className="shadow-customShadow2  hover:customShadow2 my-[20px] 
     bg-white rounded-xl h-[442px] w-[279px] hover:shadow-focusShadow ">
      <div>
        {/* <img className="rounded-t-xl" src={thumb_image} alt="" /> */}

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <div className=''>
            {images.slice(0, 6).map((image, indx) => (
              <SwiperSlide key={indx}>
                <div className="relative">
                  <img className="rounded-t-xl h-[205px] w-full" src={image} alt="" />
                  <div className="absolute top-0 right-0 h-16 w-16 flex items-center justify-center  text-bg-white rounded-full">
                    {/* <FontAwesomeIcon
                    onClick={() => handleAddData(rpredi)}
                    className={`text-base11 hover:animate-pulse cursor-pointer ${isItemInCart ? "text-btn-red" : ""
                      }`}
                    icon={faHeart}
                  /> */}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M17.7556 11.1886L17.7555 11.1886L17.7517 11.1938C16.7246 12.6112 15.4916 13.8401 14.2193 14.9228L14.2108 14.93L14.2027 14.9376C13.6199 15.4801 12.6697 16.2939 11.7803 16.9777C11.3351 17.3199 10.9132 17.6233 10.5649 17.8426C10.3903 17.9525 10.2421 18.0362 10.1238 18.0925C10.067 18.1196 10.0251 18.1363 9.99628 18.1466C9.81899 18.0896 9.59712 17.9572 9.33289 17.7586C9.18558 17.6479 9.0405 17.5289 8.89433 17.4089L8.88701 17.4029C8.74867 17.2893 8.60489 17.1713 8.47127 17.0731C5.69518 14.9626 2.79025 12.4541 1.32774 9.75429C0.115554 7.1739 0.165361 4.09888 1.93537 2.23576C4.28728 0.129472 7.81864 0.552624 9.60117 2.74781L9.99951 3.23837L10.3853 2.73789C10.8628 2.11844 11.4469 1.63171 12.1416 1.27433C15.0134 0.139507 17.9479 1.30596 19.144 3.85546C19.979 6.4708 19.2745 9.14842 17.7556 11.1886Z" fill="#142B33" fillOpacity="0.4" stroke="white" />
                      </svg>
                    </span>
                  </div>

                  <div className="absolute top-5 left-0 px-2 py-1  text-bg-white bg-btn-red">
                    <div className="text-base12 font-medium flex flex-row items-center">
                      {/* <FontAwesomeIcon icon={faGem} /> */}
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1.31246 4.96899H12.6875M0.968475 5.27901L6.64914 12.1208C6.69042 12.1707 6.74354 12.2112 6.80437 12.2391C6.86521 12.267 6.93213 12.2814 6.99996 12.2814C7.06779 12.2814 7.13471 12.267 7.19555 12.2391C7.25638 12.2112 7.30949 12.1707 7.35078 12.1208L13.0314 5.27901C13.0873 5.21149 13.1197 5.12977 13.1243 5.04474C13.129 4.9597 13.1056 4.87536 13.0574 4.80294L11.1305 1.91476C11.0908 1.85499 11.0354 1.80563 10.9694 1.77136C10.9034 1.7371 10.829 1.71907 10.7534 1.71899H3.24648C3.17087 1.71907 3.09654 1.7371 3.03054 1.77136C2.96455 1.80563 2.90908 1.85499 2.86941 1.91476L0.942499 4.80294C0.894279 4.87536 0.870939 4.9597 0.875579 5.04474C0.880219 5.12977 0.91262 5.21149 0.968475 5.27901V5.27901Z" stroke="white" strokeWidth="0.826531" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.9375 2.12524L9.625 4.96899L7 1.71899M3.0625 2.12524L4.375 4.96899L7 1.71899M7 11.8752L4.375 4.96899M7 11.8752L9.625 4.96899" stroke="white" strokeWidth="0.826531" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="">
                        {" "}
                        &nbsp; - {Math.ceil(discount_percent)}% off{" "}
                      </span>
                      <span className="bg-bg-white text-btn-red px-[2px] font-semibold">
                        Deal!
                      </span>
                    </div>
                  </div>
                  <div className='absolute top-[88%] left-[35%] bottom-[0%]  text-bg-white text-base12'>
                    <div className='flex flex-row items-center'>
                    <span className='mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <g clipPath="url(#clip0_23845_32350)">
                          <path d="M8.70833 2.47388H2.29167C1.78541 2.47388 1.375 2.88428 1.375 3.39054V9.80721C1.375 10.3135 1.78541 10.7239 2.29167 10.7239H8.70833C9.21459 10.7239 9.625 10.3135 9.625 9.80721V3.39054C9.625 2.88428 9.21459 2.47388 8.70833 2.47388Z" stroke="white" strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7.33594 1.55591V3.38924" stroke="white" strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.66406 1.55591V3.38924" stroke="white" strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1.375 5.22388H9.625" stroke="white" strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_23845_32350">
                            <rect width="11" height="11" fill="white" transform="translate(0 0.639893)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    
                    <div className='mt-1'>2 Days, 1 Night</div>
                    </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </div>

        </Swiper>
      </div>

      <div className="m-2 h-[227px] relative ">
        <div>
          <div className="flex justify-between gap-5 my-[6px] dark:text-white">
            <p className="font-medium text-base16 text-txt-primary_light mb-2  dark:text-white">{property_name}</p>
            <div className="flex items-start">
              <div className="flex items-center text-base14 dark:text-white">
                {/* <FontAwesomeIcon
                  className="mr-1 text-yellow-400"
                  icon={faStar}
                /> */}

                <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M18.273 7.11964L13.314 6.39893L11.0972 1.90479C11.0367 1.78175 10.9371 1.68214 10.814 1.62159C10.5054 1.46925 10.1304 1.5962 9.97615 1.90479L7.75935 6.39893L2.80036 7.11964C2.66364 7.13917 2.53864 7.20362 2.44294 7.30128C2.32724 7.42019 2.26348 7.58018 2.26568 7.74608C2.26788 7.91199 2.33585 8.07023 2.45466 8.18604L6.04255 11.6841L5.19489 16.6235C5.17502 16.7384 5.18773 16.8566 5.2316 16.9647C5.27546 17.0727 5.34872 17.1663 5.44307 17.2348C5.53742 17.3033 5.64909 17.3441 5.7654 17.3524C5.88171 17.3607 5.99803 17.3362 6.10114 17.2817L10.5367 14.9497L14.9722 17.2817C15.0933 17.3462 15.234 17.3677 15.3687 17.3442C15.7086 17.2856 15.9371 16.9634 15.8785 16.6235L15.0308 11.6841L18.6187 8.18604C18.7164 8.09034 18.7808 7.96534 18.8004 7.82862C18.8531 7.48682 18.6148 7.17042 18.273 7.11964Z" fill="#F6D731" />
                  </svg>
                </span>
                {class_rating}
              </div>
            </div>
          </div>
          <div className="text-sm  justify-start text-txt-primary_light  mb-[16px] dark:text-white">
            {/* <FontAwesomeIcon className="mr-3" icon={faLocationDot} /> */}
            <div className="flex items-start text-base14">
              <span className="mt-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <g clipPath="url(#clip0_356_570)">
                    <path d="M12.25 6.33252C12.25 10.4159 7 13.9159 7 13.9159C7 13.9159 1.75 10.4159 1.75 6.33252C1.75 4.94013 2.30312 3.60477 3.28769 2.62021C4.27226 1.63564 5.60761 1.08252 7 1.08252C8.39239 1.08252 9.72774 1.63564 10.7123 2.62021C11.6969 3.60477 12.25 4.94013 12.25 6.33252Z" stroke="#142B33" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 8.08252C7.9665 8.08252 8.75 7.29902 8.75 6.33252C8.75 5.36602 7.9665 4.58252 7 4.58252C6.0335 4.58252 5.25 5.36602 5.25 6.33252C5.25 7.29902 6.0335 8.08252 7 8.08252Z" stroke="#142B33" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_356_570">
                      <rect width="14" height="14" fill="white" transform="translate(0 0.500488)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>


              <span className="font-normal text-txt-primary_light">
                {short_address}
              </span>
            </div>
          </div>
          <div className="text-sm text-base14 dark:text-white">
            {/* <FontAwesomeIcon className="mr-2" icon={faHouse} /> */}
            <div className="flex items-start">
              <span className="mt-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <g clipPath="url(#clip0_356_576)">
                    <path d="M13.4873 5.79048L9.06267 1.36531C8.51507 0.819304 7.77331 0.512695 7.00001 0.512695C6.2267 0.512695 5.48495 0.819304 4.93734 1.36531L0.512757 5.79048C0.349672 5.95252 0.220373 6.14532 0.132355 6.3577C0.0443376 6.57009 -0.000647734 6.79783 7.04637e-06 7.02773V12.7543C7.04637e-06 13.2184 0.184382 13.6636 0.51257 13.9917C0.840759 14.3199 1.28588 14.5043 1.75001 14.5043H12.25C12.7141 14.5043 13.1593 14.3199 13.4874 13.9917C13.8156 13.6636 14 13.2184 14 12.7543V7.02773C14.0007 6.79783 13.9557 6.57009 13.8677 6.3577C13.7796 6.14532 13.6503 5.95252 13.4873 5.79048ZM8.75001 13.3376H5.25001V11.0428C5.25001 10.5787 5.43438 10.1336 5.76257 9.80537C6.09076 9.47718 6.53588 9.29281 7.00001 9.29281C7.46414 9.29281 7.90926 9.47718 8.23744 9.80537C8.56563 10.1336 8.75001 10.5787 8.75001 11.0428V13.3376ZM12.8333 12.7543C12.8333 12.909 12.7719 13.0574 12.6625 13.1668C12.5531 13.2762 12.4047 13.3376 12.25 13.3376H9.91667V11.0428C9.91667 10.2693 9.60938 9.5274 9.0624 8.98042C8.51542 8.43343 7.77356 8.12614 7.00001 8.12614C6.22646 8.12614 5.48459 8.43343 4.93761 8.98042C4.39063 9.5274 4.08334 10.2693 4.08334 11.0428V13.3376H1.75001C1.5953 13.3376 1.44692 13.2762 1.33753 13.1668C1.22813 13.0574 1.16667 12.909 1.16667 12.7543V7.02773C1.16721 6.87313 1.22862 6.72497 1.33759 6.61531L5.76217 2.19189C6.091 1.8646 6.53606 1.68086 7.00001 1.68086C7.46395 1.68086 7.90902 1.8646 8.23784 2.19189L12.6624 6.61706C12.771 6.72629 12.8323 6.87374 12.8333 7.02773V12.7543Z" fill="#142B33" />
                  </g>
                  <defs>
                    <clipPath id="clip0_356_576">
                      <rect width="14" height="14" fill="white" transform="translate(0 0.500488)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="font-normal text-txt-primary_light">
                {display_facilities[0].name}, {display_facilities[1].name},{" "}
                {display_facilities[2].name}.
              </span>
            </div>


          </div>
        </div>

        <div className="text-center absolute right-20 bottom-0 dark:text-white ">
          <p className="text-center text-base12 font-normal text-txt-primary_light dark:text-white">
            Checkout Price:
          </p>{" "}
          <span className=" text-txt-primary_light text-base16 font-medium dark:text-white">
            {Math.ceil(red_price)} BDT
          </span>{" "}
          <span className="text-txt-hint text-base14 line-through font-medium">
            {" "}
            {black_price} BDT{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TourCardBox