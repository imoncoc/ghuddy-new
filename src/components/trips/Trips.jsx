import React from 'react'

const Trips = ({title, description, btnData}) => {
  return (
    <div className='bg-bg-white w-full'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] max-w-[343px] xl:h-[167px] h-[134px]  bg-bg-white mx-auto'>
                <div className='xl:py-[32px] pt-[12px] pb-[24px] leading-[140%]'> 
                <div className='xl:mb-[16px] mb-[16px]'>
                <h3 className='xl:text-base18 text-base16  text-txt-primary_light text-center font-medium tracking-[0.48px] xl:tracking-[0.54px]'>{title}</h3>
                <p className='xl:text-base16 text-base14 font-normal tracking-[0.48px] text-txt-trip_description text-center'>{description}</p>
                </div>
                <button className='h-[36px] w-[353px] text-base14 flex items-center justify-center bg mx-auto bg-btn-trip_btn text-bg-white rounded-full font-normal' >{btnData}</button>
                </div>
            </div>
        </div>
  )
}

export default Trips