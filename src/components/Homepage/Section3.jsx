import React from 'react'
import StatsItem from '../StatsItem'

const Section3 = () => {
    return (
        <>
            <section className='bg-black pt-[100px] text-white'>
                <div className='w-[80%] flex mx-auto justify-between'>
                    <StatsItem number={50}  description="Our team has completed 50+ projects with a focus on quality and innovation." />
                    <StatsItem number={45}  description="With 45+ happy customers, client satisfaction and trust are our top priority." />
                    <StatsItem number={3}  description="With 3+ years of experience, we bring expertise, innovation, and reliability." />
                    <StatsItem number={35}  description="Our services reach 35+ countries, expanding globally every day." />
                </div>
            </section>
        </>
    )
}

export default Section3