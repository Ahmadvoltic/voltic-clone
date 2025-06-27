import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Section5 = () => {
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
        <section className='bg-black pt-[100px] text-white'>


                    <div ref={ref} className='flex gap-28 w-[80%] mx-auto justify-between'>
                        <div className='flex justify-center items-center font-bold'>
                            <h1 className={`text-[50px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>Why Result-Delivering Portfolio</h1>
                        </div>
                        <div className='flex flex-col justify-center gap-3 w-[40%] relative'>
                            <div className='pr-5'>
                                <p className={`text-lg font-md text-[20px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>Our portfolio explains our expertise as the best managed IT services providers in the USA, helping businesses to gain their value in the competitive digital market. We make you grow because we handle all the IT problems so you can target your business goals and achieve them without any IT obstacles.</p>
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

export default Section5