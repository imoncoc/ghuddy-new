
import './Banner.css'

const Banner = () => {
    return (
      <div className="w-full custom-banner-background pt-[80px]">
        <div className="custom-banner-background h-[379px] ">
          <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[375px] px-[18px] xl:px-[0px] h-[300px]  mx-auto">
            <h2 className="text-[32px] font-medium text-txt-secondary text-start md:text-center pt-[44px] pb-[16px] tracking-[0.96px]">
              Bangladesh, Dhaka
            </h2>
            <div className="flex items-center text-base16 justify-center my-8">
              <div className="flex">
                <div className=" flex items-center">
                  <div className="flex items-center justify-center w-[116px] h-[40px]  gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_23727_11531)">
                        <path
                          d="M11.6969 6.4002L5.29688 3.2002"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.6969 10.8804V5.11921C15.6966 4.86664 15.6225 4.61857 15.4821 4.3999C15.3417 4.18123 15.1399 3.99964 14.8969 3.87336L9.29687 0.992768C9.05364 0.866355 8.77773 0.799805 8.49687 0.799805C8.21602 0.799805 7.94011 0.866355 7.69687 0.992768L2.09687 3.87336C1.85388 3.99964 1.65206 4.18123 1.51164 4.3999C1.37123 4.61857 1.29716 4.86664 1.29688 5.11921V10.8804C1.29716 11.133 1.37123 11.381 1.51164 11.5997C1.65206 11.8184 1.85388 12 2.09687 12.1262L7.69687 15.0068C7.94011 15.1333 8.21602 15.1998 8.49687 15.1998C8.77773 15.1998 9.05364 15.1333 9.29687 15.0068L14.8969 12.1262C15.1399 12 15.3417 11.8184 15.4821 11.5997C15.6225 11.381 15.6966 11.133 15.6969 10.8804Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.10156 4.7998L8.50156 7.9998L14.9016 4.7998"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 14.72V8"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23727_11531">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-bg-white font-normal">Tour</p>
                  </div>
                </div>

                <div className="bg-bg-primary rounded-full">
                  <button className="flex items-center justify-center gap-1 w-[116px] h-[40px] bottom-[1px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_23727_11539)">
                        <path
                          d="M15.914 6.04594L10.8573 0.988608C10.2315 0.364601 9.38378 0.0141907 8.50001 0.0141907C7.61623 0.0141907 6.76851 0.364601 6.14267 0.988608L1.08601 6.04594C0.899625 6.23113 0.751855 6.45147 0.651263 6.6942C0.550671 6.93692 0.49926 7.1972 0.500008 7.45994V14.0046C0.500008 14.535 0.710722 15.0437 1.08579 15.4188C1.46087 15.7939 1.96958 16.0046 2.50001 16.0046H14.5C15.0304 16.0046 15.5391 15.7939 15.9142 15.4188C16.2893 15.0437 16.5 14.535 16.5 14.0046V7.45994C16.5008 7.1972 16.4493 6.93692 16.3488 6.6942C16.2482 6.45147 16.1004 6.23113 15.914 6.04594ZM10.5 14.6713H6.50001V12.0486C6.50001 11.5182 6.71072 11.0095 7.08579 10.6344C7.46087 10.2593 7.96958 10.0486 8.50001 10.0486C9.03044 10.0486 9.53915 10.2593 9.91422 10.6344C10.2893 11.0095 10.5 11.5182 10.5 12.0486V14.6713ZM15.1667 14.0046C15.1667 14.1814 15.0964 14.351 14.9714 14.476C14.8464 14.601 14.6768 14.6713 14.5 14.6713H11.8333V12.0486C11.8333 11.1646 11.4822 10.3167 10.857 9.69159C10.2319 9.06646 9.38406 8.71527 8.50001 8.71527C7.61595 8.71527 6.76811 9.06646 6.14299 9.69159C5.51786 10.3167 5.16667 11.1646 5.16667 12.0486V14.6713H2.50001C2.3232 14.6713 2.15363 14.601 2.0286 14.476C1.90358 14.351 1.83334 14.1814 1.83334 14.0046V7.45994C1.83396 7.28326 1.90413 7.11393 2.02867 6.98861L7.08534 1.93327C7.46114 1.55923 7.96979 1.34924 8.50001 1.34924C9.03023 1.34924 9.53888 1.55923 9.91467 1.93327L14.9713 6.99061C15.0954 7.11544 15.1655 7.28395 15.1667 7.45994V14.0046Z"
                          fill="#2E6980"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23727_11539">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-normal mt-1 text-btn-secondary">
                      Hotel
                    </span>
                  </button>
                </div>

                <div className="flex items-center ">
                  <div className="flex items-center justify-center w-[116px] h-[40px] gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_23727_11544)">
                        <path
                          d="M13.9993 6.66667H11.7947L8.96332 1.042C8.79121 0.726597 8.53731 0.463382 8.22831 0.280024C7.91931 0.096665 7.56662 -6.48318e-05 7.20731 1.6722e-06H7.08598C6.8139 -0.000374072 6.54546 0.0625776 6.30191 0.183875C6.05836 0.305173 5.84638 0.481488 5.68275 0.698868C5.51911 0.916248 5.40832 1.16873 5.35912 1.43633C5.30993 1.70393 5.32369 1.97931 5.39931 2.24067L6.68465 6.66667H5.09531C4.83248 6.66736 4.57212 6.61592 4.3293 6.51534C4.08647 6.41475 3.86601 6.26701 3.68065 6.08067L2.73598 5.13334C2.49453 4.89213 2.18251 4.73411 1.84519 4.68221C1.50787 4.6303 1.16278 4.68721 0.859981 4.84467C0.67262 4.94133 0.507009 5.0753 0.373331 5.23833C0.239652 5.40135 0.14073 5.59 0.0826475 5.79267C0.0184086 6.01011 -0.00124061 6.23829 0.024879 6.46352C0.0509985 6.68874 0.122349 6.90637 0.234648 7.10334L1.31065 8.98667C1.60275 9.4964 2.02409 9.9201 2.53219 10.2151C3.04028 10.51 3.61715 10.6658 4.20465 10.6667H6.67865L5.56665 13.6313C5.4671 13.8965 5.4333 14.1818 5.46814 14.4629C5.50298 14.744 5.60543 15.0125 5.7667 15.2453C5.92798 15.4781 6.14328 15.6684 6.39417 15.7999C6.64507 15.9313 6.92408 16 7.20731 16C7.56041 16.0019 7.90758 15.9094 8.21292 15.732C8.51825 15.5547 8.77065 15.299 8.94398 14.9913L11.642 10.6667H13.9993C14.5297 10.6667 15.0385 10.456 15.4135 10.0809C15.7886 9.70581 15.9993 9.1971 15.9993 8.66667C15.9993 8.13624 15.7886 7.62753 15.4135 7.25246C15.0385 6.87738 14.5297 6.66667 13.9993 6.66667ZM6.68265 1.87C6.66456 1.80746 6.66127 1.74156 6.67302 1.67752C6.68477 1.61348 6.71125 1.55305 6.75037 1.501C6.78949 1.44895 6.84017 1.40671 6.89841 1.37761C6.95666 1.34852 7.02087 1.33336 7.08598 1.33334H7.20731C7.32356 1.33234 7.438 1.36209 7.53904 1.41957C7.64007 1.47706 7.72412 1.56023 7.78265 1.66067L10.3026 6.66667H8.07265L6.68265 1.87ZM13.9993 9.33334H11.272C11.1588 9.33341 11.0476 9.36227 10.9487 9.4172C10.8498 9.47213 10.7665 9.55133 10.7066 9.64734L7.79265 14.3193C7.73528 14.4245 7.65065 14.5122 7.54765 14.5733C7.44465 14.6344 7.32708 14.6667 7.20731 14.6667C7.13955 14.6667 7.07277 14.6503 7.01274 14.6189C6.9527 14.5875 6.90119 14.5419 6.86264 14.4862C6.82408 14.4305 6.79963 14.3662 6.79139 14.2989C6.78315 14.2317 6.79136 14.1634 6.81531 14.1L8.26465 10.2333C8.30233 10.1325 8.31503 10.024 8.30165 9.91716C8.28827 9.81033 8.24921 9.70833 8.18782 9.61988C8.12643 9.53143 8.04453 9.45916 7.94913 9.40926C7.85372 9.35936 7.74765 9.33331 7.63998 9.33334H4.20465C3.85257 9.33275 3.50689 9.23924 3.20254 9.06225C2.89818 8.88525 2.64594 8.63105 2.47131 8.32534L1.39198 6.44134C1.36939 6.40116 1.35499 6.35691 1.34962 6.31114C1.34424 6.26537 1.34799 6.21898 1.36065 6.17467C1.36733 6.14513 1.38016 6.11734 1.39831 6.0931C1.41646 6.06886 1.43952 6.04873 1.46598 6.034C1.50707 6.01219 1.55279 6.00053 1.59931 6C1.67087 6.0005 1.73944 6.02869 1.79065 6.07867L2.73531 7.02334C3.04455 7.33412 3.41237 7.58046 3.81747 7.74811C4.22257 7.91576 4.6569 8.00137 5.09531 8H13.9993C14.1761 8 14.3457 8.07024 14.4707 8.19527C14.5957 8.32029 14.666 8.48986 14.666 8.66667C14.666 8.84348 14.5957 9.01305 14.4707 9.13807C14.3457 9.2631 14.1761 9.33334 13.9993 9.33334Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23727_11544">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-bg-white font-normal">Flight</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-bg-primary flex text-base16    items-center justify-between text-txt-primary font-normal rounded-full">
              <p className="py-[14px] px-[32px] ">Where are We going?</p>
              <div className="border-[1px] border-btn-secondary h-9"></div>
              <p className="py-[14px] px-[32px]">Check In </p>
              <div className="border-[1px] border-btn-secondary h-9"></div>
              <p className="py-[14px] px-[32px]">Check Out </p>
              <div className="border-[1px] border-btn-secondary h-9"></div>
              <p className="py-[14px] px-[32px]">Guests</p>
              <div className="  ">
                <button className="border-[1px] border-btn-secondary flex flex-row items-center py-[12px] px-2 mr-[1px] rounded-full">
                  Go!
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                    >
                      <path
                        d="M8.7958 5.88079L4.2058 1.29079C4.01844 1.10454 3.76498 1 3.5008 1C3.23661 1 2.98316 1.10454 2.7958 1.29079C2.70207 1.38376 2.62768 1.49436 2.57691 1.61622C2.52614 1.73808 2.5 1.86878 2.5 2.00079C2.5 2.1328 2.52614 2.26351 2.57691 2.38537C2.62768 2.50723 2.70207 2.61783 2.7958 2.71079L7.3958 7.29079C7.48953 7.38376 7.56392 7.49436 7.61469 7.61622C7.66546 7.73808 7.6916 7.86878 7.6916 8.00079C7.6916 8.13281 7.66546 8.26351 7.61469 8.38537C7.56392 8.50723 7.48953 8.61783 7.3958 8.71079L2.7958 13.2908C2.60749 13.4778 2.50118 13.7319 2.50024 13.9973C2.4993 14.2626 2.60382 14.5175 2.7908 14.7058C2.97778 14.8941 3.2319 15.0004 3.49726 15.0014C3.76263 15.0023 4.0175 14.8978 4.2058 14.7108L8.7958 10.1208C9.3576 9.55829 9.67316 8.7958 9.67316 8.00079C9.67316 7.20579 9.3576 6.44329 8.7958 5.88079Z"
                        fill="#4094B2"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div> */}

            {/* TODO: Start */}
            {/* <div className="max-w-screen-2xl mx-auto bg-bg-semiblack p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-9 items-center">
                <div className="bg-btn-primary h-[44px] w-[244px] text-center  flex items-center justify-center text-base16 col-span-2">
                  <p>Where are We going?</p>
                </div>
                <div className="bg-bg-white h-[44px] w-[254px] text-center  flex items-center justify-center text-base16 col-span-2">
                  <p>Check In</p>
                </div>
                <div className="bg-bg-white h-[44px] w-[254px] text-center  flex items-center justify-center text-base16 col-span-2">
                  <p>Check Out</p>
                </div>
                <div className="bg-bg-white h-[44px] w-[254px]  text-center  flex items-center justify-center text-base16 col-span-2">
                  <p>Guest</p>
                </div>
                <div>
                  <button className="col-span-1 bg-bg-warning text-white p-5  hover:bg-yellow-600">
                    Go
                  </button>
                </div>
              </div>
            </div> */}

            {/* TODO: Destop */}
            <div className="hidden flex-row px-[1px] h-[44px] my-[32px]  md:flex items-center justify-between bg-bg-primary text-base16 rounded-full ">
              <div className="pr-[32px] pl-[60px] py-[14px]">
                Where are We going?
              </div>
              <div className="border-r-[1px] border-btn-secondary h-[35px]"></div>
              <div className="px-[32px] py-[14px] text-start">Check In</div>
              <div className="border-r-[1px] h-[35px] border-btn-secondary"></div>
              <div className="px-[32px] py-[14px]">Check Out</div>
              <div className="border-r-[1px] h-[35px] border-btn-secondary"></div>
              <div className="px-[32px] py-[14px]">Guest</div>
              <div className="flex flex-row items-center text-btn-secondary h-[40px] border-[1px] border-btn-secondary py-[14x] px-[6px] rounded-full">
                Go!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                >
                  <path
                    d="M8.7958 5.88079L4.2058 1.29079C4.01844 1.10454 3.76498 1 3.5008 1C3.23661 1 2.98316 1.10454 2.7958 1.29079C2.70207 1.38376 2.62768 1.49436 2.57691 1.61622C2.52614 1.73808 2.5 1.86878 2.5 2.00079C2.5 2.1328 2.52614 2.26351 2.57691 2.38537C2.62768 2.50723 2.70207 2.61783 2.7958 2.71079L7.3958 7.29079C7.48953 7.38376 7.56392 7.49436 7.61469 7.61622C7.66546 7.73808 7.6916 7.86878 7.6916 8.00079C7.6916 8.13281 7.66546 8.26351 7.61469 8.38537C7.56392 8.50723 7.48953 8.61783 7.3958 8.71079L2.7958 13.2908C2.60749 13.4778 2.50118 13.7319 2.50024 13.9973C2.4993 14.2626 2.60382 14.5175 2.7908 14.7058C2.97778 14.8941 3.2319 15.0004 3.49726 15.0014C3.76263 15.0023 4.0175 14.8978 4.2058 14.7108L8.7958 10.1208C9.3576 9.55829 9.67316 8.7958 9.67316 8.00079C9.67316 7.20579 9.3576 6.44329 8.7958 5.88079Z"
                    fill="#4094B2"
                  />
                </svg>
              </div>
            </div>

            {/* TODO: Mobile */}
            <div className="md:hidden">
              <div className="h-[44px] flex flex-row items-center justify-between bg-bg-primary rounded-full text-base14 mb-[18px]">
                <div className="pr-[32px] pl-[32px] py-[14px] grow  text-center">
                  Where are We going?
                </div>
                <div className="flex flex-row items-center h-[40px] border-[1px] text-btn-secondary border-btn-secondary py-[14x] px-[6px] mr-[2px] rounded-full">
                  Go!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                  >
                    <path
                      d="M8.7958 5.88079L4.2058 1.29079C4.01844 1.10454 3.76498 1 3.5008 1C3.23661 1 2.98316 1.10454 2.7958 1.29079C2.70207 1.38376 2.62768 1.49436 2.57691 1.61622C2.52614 1.73808 2.5 1.86878 2.5 2.00079C2.5 2.1328 2.52614 2.26351 2.57691 2.38537C2.62768 2.50723 2.70207 2.61783 2.7958 2.71079L7.3958 7.29079C7.48953 7.38376 7.56392 7.49436 7.61469 7.61622C7.66546 7.73808 7.6916 7.86878 7.6916 8.00079C7.6916 8.13281 7.66546 8.26351 7.61469 8.38537C7.56392 8.50723 7.48953 8.61783 7.3958 8.71079L2.7958 13.2908C2.60749 13.4778 2.50118 13.7319 2.50024 13.9973C2.4993 14.2626 2.60382 14.5175 2.7908 14.7058C2.97778 14.8941 3.2319 15.0004 3.49726 15.0014C3.76263 15.0023 4.0175 14.8978 4.2058 14.7108L8.7958 10.1208C9.3576 9.55829 9.67316 8.7958 9.67316 8.00079C9.67316 7.20579 9.3576 6.44329 8.7958 5.88079Z"
                      fill="#4094B2"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-row  justify-between  text-base14 ">
                <div className="flex  items-center justify-center rounded-full h-[44px] bg-bg-primary group">
                <div className="px-[8px] py-[4px] h-[44px] w-[105px] flex items-center justify-center rounded-l-full gap-0 group-hover:border-btn-secondary">
                  Check In
                </div>
                <div className="border-r-[1px] border-btn-secondary h-[24px] group-hover:border-bg-primary"></div>
                <div className="px-[8px] py-[4px] h-[44px] w-[105px]  bg-bg-primary flex items-center justify-center rounded-r-full">
                  Check Out
                </div>
                </div>

                <div className="px-[8px] py-[4px] w-[105px]  ml-4 flex items-center justify-center bg-bg-primary rounded-full">
                  Guest
                </div>
              </div>
            </div>
            {/* TODO: END */}
          </div>
        </div>
      </div>
    );
}

export default Banner