import React, { useEffect, useState, useRef } from "react";

export default function StatsItem({ number, description }) {
  const [count, setCount] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const ref = useRef();
  const countRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          setTextVisible(true);
          growBar();
        } else {
          setTextVisible(false);
          setBarHeight(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const startCount = () => {
    cancelAnimationFrame(countRef.current);
    setCount(0);
    let startTime = performance.now();
    const duration = 1500;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * number);
      setCount(current);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(updateCount);
      } else {
        setCount(number);
      }
    };

    countRef.current = requestAnimationFrame(updateCount);
  };

  const growBar = () => {
    setBarHeight(0);
    let startTime = performance.now();
    const duration = 1500;
    const maxHeight = 52;

    const updateBar = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentHeight = Math.floor(progress * maxHeight);
      setBarHeight(currentHeight);

      if (progress < 1) {
        requestAnimationFrame(updateBar);
      } else {
        setBarHeight(maxHeight);
      }
    };

    requestAnimationFrame(updateBar);
  };

  return (
    <div ref={ref} className="flex flex-col gap-4 w-[269px]">
      <div>
        <p className="pl-[20px] text-[52px] font-bold relative">
          <span
            className="w-[5px] absolute left-0 top-4 bg-[#a100ff] rounded-2xl transition-all duration-50"
            style={{ height: `${barHeight}px` }}
          ></span>
          {count}+
        </p>
      </div>
      <p
        className={`text-[18px] pl-[20px] font-medium leading-[28px] transform transition-all duration-2000 ${
          textVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
