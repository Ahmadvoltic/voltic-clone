import React, { useRef } from 'react';

const Section6 = () => {
   const scrollContainerRef = useRef(null);

   const scrollAmount = 300;

   const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth', // For smooth scrolling animation
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', // For smooth scrolling animation
      });
    }
  };
  
    return (
        <>
            <section className='bg-black text-white pt-[100px] flex overflow-hidden gap-12 relative'>
              <div ref={scrollContainerRef} className="flex overflow-x-auto  scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }} >


                
                <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative'>

                    <div class="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
                        <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 portfolio-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
                    </div>

                    <div class="w-full h-auto flex flex-col z-20 mt-20">
                        <h5 class="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
                        <p class="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
                    </div>
                    <div class="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
                        <img class="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png"  alt="Team Management Dashboard" />
                    </div>

                    <div class="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                        <span class="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                    </div>
                </div>


                <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative'>

                    <div class="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
                        <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 portfolio-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
                    </div>

                    <div class="w-full h-auto flex flex-col z-20 mt-20">
                        <h5 class="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
                        <p class="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
                    </div>
                    <div class="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
                        <img class="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png"  alt="Team Management Dashboard" />
                    </div>

                    <div class="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                        <span class="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                    </div>
                </div>


                <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative'>

                    <div class="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
                        <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 portfolio-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
                    </div>

                    <div class="w-full h-auto flex flex-col z-20 mt-20">
                        <h5 class="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
                        <p class="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
                    </div>
                    <div class="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
                        <img class="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png"  alt="Team Management Dashboard" />
                    </div>

                    <div class="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                        <span class="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                    </div>
                </div>


                <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative'>

                    <div class="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
                        <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 portfolio-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
                    </div>

                    <div class="w-full h-auto flex flex-col z-20 mt-20">
                        <h5 class="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
                        <p class="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
                    </div>
                    <div class="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
                        <img class="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png"  alt="Team Management Dashboard" />
                    </div>

                    <div class="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                        <span class="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                    </div>
                </div>


                <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative'>

                    <div class="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
                        <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 portfolio-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
                    </div>

                    <div class="w-full h-auto flex flex-col z-20 mt-20">
                        <h5 class="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
                        <p class="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
                    </div>
                    <div class="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
                        <img class="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png"  alt="Team Management Dashboard" />
                    </div>

                    <div class="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                        <span class="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                    </div>
                </div>


                <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative'>

                    <div class="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
                        <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 portfolio-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
                    </div>

                    <div class="w-full h-auto flex flex-col z-20 mt-20">
                        <h5 class="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
                        <p class="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
                    </div>
                    <div class="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
                        <img class="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png"  alt="Team Management Dashboard" />
                    </div>

                    <div class="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
                        <span class="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
                    </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
        <button
          onClick={scrollLeft}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          &larr; {/* Left Arrow */}
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          &rarr; {/* Right Arrow */}
        </button>
      </div>
            </section>
        </>
    )
}

export default Section6