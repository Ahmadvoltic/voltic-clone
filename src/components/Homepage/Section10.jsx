import { useEffect, useRef, useState } from "react";
import Questions from '../Questions'

const Section10 = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                
                    setIsVisible(entry.isIntersecting);
                
            },
            {
                threshold: 0.3,
            }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section ref={sectionRef} className='pt-[100px] bg-black relative overflow-hidden"'>

                <div className={`transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
                    <Questions question="What does a managed IT service provider do?" answer="A managed IT service provider handles all or part of your company’s IT operations, from software development to integration and their successful running. It helps to minimise your workload and makes the business operation smoother and efficient." />
                </div>

                <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
                    <Questions question="How can Voltic AI help your business grow through managed IT services?" answer="We align your technology with your goals, streamline your operations, enhance cybersecurity, and provide 24/7 support to reduce downtime and boost productivity within your budget." />
                </div>

                <div className={`transition-all duration-700 ease-out delay-400 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
                    <Questions question="Is outsourcing to a managed IT service provider cost-effective?" answer="It saves your money because when you go for a managed IT service provider, there is no need for an in-house IT team, decreased operational costs, or managing the issues with on-time maintenance support." />
                </div>

                <div className={`transition-all duration-700 ease-out delay-600 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
                    <Questions question="Do I lose control of my IT systems when working with a managed IT service provider?" answer="Timelines vary based on scope, but we prioritize agile workflows to ensure efficiency. A minimum viable product (MVP) can take 4–6 weeks, while larger projects may span several months." />
                </div>

                <div className={`transition-all duration-700 ease-out delay-800 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
                    <Questions question="What industries does Voltic AI serve with managed IT services?" answer="Serving a wide range of industries, Voltic AI is helping businesses in tech, eCommerce, healthcare, finance, and other fields with advanced managed IT support and services." />
                </div>
            </section>
        </>
    )
}

export default Section10