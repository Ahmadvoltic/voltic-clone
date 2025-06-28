import React, { useRef, useEffect, useState } from "react";

const VideoOnScroll = (props) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video
                            .play()
                            .catch((err) => {
                                console.log("Autoplay blocked:", err);
                            });
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.5, // 50% of video must be visible to trigger
            }
        );

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);

    return (
        <div className="w-full h-screen">
            <video ref={videoRef} src={props.videosrc} className="object-cover w-full h-full" muted loop playsInline controls />
            
            <button
                onClick={(e)=>{
                    e.stopPropagation();
                    toggleMute()
                }}
                className="absolute top-20 right-5 bg-black bg-opacity-50 text-white px-3 py-2 rounded z-50"
            >
                {isMuted ? (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24">
                    <path d="M16.5 12c0-1.77-.77-3.36-2-4.44v8.88c1.23-1.08 2-2.67 2-4.44z" />
                    <path d="M19 12c0 2.53-1.17 4.78-3 6.24v-2.09c1.07-.92 1.75-2.29 1.75-3.88s-.68-2.96-1.75-3.88v-2.09c1.83 1.46 3 3.71 3 6.24z" />
                    <path d="M4 9v6h4l5 5V4l-5 5H4z" />
                    <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" />
                </svg>
                ) : (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                >
                    <path d="M4 9v6h4l5 5V4l-5 5H4z" />
                    <path d="M16.5 12c0-1.77-.77-3.36-2-4.44v8.88c1.23-1.08 2-2.67 2-4.44z" />
                    <path d="M19 12c0 2.53-1.17 4.78-3 6.24v-2.09c1.07-.92 1.75-2.29 1.75-3.88s-.68-2.96-1.75-3.88v-2.09c1.83 1.46 3 3.71 3 6.24z" />
                </svg>
                )}
            </button>
        </div>
    );
};

export default VideoOnScroll;
