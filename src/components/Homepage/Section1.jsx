import React, { useState } from 'react'

const Section1 = () => {

    const [showForm, setShowForm] = useState(false)


    return (
        <>
            <div className='w-full'>
                <div className="relative h-screen w-full bg-black">
                    <div>

                        <video className='absolute inset-0 w-full h-full object-cover ' autoPlay loop muted playsInline src="https://www.voltic.ai/videos/heroVideo.mp4"></video>

                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 gap-16">
                        <div className='flex items-center z-10 bg-[#320f34] rounded-full p-2'>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0.75" y1="8" x2="19.25" y2="8" gradientUnits="userSpaceOnUse"><stop stopColor="#A100FF" /><stop offset="1" stopColor="#009FBD" /></linearGradient></defs><path d="M6.75 2.5C6.75 2.32741 6.61009 2.1875 6.4375 2.1875C5.40196 2.1875 4.5625 1.34804 4.5625 0.3125C4.5625 0.13991 4.42259 0 4.25 0C4.07741 0 3.9375 0.13991 3.9375 0.3125C3.9375 1.34804 3.09804 2.1875 2.0625 2.1875C1.88991 2.1875 1.75 2.32741 1.75 2.5C1.75 2.67259 1.88991 2.8125 2.0625 2.8125C3.09804 2.8125 3.9375 3.65196 3.9375 4.6875C3.9375 4.86009 4.07741 5 4.25 5C4.42259 5 4.5625 4.86009 4.5625 4.6875C4.5625 3.65196 5.40196 2.8125 6.4375 2.8125C6.61009 2.8125 6.75 2.67259 6.75 2.5Z" fill="url(#gradient)" /><path d="M14.25 2C14.25 1.72386 14.0261 1.5 13.75 1.5C13.4739 1.5 13.25 1.72386 13.25 2C13.25 4.48488 11.2352 6.5 8.75 6.5C8.4739 6.5 8.25 6.7239 8.25 7C8.25 7.2761 8.4739 7.5 8.75 7.5C11.2353 7.5 13.25 9.5142 13.25 12C13.25 12.2761 13.4739 12.5 13.75 12.5C14.0261 12.5 14.25 12.2761 14.25 12C14.25 9.5141 16.2641 7.5 18.75 7.5C19.0261 7.5 19.25 7.2761 19.25 7C19.25 6.7239 19.0261 6.5 18.75 6.5C16.2642 6.5 14.25 4.48492 14.25 2Z" fill="url(#gradient)" /><path d="M5.25 8.5C5.25 8.2239 5.02614 8 4.75 8C4.47386 8 4.25 8.2239 4.25 8.5C4.25 10.1569 2.90686 11.5 1.25 11.5C0.97386 11.5 0.75 11.7239 0.75 12C0.75 12.2761 0.97386 12.5 1.25 12.5C2.90686 12.5 4.25 13.8431 4.25 15.5C4.25 15.7761 4.47386 16 4.75 16C5.02614 16 5.25 15.7761 5.25 15.5C5.25 13.8431 6.59314 12.5 8.25 12.5C8.5261 12.5 8.75 12.2761 8.75 12C8.75 11.7239 8.5261 11.5 8.25 11.5C6.59314 11.5 5.25 10.1569 5.25 8.5Z" fill="url(#gradient)" /></svg>
                            <p> Your Trusted IT Service Provider</p>
                        </div>
                        <div>
                            <h1 className="md:text-8xl text-[30px] font-bold text-center">Best IT Servive Provider <br /> for ROI & Growth</h1>
                        </div>
                        <div className="max-w-[800px] mx-auto py-4 rounded-3xl bg-[#2425361A] backdrop-blur-[50px] z-10 px-7">
                            <p className="text-white md:text-xl text-[20px] font-normal leading-6 text-center ">Voltic AI is a professional managed IT service provider to let you grow, thrive, and scale your business with software product development and integration support. We not only lessen your work burden</p></div>
                        <button className="bg-[#a100ff] w-fit h-[52px] rounded-full mx-auto pl-7 pr-1 text-sm font-normal leading-5 text-[#F4F0FF] flex justify-center gap-[10px] items-center transition-all duration-300 hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)] aos-init aos-animate">Schedule a meeting<span className="bg-white h-11 w-11 rounded-full flex justify-center items-center"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.6436 11L17.0566 21.5871L15.8846 20.4151L24.4792 11.8204L0.179775 11.8204L0.218842 10.1405L24.4402 10.1405L15.8455 1.54587L17.0175 0.373864L27.6436 11Z" fill="#A100FF"></path></svg></span></button>


                        <div onClick={()=>{setShowForm(!showForm)}} className='absolute right-0 flex items-center justify-center cursor-pointer z-20'>
                            <svg width="48" height="226" viewBox="0 0 48 226" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.875 11.25V0.75L43.3085 6.59483C40.4774 9.56753 36.5516 11.25 32.4464 11.25H15.875C7.59073 11.25 0.875 17.9657 0.875 26.25V199.25C0.875 207.534 7.59073 214.25 15.875 214.25H31.9565C36.0557 214.25 39.9764 215.928 42.8068 218.893L48.875 225.25V214.25V11.25Z" fill="#A100FF"></path><text x="24" y="116" fill="white" fontSize="16" fontWeight="600" textAnchor="middle" transform="rotate(-90, 24, 113)">Let's Talk Business</text></svg>
                            {showForm &&
                                <div className='p-[2px] bg-gradient-to-br from-[#001F5C] via-purple-600 to-sky-400 rounded-l-[40px] z-20'>
                                    <div className="p-[2px] bg-gradient-to-br from-[#001F5C] via-purple-600 to-sky-400 rounded-l-[40px] rounded-r-[0px] -mr-2">
                                        <div className="relative overflow-hidden min-h-[588px] w-[350px] lg:w-[400px] xl:w-[555px] rounded-s-[40px] flex flex-col gap-7 p-8 bg-gradient-to-r from-[#1B052D] to-[#07000C]">
                                            <div className="md:hidden absolute top-8 right-8 text-white font-black cursor-pointer z-[999]">✕</div>
                                            <h4 className="text-white font-semibold text-2xl leading-[28.8px] contactForm whitespace-nowrap">Send us a message</h4>
                                            <form className="w-full h-auto flex flex-col gap-7 contactForm overflow-hidden">
                                                <div>
                                                    <div className="p-[2px] bg-gradient-to-br from-[#001F5C] via-purple-600 to-sky-400 rounded-full">
                                                        <input autoComplete="off" type="text" placeholder="Your Name" className="w-full py-3 px-[14px] bg-gradient-to-r from-[#1B052D] to-[#07000C] text-white outline-none whitespace-nowrap rounded-full" name="name" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="p-[2px] bg-gradient-to-br from-[#001F5C] via-purple-600 to-sky-400 rounded-full">
                                                        <input type="text" autoComplete="off" placeholder="Email" className="w-full py-3 px-[14px] bg-gradient-to-r from-[#1B052D] to-[#07000C] text-white outline-none whitespace-nowrap rounded-full" name="email" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="p-[2px] bg-gradient-to-br from-[#001F5C] via-purple-600 to-sky-400 rounded-full">
                                                        <input type="text" autoComplete="off" placeholder="Phone number" className="w-full py-3 px-[14px] rounded-full text-white outline-none whitespace-nowrap bg-gradient-to-r from-[#1B052D] to-[#07000C]" name="phone" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="p-[2px] bg-gradient-to-br from-[#001F5C] via-purple-600 to-sky-400 rounded-[25px] h-[150px]">
                                                        <textarea autoComplete="off" placeholder="Write your message here..." name="message" className="w-full h-[147px] py-3 px-[14px] text-white outline-none whitespace-nowrap rounded-[25px] resize-none bg-gradient-to-r from-[#1B052D] to-[#07000C]"></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="bg-[#a100ff] w-full flex justify-center whitespace-nowrap items-center text-white py-[5px] pl-4 pr-2 h-[52px] rounded-full">Send message</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>


                        <div className="size-12 rounded-full border border-solid border-white flex justify-center items-center absolute bottom-3 left-[50%] md:left-[49%] -translate-x-1/2 z-[50] aos-init aos-animate">
                            <a href="#Footer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66676 17.423C10.308 18.0643 11.1551 18.391 12.002 18.391C12.849 18.391 13.696 18.0643 14.3373 17.423L21.9875 9.77279C22.3669 9.39346 22.3669 8.76694 21.9875 8.38762C21.6082 8.00829 20.9817 8.00829 20.6024 8.38762L12.9521 16.0378C12.428 16.562 11.5761 16.562 11.0519 16.0378L3.4017 8.38762C3.02237 8.00829 2.39585 8.00829 2.01652 8.38762C1.6372 8.76694 1.6372 9.39346 2.01652 9.77279L9.66676 17.423Z" fill="white" stroke="white" strokeWidth="0.2"></path></svg></a>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Section1