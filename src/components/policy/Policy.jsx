import React from 'react'
import meterial_symbols from '../../../public/material-symbols_speed-outline-rounded.png';
import payment from '../../../public/ic_baseline-payment.png';
import backup from '../../../public/ic_baseline-settings-backup-restore.png';
import group_logo from '../../../public/group-logo.png';
import support from '../../../public/ic_baseline-support-agent.svg';

const Policy = () => {
  return (
    <div className='w-full'>
        <div className=' h-[296px] md:h-[86px] xl:h-[164px]'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]  bg-bg-white mx-auto'>
                {/* TODO: Added Image only for mobile Versions */}
                <div className='block md:hidden pt-[16px] pb-[8px]'>
                    <img className='mx-auto' src={group_logo} alt="" />
                </div>

                <div className=' md:py-[0px] xl:pt-[64px]'>
                    <div className='flex flex-col md:flex-row justify-between gap-[12px] md:gap-[24px] xl:gap-[0] pt-[16px] pb-[8px] xl:py-[16px]'>
                    <div className='flex flex-col  gap-[4px]'>
                        <div className='flex items-center gap-[8px] md:gap-[4px]'>
                            <img src={meterial_symbols} alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>Faster Delivery</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>Service is received within minutes</p>
                    </div>
                    <div className='hidden xl:block h-[35px] border-[1px] border-btn-border_lighter'></div>
                    <div className='flex flex-col  gap-[4px]'>
                        <div className='flex items-center gap-[8px] md:gap-[4px]'>
                            <img src={payment} alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>Secure Payment</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>100% Secure Payment</p>
                    </div>
                    <div className='hidden xl:block h-[35px] border-[1px] border-btn-border_lighter'></div>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center gap-[8px] md:gap-[4px]'>
                            <img src={backup} alt="" />
                            <h3 className='text-base14 xl:text-base16 text-txt-primary_light font-medium'>7 Days Return</h3>
                        </div>
                        <p className='text-txt-trip_description text-base12 xl:text-base14'>If any troubles occur</p>
                    </div>
                    <div className='hidden xl:block h-[35px] border-[1px] border-btn-border_lighter'></div>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex items-center gap-[8px] md:gap-[4px]'>
                            <img src={support} alt="" />
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