import React from 'react'

const TopCountries = () => {
  return (
    <div className='w-full'>
        <div className='bg-bg-white'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] h-[254px]  mx-auto '>
                <div className='py-[16px] bg-bg-semiwhite '>
                    <h2 className='text-base18 xl:text-base24 text-txt-primary_light mb-[8px]'>Top Countries</h2> 
                    <div className='leading-[140%] tracking-[0.48px] text-base14 xl:text-base16 font-normal grid grid-cols-1 md:grid-cols-2 md:gap-x-[24px]'>  
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[4px]'>
                            <p>Bangladesh</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>Kazakhstan</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>India</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>USA</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>Japan</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[4px]'>
                            <p>Pakistan</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>Italy</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>Spain</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>Madagaskar</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between border-b-[1px] border-btn-border_lighter py-[8px]'>
                            <p>Egypt</p>
                            <img src="/public/fi-rr-angle-small-right.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCountries