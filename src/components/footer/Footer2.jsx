import React from 'react'

const Footer2 = () => {
    return (
        <>
            <section className='bg-black w-full py-[100px]'>
                <div className='w-[80%] mx-auto flex flex-col justify-center gap-7'>
                    <span className='w-full h-1 opacity-80 rounded-full  bg-gray-900'></span>

                    <div className='w-auto lg:w-[480px] mx-auto h-16 mt-[26px] lg:h-[66px] py-[7px] px-2 rounded-full bg-[#101010] backdrop-blur-[20px] relative'>
                        <form class="w-full mx-auto h-full flex items-center gap-1 relative">
                            <input type="text" autocomplete="off" placeholder="Your Email" className="bg-[#101010] rounded-4xl w-full pl-6 h-[62px] placeholder:text-white outline-none text-white" name="email" data-gtm-form-interact-field-id="3" />
                            <button type="submit" className="absolute right-0 z-10 bg-[#a100ff] h-[52px] rounded-full px-10 py-[14px] text-lg font-medium leading-7 text-white flex justify-center items-center transition-all duration-300  hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)]">Subscribe</button>
                        </form>
                    </div>

                    <div className='flex justify-center gap-9'>
                        <div class="size-12 rounded-full bg-[#101010] flex justify-center items-center"><a target="_blank" href="https://www.linkedin.com/company/volticai/"><svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1.89062H2.99531C2.17031 1.89062 1.5 2.57031 1.5 3.40469V21.3766C1.5 22.2109 2.17031 22.8906 2.99531 22.8906H21C21.825 22.8906 22.5 22.2109 22.5 21.3766V3.40469C22.5 2.57031 21.825 1.89062 21 1.89062ZM7.84687 19.8906H4.73438V9.86875H7.85156V19.8906H7.84687ZM6.29062 8.5C5.29219 8.5 4.48594 7.68906 4.48594 6.69531C4.48594 5.70156 5.29219 4.89062 6.29062 4.89062C7.28437 4.89062 8.09531 5.70156 8.09531 6.69531C8.09531 7.69375 7.28906 8.5 6.29062 8.5ZM19.5141 19.8906H16.4016V15.0156C16.4016 13.8531 16.3781 12.3578 14.7844 12.3578C13.1625 12.3578 12.9141 13.6234 12.9141 14.9313V19.8906H9.80156V9.86875H12.7875V11.2375H12.8297C13.2469 10.45 14.2641 9.62031 15.7781 9.62031C18.9281 9.62031 19.5141 11.6969 19.5141 14.3969V19.8906Z" fill="white"></path></svg></a></div>

                        <div class="size-12 rounded-full bg-[#101010] flex justify-center items-center"><a target="_blank" href="https://www.facebook.com/people/Voltic-Ai/61575615013804/"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 11.6094C23 5.53737 18.072 0.609375 12 0.609375C5.928 0.609375 1 5.53737 1 11.6094C1 16.9334 4.784 21.3664 9.8 22.3894V14.9094H7.6V11.6094H9.8V8.85938C9.8 6.73637 11.527 5.00938 13.65 5.00938H16.4V8.30938H14.2C13.595 8.30938 13.1 8.80437 13.1 9.40938V11.6094H16.4V14.9094H13.1V22.5544C18.655 22.0044 23 17.3184 23 11.6094Z" fill="white"></path></svg></a></div>
                    </div>

                    <div>
                        <p class="text-white text-lg leading-7 lg:leading-[18px] font-medium text-center flex items-start justify-center lg:gap-[5px]">&copy; Copyright 2025, All Rights Reserved by Voltic.ai</p>
                        <p class="text-white text-lg leading-[18px] font-medium text-center mt-[8px]">Terms &amp; Conditions</p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Footer2