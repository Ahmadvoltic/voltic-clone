// PortfolioCarousel.jsx

import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const cardsData = [
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    image: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
    svgFill: "#101010",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    image: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
    svgFill: "#101010",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    image: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
    svgFill: "#101010",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    image: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
    svgFill: "#101010",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    image: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
    svgFill: "#101010",
  },
  {
    title: "Team Management Dashboard",
    subtitle: "Workflow Optimization",
    image: "https://www.voltic.ai/_next/static/media/portfolio2.94284578.png",
    svgFill: "#101010",
  },
  // add other cards
];

export default function PortfolioCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = 3;
  const total = cardsData.length;

 const next = () => {
  setStartIndex((prev) => (prev + cardsToShow) % total);
};

const prev = () => {
  setStartIndex((prev) =>
    (prev - cardsToShow + total) % total
  );
};

  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(cardsData[(startIndex + i) % total]);
  }

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <div className={`flex carousel-transition justify-between w-full carousel-shift-${startIndex}`}
   >
        {visibleCards.map((card, index) => (
          <PortfolioCard key={index} card={card} rotate={index % 2 !== 0} />
        ))}
      </div>

      <div className="absolute bottom-0 right-0 flex gap-4 mt-8">
        <button
          onClick={prev}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
