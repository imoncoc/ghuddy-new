import React from 'react'

const FaqSection = () => {
  return (
    <div className='w-full'>
        <div className='bg-bg-bg_light h-[341px] md:h-[353px] xl:h-[376px]'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]  bg-bg-bg_light mx-auto'>
                <div className='py-[16px] xl:py-[32px]'>
                <h2 className='text-base24 font-medium text-txt text-txt-primary_light mb-[24px]'>Frequently Asked Questions</h2>
                <div className='grid gap-[16px]'>
                    <div className='flex items-center gap-[12px]'>
                        <div className='border-[1px] border-btn-third w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] rounded-[20px] flex items-center justify-center'><img src="./public/group.png" alt="" /></div>
                        <p className='text-base16 text-txt-primary_light'>What’s the Company is doing about COVID-19?</p>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <div className='border-[1px] border-btn-third w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] rounded-[20px] flex items-center justify-center p-[10px]'><img src="./public/group.png" alt="" /></div>
                        <p className='text-base16 text-txt-primary_light'>Do I need to meet my host?</p>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <div className='border-[1px] border-btn-third w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] rounded-[20px] flex items-center justify-center p-[10px]'><img src="./public/group.png" alt="" /></div>
                        <p className='text-base16 text-txt-primary_light'>What if I need to cancel due to a problem with the listing or host?</p>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <div className='border-[1px] border-btn-third w-max-[32px] h-max-[32px] xl:w-[38px] xl:h-[38px] rounded-[20px] flex items-center justify-center p-[10px]'><img src="./public/group.png" alt="" /></div>
                        <p className='text-base16 text-txt-primary_light'>What if I need to cancel due to a problem with the listing or host?</p>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <div className='border-[1px] border-btn-third w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] rounded-[20px] flex items-center justify-center p-[10px]'><img src="./public/group.png" alt="" /></div>
                        <p className='text-base16 text-txt-primary_light'>When am I charged for a reservation?</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FaqSection