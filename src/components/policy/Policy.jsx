import React from 'react'

const Policy = () => {
  return (
    <div className='w-full'>
        <div className='bg-btn-primary h-[86px] xl:h-[164px]'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]  bg-bg-white mx-auto'>
                <div className='xl:pt-[64px] '>
                    <div className='flex justify-between gap-[24px] xl:gap-[0] pt-[16px] pb-[8px] xl:py-[16px]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center gap-[4px]'>
                            <img src="./public/material-symbols_speed-outline-rounded.png" alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>Faster Delivery</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>Service is received within minutes</p>
                    </div>
                    <div className='hidden xl:block h-[35px] border-[1px] border-btn-border_lighter'></div>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center gap-[4px]'>
                            <img src="./public/material-symbols_speed-outline-rounded.png" alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>Secure Payment</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>100% Secure Payment</p>
                    </div>
                    <div className='hidden xl:block h-[35px] border-[1px] border-btn-border_lighter'></div>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center gap-[4px]'>
                            <img src="./public/material-symbols_speed-outline-rounded.png" alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>7 Days Return</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>If any troubles occur</p>
                    </div>
                    <div className='hidden xl:block h-[35px] border-[1px] border-btn-border_lighter'></div>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center gap-[4px]'>
                            <img src="./public/material-symbols_speed-outline-rounded.png" alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>Quick Support</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>Text us on Facebook or WhatsApp</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Policy