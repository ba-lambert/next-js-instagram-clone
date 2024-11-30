"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; // Install react-icons if not already installed

export default function Header() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      const hasMoreContent = 
        Math.ceil(container.scrollLeft + container.clientWidth) < container.scrollWidth;
      setCanScrollRight(hasMoreContent);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="h-auto py-6 relative scroll-smooth">
      <div className="absolute w-full top-16">
      {canScrollLeft && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Scroll left"
        >
          <IoIosArrowBack size={20} />
        </button>
      )}
      {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Scroll right"
        >
          <IoIosArrowForward size={20} />
          </button>
        )}
      </div>
      <div
        ref={scrollContainerRef}
        className="flex flex-row gap-4 overflow-x-auto scrollbar-hide mt-2 scroll-smooth px-6"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <Status key={index} />
        ))}
      </div>
    </div>
  );
}

const Status = () => {
  return (
    <div className="w-fit flex flex-col items-center gap-2 flex-shrink-0">
      <div className="relative w-fit rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 cursor-pointer hover:scale-105 transition-transform">
        <div className="block p-[2px] bg-white rounded-full">
          <Image
            src="https://avatars.githubusercontent.com/u/50544115?v=4"
            alt="user stories"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-xs text-gray-700 truncate w-16 text-center">Umuganwa...</p>
    </div>
  );
};