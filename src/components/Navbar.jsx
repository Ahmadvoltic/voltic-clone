import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [services, setServices] = useState(false)

  return (
    <>
      <div className='w-full fixed top-0 z-40'>

        <div className='w-[1186px] h-[94px] mx-auto flex items-center justify-between'>

          <div className='cursor-pointer'>
            <Link to="/">
              <svg width="93" height="24" viewBox="0 0 93 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_277_1935)"><path d="M12 22.0948L0 1.9043L7.58282 4.54741L8.83436 7.41079L5.66871 11.2286L9.42331 8.73235L12 16.2946L15.092 8.73235L18.72 10.7881L15.5337 7.41079L16.5644 4.54741L24 1.9043L18.72 10.7881L12 22.0948Z" fill="white"></path></g><path d="M22.702 12.16C22.702 10.8427 22.9273 9.62933 23.378 8.52C23.8287 7.39333 24.4613 6.42267 25.276 5.608C26.108 4.79333 27.0787 4.16067 28.188 3.71C29.3147 3.25933 30.5453 3.034 31.88 3.034C33.18 3.034 34.3847 3.25933 35.494 3.71C36.6033 4.16067 37.5653 4.79333 38.38 5.608C39.212 6.42267 39.8533 7.39333 40.304 8.52C40.7547 9.62933 40.98 10.8427 40.98 12.16C40.98 13.4773 40.7547 14.6907 40.304 15.8C39.8533 16.9093 39.212 17.88 38.38 18.712C37.5653 19.5267 36.6033 20.1593 35.494 20.61C34.3847 21.0607 33.18 21.286 31.88 21.286C30.5453 21.286 29.3147 21.0607 28.188 20.61C27.0787 20.1593 26.108 19.5267 25.276 18.712C24.4613 17.88 23.8287 16.9093 23.378 15.8C22.9273 14.6907 22.702 13.4773 22.702 12.16ZM25.77 12.16C25.77 13.3733 26.03 14.448 26.55 15.384C27.0873 16.3027 27.8153 17.0307 28.734 17.568C29.6527 18.088 30.7013 18.348 31.88 18.348C33.0413 18.348 34.0727 18.088 34.974 17.568C35.8927 17.0307 36.612 16.294 37.132 15.358C37.652 14.422 37.912 13.356 37.912 12.16C37.912 10.9293 37.652 9.85467 37.132 8.936C36.612 8 35.8927 7.272 34.974 6.752C34.0727 6.232 33.0413 5.972 31.88 5.972C30.7013 5.972 29.6527 6.24067 28.734 6.778C27.8153 7.298 27.0873 8.026 26.55 8.962C26.03 9.88067 25.77 10.9467 25.77 12.16ZM54.0797 21H43.6537V3.294H46.6697V18.868L46.1497 18.14H54.0797V21ZM58.3659 21V5.192H61.3819V21H58.3659ZM52.9319 6.154V3.294H67.0239V6.154H52.9319ZM72.2635 21H69.2475V3.294H72.2635V21ZM83.9259 21.286C82.1232 21.286 80.5459 20.896 79.1939 20.116C77.8419 19.3187 76.7932 18.2353 76.0479 16.866C75.3199 15.4793 74.9559 13.9107 74.9559 12.16C74.9559 10.8427 75.1726 9.62933 75.6059 8.52C76.0566 7.39333 76.6806 6.42267 77.4779 5.608C78.2926 4.79333 79.2459 4.16067 80.3379 3.71C81.4299 3.25933 82.6259 3.034 83.9259 3.034C85.9539 3.034 87.6179 3.45867 88.9179 4.308C90.2179 5.15733 91.2579 6.32733 92.0379 7.818L89.1779 8.78C88.4499 7.72267 87.6526 6.986 86.7859 6.57C85.9366 6.154 84.9832 5.946 83.9259 5.946C82.7992 5.946 81.7939 6.21467 80.9099 6.752C80.0259 7.272 79.3239 8 78.8039 8.936C78.2839 9.872 78.0239 10.9467 78.0239 12.16C78.0239 13.3733 78.2839 14.448 78.8039 15.384C79.3239 16.32 80.0259 17.0567 80.9099 17.594C81.7939 18.114 82.7992 18.374 83.9259 18.374C84.9832 18.374 85.9366 18.166 86.7859 17.75C87.6526 17.334 88.4499 16.5973 89.1779 15.54L92.0379 16.502C91.2579 17.9927 90.2179 19.1627 88.9179 20.012C87.6179 20.8613 85.9539 21.286 83.9259 21.286Z" fill="white"></path><defs><filter id="filter0_d_277_1935" x="0" y="1.9043" width="49" height="45.1914" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="15" dy="15"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_277_1935"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_277_1935" result="shape"></feBlend></filter></defs></svg>
            </Link>
          </div>

          <div className='h-11'>
            <ul className='flex h-full items-center py-[2px] px-[2px] bg-[#FFFFFF05]  border border-solid border-[#a100ff] rounded-full '>
              <li className='leading-5 py-[8px] font-normal text-[#f4f0ff] px-3 rounded-full bg-[#a100ff] cursor-pointer transition-all duration-150'>Home</li>
              <li onMouseEnter={() => { setServices(true) }} onMouseLeave={() => { setServices(false) }} className='leading-5 py-[8px] font-normal text-[#f4f0ff] px-3 rounded-full hover:bg-[#a100ff] cursor-pointer transition-all duration-150'>Services<span>+</span></li>
              <li className='leading-5 py-[8px] font-normal text-[#f4f0ff] px-3 rounded-full hover:bg-[#a100ff] cursor-pointer transition-all duration-150'>Career</li>
              <li className='leading-5 py-[8px] font-normal text-[#f4f0ff] px-3 rounded-full hover:bg-[#a100ff] cursor-pointer transition-all duration-150'>About</li>
              <li className='leading-5 py-[8px] font-normal text-[#f4f0ff] px-3 rounded-full hover:bg-[#a100ff] cursor-pointer transition-all duration-150'>Contact us</li>
            </ul>
            {services &&
              <div className='flex gap-8 bg-[#311442] items-center justify-center py-5 rounded-3xl absolute top-22 left-200 w-100 border-blue-800 border-5'>
                <ul className='text-[#f4f0ff] flex flex-col gap-1'>
                  <li><Link>Web development</Link></li>
                  <li><Link>Pay-per-Lead</Link></li>
                  <li><Link>SaaS</Link></li>
                  <li><Link>Automation</Link></li>
                  <li><Link>Web development</Link></li>
                  <li><Link>Cloud Solutions</Link></li>
                </ul>
                <ul className='text-[#f4f0ff] flex flex-col gap-1'>
                  <li><Link>Mobile App Development</Link></li>
                  <li><Link>UI/UX Design</Link></li>
                  <li><Link>Lead Generation (B2B)</Link></li>
                  <li><Link>Col Email Infrastructure</Link></li>
                  <li><Link>Cyber Security</Link></li>
                  <li><Link>Emerging Technologies</Link></li>
                </ul>
              </div>}

          </div>

          <div className='bg-[#a100ff]  w-[165px] h-[44px] px-[28px] flex items-center rounded-full transition-all duration-300 hover:shadow-[0_0_20px_6px_rgba(161,0,255,0.8)]'>
            <Link to='/' className='text-sm text-[#f4f0ff]'>Free Consultation</Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar