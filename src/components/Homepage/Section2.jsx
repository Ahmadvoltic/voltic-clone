import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceRow from '../ServiceRow';

const Section2 = () => {
    const ref = useRef();
    const ref1 = useRef()
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        const observer1 = new IntersectionObserver(
            ([entry]) => {
                setIsVisible1(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        if (ref1.current) observer1.observe(ref1.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            if (ref1.current) observer1.unobserve(ref1.current);
        };
    }, []);
    return (
        <>
            <div className=' mx-auto bg-black text-white'>
                <section className='w-[80%] pt-40 mx-auto flex flex-col'>

                    <div ref={ref1} className='flex gap-28'>
                        <div className='flex justify-center items-center font-bold'>
                            <h1 className={`text-[50px] transition-all duration-2000 transform ${isVisible1 ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>OUT MANAGED IT SERVICES</h1>
                        </div>
                        <div className='flex flex-col justify-center gap-3 w-[40%] relative'>
                            <div className='pr-5'>
                                <p className={`text-lg font-md text-[20px] transition-all duration-2000 transform ${isVisible1 ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>We are committed to making your business excel and stand out among your competitors. No matter if you need managed IT services for small businesses or an already established company, we have all kinds of services for your IT challenges.</p>
                            </div>
                            <div className={`bg-[#a100ff] w-[165px] h-[44px] px-[28px] flex items-center rounded-full transition-all duration-2000 transform ${isVisible1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                } hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)]`}>
                                <Link to='/' className='text-sm text-[#f4f0ff]'>Free Consultation</Link>
                            </div>

                            <span className={`w-2 bg-[#a100ff] absolute right-0 top-0 rounded-2xl transition-all duration-2000 ${isVisible1 ? "h-full" : "h-0"
                                }`}></span>
                        </div>
                    </div>


                    <div>

                        <ServiceRow
                            cards={[
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice1.1cf922f7.webp&w=384&q=75",
                                    title: "Web Development",
                                    description:
                                        "Get a high-performing and conversion-focused website that appeals to your visitors.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice2.9ddde130.webp&w=384&q=75",
                                    title: "Mobile App Development",
                                    description:
                                        "Have sleek and scalable mobile apps that fulfill your business goals.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice3.31163a2f.webp&w=384&q=75",
                                    title: "UI/UX Design",
                                    description:
                                        "Leverage intuitive experiences to engage users and drive loyalty.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice4.6b02fbe1.webp&w=384&q=75",
                                    title: "SaaS",
                                    description:
                                        "Launch scalable software solutions that solve your users' problems.",
                                },
                            ]}
                        />

                        <ServiceRow
                            cards={[
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice5.118a6d77.webp&w=384&q=75",
                                    title: "Bussiness to bussiness (B2B)",
                                    description:
                                        "Get professional B2B strategies that connect you directly to high-value clients.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice6.31dd3e85.webp&w=384&q=75",
                                    title: "Automation",
                                    description:
                                        "Get professional B2B strategies that connect you directly to high-value clients.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice7.c5352e26.webp&w=384&q=75",
                                    title: "Cold Email Infrastructure",
                                    description:
                                        "Get customized cold email infrastructure in just $2 for Google Workspace setup, $3 for MS Business Basic setup, and $1 for email setup.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice8.6544778f.webp&w=384&q=75",
                                    title: "Staff Augmentation",
                                    description:
                                        "Boost your productivity without hiring an in-house team and fill your skill gaps with desired task experts.",
                                },
                            ]}
                        />


                        <ServiceRow
                            cards={[
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice10.2802fe2d.webp&w=384&q=75",
                                    title: "Cyber Security",
                                    description:
                                        "Avail of advanced security solutions to protect your data and IT systems.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice9.9699dbc4.webp&w=384&q=75",
                                    title: "Pay-Per-Lead",
                                    description:
                                        "AI-powered tools and data-based insights let you make wiser and smarter choices.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice11.1491d7f9.webp&w=384&q=75",
                                    title: "Cloud Solutions",
                                    description:
                                        "Get faster, better, and more feasible access and storage of your data.",
                                },
                                {
                                    imageSrc:
                                        "https://www.voltic.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice12.8874b74f.webp&w=384&q=75",
                                    title: "Emerging Technologies",
                                    description:
                                        "Take advantage of innovations and technology to make your business successful.",
                                },
                            ]}
                        />


                    </div>

                    <div ref={ref} className='flex gap-28 pt-[100px]'>
                        <div className='flex justify-center items-center font-bold'>
                            <h1 className={`text-[50px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>Why Voltic AI IT Service Provider</h1>
                        </div>
                        <div className='flex flex-col justify-center gap-3 w-[40%] relative'>
                            <div className='pr-5'>
                                <p className={`text-lg font-md text-[20px] transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>We provide expert solutions to help businesses navigate challenges and achieve success. Our innovative approach enhances efficiency, adaptability, and growth.</p>
                            </div>
                            <div className={`bg-[#a100ff] w-[165px] h-[44px] px-[28px] flex items-center rounded-full transition-all duration-2000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                } hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)]`}>
                                <Link to='/' className='text-sm text-[#f4f0ff]'>Free Consultation</Link>
                            </div>

                            <span className={`w-2 bg-[#a100ff] absolute right-0 top-0 rounded-2xl transition-all duration-2000 ${isVisible ? "h-full" : "h-0"
                                }`}></span>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Section2