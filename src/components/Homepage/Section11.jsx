import React from 'react'

const Section11 = () => {
    return (
        <>
            <section className='bg-black w-full pt-[100px] relative overflow-hidden'>

                    <div className='absolute opacity-70'>
                        <img src="https://www.voltic.ai/_next/static/media/newsletterBackground.b10acd4f.webp" alt="bg-image" />
                    </div>

                <div className='w-[80%] mx-auto relative overflow-hidden'>



                    <div className="mx-auto h-[430px] flex flex-col items-center justify-center px-5 lg:px-0">
                        <h4 className="font-bold text-3xl lg:text-[52px] leading-9 lg:leading-[78px] text-white mb-2.5">Ready to Take the Next Step?</h4>
                        <p className="font-normal text-base text-center lg:text-xl leading-7 text-white mb-7">Join thousands who are already seeing results — get started today in just minutes.</p>
                        <button className="bg-[#a100ff]  w-fit h-[52px] rounded-full mx-auto pl-7 pr-1 text-sm font-medium leading-5 text-[#F4F0FF] flex justify-center gap-[10px] items-center transition-all duration-300 hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)]">Schedule a meeting

                            <span className="bg-white h-11 w-11 rounded-full flex justify-center items-center">
                                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.6436 11L17.0566 21.5871L15.8846 20.4151L24.4792 11.8204L0.179775 11.8204L0.218842 10.1405L24.4402 10.1405L15.8455 1.54587L17.0175 0.373864L27.6436 11Z" fill="#A100FF"></path></svg>
                            </span>
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Section11