import React, { useState } from "react";

import VideoPlay from '../VideoPlay'

const Section8 = () => {
     const [openVideo, setOpenVideo] = useState("CHRISTIANEICHO");



    return (
        <>
            <section className='bg-black w-full pt-[100px]'>
                <div className='w-[90%] mx-auto'>
                    <div className='flex h-[400px] sm:h-[500px] md:h-[600px] lg:h-[677px] w-full items-center justify-center overflow-hidden bg-black'>


                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="KAREEM" name="KAREEM" video="https://www.voltic.ai/_next/static/videos/Kareem%20Testimonial.0238f8776391c714ac3fb29b923170f4.mp4" height="h-[40vh]" hoverHeight="h-[50vh]" />

                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="FELIPE" name="FELIPE" video="https://www.voltic.ai/_next/static/videos/Filipe%20Testimonial.d24945f7234c845e2c2b6fa58cdf7d01.mp4" height="h-[50vh]" hoverHeight="h-[60vh]" />

                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="DANIEL" name="DANIEL" video="https://www.voltic.ai/_next/static/videos/Daniel%20Tegnender.8d0917e6c69028f139c2561493b4ca8c.mp4" height="h-[60vh]" hoverHeight="h-[70vh]" />


                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="CHRISTIANEICHO" name="CHRISTIANEICHO" video="https://www.voltic.ai/_next/static/videos/christianeicho.c6769394f94d44f62129f0e0e856f884.mp4" height="h-[70vh]" hoverHeight="h-[80vh]" />

                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="TYLER" name="TYLER" video="https://www.voltic.ai/_next/static/videos/tyler%20mudrock%20-%20testimonial.7307376a04323068f07b0c35ae0bfbc1.mp4" height="h-[60vh]" hoverHeight="h-[70vh]" />

                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="TIFFANY" name="TIFFANY" video="https://www.voltic.ai/_next/static/videos/Tiffany%20Potter%20(3).151a35ca2d8a44a0289bbee046f29433.mp4" height="h-[50vh]" hoverHeight="h-[60vh]" />

                        <VideoPlay setOpenVideo={setOpenVideo} openVideo={openVideo} id="ROY" name="ROY" video="https://www.voltic.ai/_next/static/videos/roytesti.d44728b7dfd3ddd8e917fc065492e7a7.mp4" height="h-[40vh]" hoverHeight="h-[50vh]" />


                    </div>

                </div>
            </section>
        </>
    )
}

export default Section8