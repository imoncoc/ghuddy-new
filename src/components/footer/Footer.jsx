import React from 'react'
import ghuddy_logo from '../../../public/Group-logo.png'
import facebookImg from '../../../public/facebook.png'
import instaImg from '../../../public/Instagram.png'
import starImg from '../../../public/star.png'
import groupImg from '../../../public/Group.png'

const Footer = () => {
  return (
    <div className='w-full border-t-[1px] border-txt-primary_light'>
        <div className='md:h-[224px] xl:h-[240px]'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] bg-bg-white mx-auto'>
                <div className='md:pt-[16px]  md:pb-[32px] xl:py-[32px]'>
                     <div className='flex items-start gap-[100px] md:gap-[0px] md:justify-between pt-[16px] md:pt-0'>
                        <div className='hidden md:flex flex-col  md:gap-[24px] xl:gap-[24px]'>
                            <img className='xl:h-[31px] xl:w-[125px] hidden md:block' src={ghuddy_logo} alt="" />
                            <div className='flex md:gap-[24px] xl:gap-[24px]'>
                                <img className='h-[25px] w-[25px]' src={instaImg} alt="" />
                                <img className='h-[25px] w-[25px]' src={facebookImg} alt="" />
                                <img className='h-[25px] w-[25px]' src={starImg} alt="" />
                            </div>
                            <div className='flex flex-col gap-[8px] text-base12 font-normal text-txt-primary_light'>
                                <p>© All Rights Reserved. Ghuddy, 2023</p>
                                <div className='flex md:gap-[32px] xl:gap-[32px]'>
                                    <p>Terms of Use </p>
                                    <p>Privacy Policy</p>
                                </div>
                                <p>Trade License Number: 002436-02</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[12px] xl:gap-[16px]'>
                            <h5 className='text-base14 font-medium text-txt-primary_light'>Company</h5>
                            <div className='flex flex-col gap-[4px] xl:gap-[8px]'>
                            <p className='text-base12 xl:text-base14 font-normal text-txt-primary_light'>How it Works</p>
                            <p className='text-base12 xl:text-base14 font-normal text-txt-primary_light'>F.A.Q</p>
                            <p className='text-base12 xl:text-base14 font-normal text-txt-primary_light'>About Us</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[12px] xl:gap-[16px]'>
                            <h5 className='text-base14 font-medium text-txt-primary_light '>Ghuddy Product</h5>
                            <div className='flex flex-col gap-[4px] xl:gap-[8px]'>
                            <p className='text-base12 xl:text-base14 font-normal text-txt-primary_light'>Become Merchant</p>
                            <p className='text-base12 xl:text-base14 font-normal text-txt-primary_light'>Blog</p>
                            </div>
                        </div>
                        <div className='hidden md:flex md:flex-col gap-[16px]'>
                            <div className='md:w-[126px] h-[36px] xl:w-[248px] xl:h-[48px] border-[1px] border-btn-third rounded-full flex flex-row items-center justify-center md:text-base12 xl:text-base14 md:gap-[8px] xl:gap-[4px]'>
                                <div>Language</div>
                                <img src={groupImg} alt="" />
                            </div>
                            <div className='md:w-[126px] h-[36px] xl:w-[248px] xl:h-[48px] border-[1px] border-btn-third rounded-full flex flex-row items-center justify-center md:text-base12 xl:text-base14 md:gap-[8px] xl:gap-[4px]'>
                                <div>Currency</div>
                                <img src={groupImg} alt="" />
                            </div>
                        </div>
                     </div>

                     {/* TODO: For Mobile Design only */}
                     <div className='block md:hidden pb-[16px]'>
                        <div className='flex flex-col items-center pt-[24px] pb-[32px]'>
                                <div className='flex gap-[32px]'>
                                <img className='h-[25px] w-[25px]' src="./public/Instagram.png" alt="" />
                                <img className='h-[25px] w-[25px]' src="./public/facebook.png" alt="" />
                                <img className='h-[25px] w-[25px]' src="./public/star.png" alt="" />
                                </div>
                            </div> 

                            <div className='flex flex-col items-center gap-[16px] pb-[24px]'>
                            <div className='h-[36px] w-[248px] border-[1px] border-btn-third rounded-full flex flex-row items-center justify-center gap-[8px]'>
                                <div>Language</div>
                                <img src={ghuddy_logo} alt="" />
                            </div>
                            <div className='h-[36px] w-[248px] border-[1px] border-btn-third rounded-full flex flex-row items-center justify-center gap-[8px]'>
                                <div>Currency</div>
                                <img src={groupImg} alt="" />
                            </div>
                            </div>

                            <div className='flex flex-col items-center gap-[8px]'>
                                <p className='text-base12 text-txt-primary_light font-normal'>© All Rights Reserved. Ghuddy, 2021</p>
                                <div className='flex justify-around w-[220px]'>
                                    <p className='text-base12 text-txt-primary_light font-normal'>Terms of Use</p>
                                    <div className='border-[1px] border-txt-primary_light'></div>
                                    <p className='text-base12 text-txt-primary_light font-normal'>Privacy Policy</p>
                                </div>
                                <p className='text-base12 text-txt-primary_light font-normal'>Trade License Number 002436-02</p>
                            </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer