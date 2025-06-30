import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceRow({ cards }) {
  const rowRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (rowRef.current) observer.observe(rowRef.current);

    return () => {
      if (rowRef.current) observer.unobserve(rowRef.current);
    };
  }, []);

  return (
    <div ref={rowRef} className="row-1 pt-[100px] px-[20px] md:px-0 gap-9 md:gap-0 flex flex-col md:flex-row md:justify-between" style={{ perspective: "1000px" }}>
      {cards.map((card, idx) => (
        <ServiceCard
          key={idx}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}
