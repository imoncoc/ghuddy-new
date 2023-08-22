import './CitiesToVisit.css'



import { useState } from 'react';
import CitiesToVisitDesktop from './CitiesToVisitDesktop';
import CitiesTapMobile from './CitiesTapMobile';

const CitiesToVisit = () => {
    const [desktopArray, setDesktopArray] = useState(new Array(8).fill(null));



    return (
        <div className='w-full '>
            <div className=' bg-bg-white  '>
                <div className='bg-bg-white  xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] h-[217px] xl:h-[402px] mx-auto '>
                    <div className='py-[0px] xl:pt-[32px]'>
                        <h2 className='text-base18 xl:text-base24 font-medium tracking-[0.54px] leading-[140%] mb-[16px] pt-[12px] '>Cities to Visit</h2>

                        {/* TODO: Desktop  */}
                        <div className='w-full hidden xl:grid grid-cols-4 gap-[16px]'>
                            
                            {desktopArray.map((item, index) => (
                                <CitiesToVisitDesktop key={index} />
                            ))}
                        
                    </div>
                        
                        {/* Swipper slider */}
                        <div className='visible xl:hidden'> 
                        <CitiesTapMobile desktopArray={desktopArray}></CitiesTapMobile>
                        </div>
                        
                    </div>


                    <div className='pt-[2px] pb-[16px] xl:pt-[32px]  xl:pb-[32px] text-base16 underline underline-offset-2  text-center text-txt-primary_light cursor-pointer'>Show All</div>
                </div>
            </div>
        </div>
    )
}

export default CitiesToVisit