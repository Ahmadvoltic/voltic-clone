import React, { useState } from 'react'
import VideoOnScroll from './VideoOnScroll'

const VideoPlay = (props) => {
    const isOpen = props.openVideo === props.id;

    const handleClick = () => {
        if (isOpen) {
            props.setOpenVideo(null);
        } else {
            props.setOpenVideo(props.id);
        }
    };

    return (
        <>
            <div className={`transition-all mx-[2px] lg:mx-2 duration-500 ease-in-out cursor-pointer w-[8%] ${props.height} z-10  ${isOpen ? 'w-auto h-[80vh]' : `{w-[8%] hover:w-[9%] ${props.hoverHeight}}`}`}>
                <div onClick={handleClick} className="relative flex h-full w-full items-center justify-center overflow-hidden">
                    {isOpen ? <VideoOnScroll videosrc={props.video} />

                        : (<span> <div className="absolute inset-0">
                            <img alt="background" loading="lazy" data-nimg="fill" className="object-cover" sizes="100vw" src="https://www.voltic.ai/_next/static/media/client-bg.e1c60f88.jpg" />
                        </div>
                            <div className="flex h-full w-full items-center justify-center z-10">
                                <p className="rotate-270 text-xs sm:text-sm md:text-sm xl:text-2xl font-bold tracking-[0.3em] md:tracking-[0.5em] text-white">{props.name}</p>
                            </div> </span>
                        )}
                </div>
            </div>
        </>
    )
}

export default VideoPlay