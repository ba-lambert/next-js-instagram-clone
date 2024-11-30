"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; // Install react-icons if not already installed
import { FaRegHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

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
    <div className="h-auto sm:py-6 relative scroll-smooth w-screen sm:w-auto">
      <MobileHeader />
      <div className="absolute w-full top-8 sm:top-16">
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
        className="flex flex-row gap-4 overflow-x-auto scrollbar-hide mt-20 sm:mt-2 scroll-smooth px-4 sm:px-6"
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
    <div className="w-fit flex flex-col items-center gap-2 flex-shrink-0" >
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



const MobileHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2 gap-4 sm:hidden fixed z-20 bg-white top-0 border-b border-gray-200 w-full">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        alt="Instagram"
        width={100}
        height={108}
        priority
      />
      <div className="relative w-full">
        <IoSearchOutline className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 rounded-md p-2 pl-9" // Added pl-9 for padding-left
        />
      </div>
      <FaRegHeart size={30} />
    </div>
  )
}
