import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Section9 = () => {
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
            <section className='bg-black py-16 md:pt-[100px] text-white'>


                <div ref={ref} className='flex flex-col md:flex-row md:gap-28 gap-10 md:w-[80%] px-[20px] md:px-0 mx-auto justify-between'>
                    <div className='flex justify-center items-center font-bold'>
                        <h1 className={`md:text-[50px] text-[30px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>FAQs</h1>
                    </div>
                    <div className='flex flex-col justify-center gap-3 md:w-[40%] relative'>
                        <div className='pr-5'>
                            <p className={`md:text-lg font-md text-[20px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>Find answers to your questions and gain valuable insights about our products and services. We're here to provide clarity—quickly and effortlessly.</p>
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

export default Section9