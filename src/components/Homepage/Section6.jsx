import React, { useState } from "react";

const cards = [
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    imgSrc: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
  },
];


const Section6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 500}px)`,
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-[500px] h-[550px] shrink-0 p-6 flex flex-col gap-3 relative"
          >
            {/* your card markup here */}
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 right-5 flex gap-4">
        <button
          onClick={goPrev}
          className="px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition"
        >
          Prev
        </button>
        <button
          onClick={goNext}
          className="px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition"
        >
          Next
        </button>
      </div>
    </section>
  );
};


export default Section6;
