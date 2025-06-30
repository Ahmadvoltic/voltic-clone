import React, { useRef } from 'react';

const Section6 = () => {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 400;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section className='bg-black text-white pt-[100px] flex overflow-hidden gap-12 relative h-[745px]'>
        <div ref={scrollContainerRef} className="flex overflow-x-auto whitespace-nowrap gap-12 scrollbar-hide">



          <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative group'>

            <div className="w-full h-auto absolute top-0 left-0 object-cover z-10">
              <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 portfolio-svg"><path fillRule="evenodd" clipRule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
            </div>

            <div className="w-full h-auto flex flex-col z-20 absolute bottom-26">
              <h5 className="font-bold text-xl leading-7 text-center text-white">Primary Inbox</h5>
              <p className="font-normal text-lg leading-7 text-center text-white">Cold Email Automation</p>
            </div>
            <div className="w-full h-[351px] rounded-[20px] overflow-hidden mt-2 z-20">
              <img className="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio1.8efd3982.png" alt="Team Management Dashboard" />
            </div>

            <div className="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-[#a100ff] transition-all duration-700">
              <span><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
            </div>
          </div>


          <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative group'>

            <div className="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
              <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 portfolio-svg"><path fillRule="evenodd" clipRule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
            </div>

            <div className="w-full h-auto flex flex-col z-20 mt-20">
              <h5 className="font-bold text-xl leading-7 text-center text-white">Team Management Dashboard</h5>
              <p className="font-normal text-lg leading-7 text-center text-white">Workflow Optimization</p>
            </div>
            <div className="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
              <img className="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio2.94284578.png" alt="Team Management Dashboard" />
            </div>

            <div className="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 group-hover:bg-[#a100ff] transition-all duration-700">
              <span className="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
            </div>
          </div>

          <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative group'>

            <div className="w-full h-auto absolute top-0 left-0 object-cover z-10">
              <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 portfolio-svg"><path fillRule="evenodd" clipRule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
            </div>

            <div className="w-full h-auto flex flex-col z-20 absolute bottom-26">
              <h5 className="font-bold text-xl leading-7 text-center text-white">Ai-Powered Home - Secure Living </h5>
              <p className="font-normal text-lg leading-7 text-center text-white">Smart Home Automation</p>
            </div>
            <div className="w-full h-[351px] rounded-[20px] overflow-hidden mt-2 z-20">
              <img className="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio3.2152ebb7.png" alt="Team Management Dashboard" />
            </div>

            <div className="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-[#a100ff] transition-all duration-700">
              <span><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
            </div>
          </div>

          <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative group'>

            <div className="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
              <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 portfolio-svg"><path fillRule="evenodd" clipRule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
            </div>

            <div className="w-full h-auto flex flex-col z-20 mt-20">
              <h5 className="font-bold text-xl leading-7 text-center text-white">Taskify - Smart Task Management</h5>
              <p className="font-normal text-lg leading-7 text-center text-white">Smart Productivity App</p>
            </div>
            <div className="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
              <img className="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio4.582ab476.webp" alt="Team Management Dashboard" />
            </div>

            <div className="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 group-hover:bg-[#a100ff] transition-all duration-700">
              <span className="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
            </div>
          </div>

          <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative group'>

            <div className="w-full h-auto absolute top-0 left-0 object-cover z-10">
              <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 portfolio-svg"><path fillRule="evenodd" clipRule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
            </div>

            <div className="w-full h-auto flex flex-col z-20 absolute bottom-26">
              <h5 className="font-bold text-xl leading-7 text-center text-white">PurifyX - Lead Generation Dashboard</h5>
              <p className="font-normal text-lg leading-7 text-center text-white">Automated Outreach Optimization</p>
            </div>
            <div className="w-full h-[351px] rounded-[20px] overflow-hidden mt-2 z-20">
              <img className="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio5.78f527be.png" alt="Team Management Dashboard" />
            </div>

            <div className="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:bg-[#a100ff] transition-all duration-700">
              <span><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
            </div>
          </div>

          <div className='w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative group'>

            <div className="w-full h-auto absolute top-8 left-0 object-cover z-10 rotate-180">
              <svg width="500" height="517" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 portfolio-svg"><path fillRule="evenodd" clipRule="evenodd" d="M468.5 0C486.173 0 500.5 14.3269 500.5 32V485C500.5 502.673 486.173 517 468.5 517H331.693C322.512 517 314.773 510.579 310.622 502.39C299.074 479.612 275.434 464 248.148 464C220.863 464 197.223 479.612 185.675 502.39C181.524 510.579 173.785 517 164.604 517H32.5C14.8269 517 0.5 502.673 0.5 485V32C0.5 14.3269 14.8269 0 32.5 0H468.5Z" fill="#101010"></path></svg>
            </div>

            <div className="w-full h-auto flex flex-col z-20 mt-20">
              <h5 className="font-bold text-xl leading-7 text-center text-white">Financial - The Smart Expense Tracking</h5>
              <p className="font-normal text-lg leading-7 text-center text-white">AI-Powered Budgeting</p>
            </div>
            <div className="w-full h-[351px] rounded-[20px] overflow-hidden rotate-180 z-20">
              <img className="w-full h-full object-cover" loading="lazy" width="450" height="350" src="https://www.voltic.ai/_next/static/media/portfolio6.481061ff.webp" alt="Team Management Dashboard" />
            </div>

            <div className="size-[72px] rounded-full bg-[#101010] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 group-hover:bg-[#a100ff] transition-all duration-700">
              <span className="openPortfolio"><svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path></svg></span>
            </div>
          </div>

        </div>


        <div className="absolute bottom-1 right-10 md:right-50 flex space-x-2 z-30">
          <button onClick={scrollLeft} className="size-[72px] rounded-full bg-[#101010] text-white p-3 shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex justify-center items-center">
            <svg width="26" height="26" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.615226 14L14.3784 0.236816L15.902 1.76042L4.72895 12.9335L36.3182 12.9335L36.2675 15.1173L4.77973 15.1173L15.9528 26.2904L14.4292 27.814L0.615226 14Z" fill="white"></path></svg>
          </button>
          <button  onClick={scrollRight}  className="bg-[#a100ff]  text-white p-3 size-[72px] rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex justify-center items-center">
            <svg width="26" height="26" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.3848 14L22.6216 27.7632L21.098 26.2396L32.2711 15.0665L0.681754 15.0665L0.732541 12.8827L32.2203 12.8827L21.0472 1.70963L22.5708 0.186029L36.3848 14Z" fill="white"></path></svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Section6