import React from 'react'

const Subscribe = () => {
    return (
        <div className='w-full'>
            <div className='h-[402px] xl:h-[334px]'>
                <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]  bg-bg-white mx-auto'>
                    <div className='xl:py-[32px] flex flex-col xl:flex-row justify-between xl:gap-[48px]'>
                        <div className='pt-[12px] xl:pt-[12px] pb-[16px] xl:pb-[16px]'>
                            <h2 className='xl:text-base24 text-base16 w-[343px] xl:w-[441px]'>Subscribe for our 
                                Flash Deals newsletter!</h2>
                            <p className='text-base14 xl:text-base16 text-txt-primary_light mt-[12px] xl:my-[24px] w-[343px] md:w-[452px] xl:w-full'>If you’d like to receive interesting deals, fill in your email and submit</p>
                            <p className='text-base14 xl:text-base16 text-txt-primary_light mb-[24px] xl:mb-[32px]'>We Promise you, we will not spam!</p>
                            {/* FIXME: Input field */}
                            <div className="relative w-full md:w-[452px] xl:w-full ">
                                <input
                                    type="email"
                                    className="w-full h-[56px] py-[10px] px-[24px] border-[1px] text-txt-primary_light border-btn-border_lighter rounded-full focus:outline-none focus:border-blue-500 text-base16"
                                    placeholder="Enter email address"
                                />
                                <button
                                    className="absolute top-0 right-0 h-[56px] w-[56px] flex items-center justify-center bg-btn-secondary text-white rounded-full focus:outline-none"
                                >
                                    <img src="/public/carbon_send-alt.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='order-first xl:order-last'>
                            <img className='h-[186px] w-full xl:h-[270px] xl:rounded-[16px]' src="https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe