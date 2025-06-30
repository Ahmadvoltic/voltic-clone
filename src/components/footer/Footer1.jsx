import React from 'react'

const Footer1 = () => {
    return (
        <>
            <section className='bg-black py-12 md:pt-[100px] w-full'>
                <div className='px-[20px] gap-5 md:gap-0 md:px-0 md:w-[80%] mx-auto flex justify-around'>

                    <div className='flex flex-col text-white w-[245px] h-auto gap-[22px]'>
                        <h3 className='font-semibold text-2xl leading-[28.8px] text-white cursor-pointer'>Voltic</h3>
                        <ul className='font-normal text-xl leading-6 hover:text-primaryColor text-white flex flex-col gap-3 md:gap-6'>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">Our Work</li>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">About Us</li>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">Contact Us</li>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">Privacy Policy</li>
                        </ul>
                    </div>

                    <div className='flex flex-col text-white w-[245px] h-auto gap-[22px]'>
                        <h3 className='font-semibold text-2xl leading-[28.8px] text-white cursor-pointer'>OFFICE</h3>
                        <ul className='font-normal text-xl leading-6 hover:text-primaryColor text-white flex flex-col gap-3 md:gap-6'>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">16192 Coastal Highway Lewes, DE 19958</li>
                        </ul>
                    </div>

                    <div className='flex flex-col text-white w-[245px] h-auto gap-[22px]'>
                        <h3 className='font-semibold text-2xl leading-[28.8px] text-white cursor-pointer'>CONTACT</h3>
                        <ul className='font-normal text-xl leading-6 hover:text-primaryColor text-white flex flex-col gap-3 md:gap-6'>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">Voltic.ai</li>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">+1 206 701 6598</li>
                            <li className="font-normal text-sm md:text-xl leading-6 hover:text-[#a100ff] cursor-pointer text-white">info@voltic.ai</li>
                        </ul>
                    </div>


                </div>

            </section>
        </>
    )
}

export default Footer1