import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import StatsItem from '../StatsItem'

const Section3 = () => {
    const ref = useRef();

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );


        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);
    return (
        <>
            <section className='bg-black pt-16 md:pt-[100px] text-white'>

                <div className='md:w-[80%] px-[40px] md:px-0 flex flex-col md:flex-row gap-8 md:gap-0 mx-auto justify-between'>
                    <StatsItem number={50} description="Our team has completed 50+ projects with a focus on quality and innovation." />
                    <StatsItem number={45} description="With 45+ happy customers, client satisfaction and trust are our top priority." />
                    <StatsItem number={3} description="With 3+ years of experience, we bring expertise, innovation, and reliability." />
                    <StatsItem number={35} description="Our services reach 35+ countries, expanding globally every day." />
                </div>


                <div ref={ref} className='flex gap-6 md:py-0 py-10 md:pt-0 md:gap-28 px-[20px] md:p-0 md:w-[80%] md:mx-auto justify-between flex-col md:flex-row '>
                    <div className='flex justify-center items-center font-bold'>
                        <h1 className={`md:text-[50px] text-[30px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>INDUSTRIES WE SERVE</h1>
                    </div>
                    <div className='flex flex-col justify-center gap-3 md:w-[40%] relative'>
                        <div className='pr-5'>
                            <p className={`md:text-lg font-md text-[20px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>We provide expert solutions to help businesses navigate challenges and achieve success. Our innovative approach enhances efficiency, adaptability, and growth.</p>
                        </div>
                        <div className={`bg-[#a100ff] w-[165px] h-[44px] px-[28px] flex items-center rounded-full transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            } hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)]`}>
                            <Link to='/' className='text-sm text-[#f4f0ff]'>Free Consultation</Link>
                        </div>

                        <span className={`w-2 bg-[#a100ff] absolute right-0 top-0 rounded-2xl transition-all duration-2000 ${isVisible ? "h-full" : "h-0"
                            }`}></span>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Section3