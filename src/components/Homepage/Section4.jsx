import React from 'react'
import VerticalCarousel from '../VerticalCarousal'

const Section4 = () => {
  return (
    <>
    <section className='bg-black pt-[100px]'>
        <div className='md:w-[80%] px-[20px] md:px-0 mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center'>

            <div className='w-full md:w-[48%] rounded-3xl relative p-6'>
                <div className='w-[625px] h-[800px] rounded-3xl'>
                <img alt="expertise background image" loading="lazy" width="800" height="650" className="rounded-3xl absolute top-0 left-0 w-full h-full object-cover" src="https://www.voltic.ai/_next/static/media/expertiseBackground.dc22ffbf.jpg"></img>
                </div>


                <div className='z-10 absolute top-6 w-[90%] bg-[#2425361A] backdrop-blur-[50px] rounded-3xl h-auto py-5 px-6'>
                    <h3 className="text-white font-medium text-[32px] leading-8">Customized Managed IT Services Provider for Your Business Challenges</h3>
                </div>

                <div className='z-10 absolute top-50 w-[90%] bg-[#2425361A] backdrop-blur-[50px] rounded-3xl h-auto py-5 px-6'>
                    <p className="text-white font-normal text-lg leading-[21.6px]">Your business needs the expertise that can help in scaling and growth. With Voltic AI, your dreams come true because our managed IT services provider experts resolve your IT-related challenges and ensure seamless operations.</p>
                </div>
            </div>



            <div className='md:w-[48%] md:h-[800px] h-[600px] relative'>

                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/50 to-transparent z-10 backdrop-blur-sm pointer-events-none"></div>
                <VerticalCarousel/>

                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/50 to-transparent z-10 backdrop-blur-sm pointer-events-none"></div>


            </div>

        </div>
    </section>
    </>
  )
}

export default Section4