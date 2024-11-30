"use client";
import Image from "next/image";
import { useState } from "react";

interface ExploreItem {
  name: string;
  url: string;
  likes: number;
  comments: number;
}

export default function Explore() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (name: string) => {
    setLoadedImages(prev => new Set(prev).add(name));
  };

  const isImageLoaded = (name: string) => loadedImages.has(name);

  return (
    <div className="p-4 sm:p-14 overflow-y-scroll">
      <div className="grid grid-cols-3 gap-1 sm:gap-4 auto-rows-auto">
        {ExploreArray.map((item, index) => (
          <div 
            key={item.name}
            className={`relative aspect-square group cursor-pointer overflow-hidden
              ${index % 3 === 0 && index % 9 === 0 ? 'row-span-2 col-span-2' : ''}
            `}
          >
            {!isImageLoaded(item.name) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            
            <Image 
              src={item.url} 
              alt={item.name} 
              fill
              className={`object-cover transition-transform duration-300 group-hover:scale-105
                ${isImageLoaded(item.name) ? 'opacity-100' : 'opacity-0'}
              `}
              onLoad={() => handleImageLoad(item.name)}
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
              priority={index < 6}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="font-semibold">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span className="font-semibold">{item.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ExploreArray:ExploreItem[] = [
  {
    name: "For You",
    url: "https://images.unsplash.com/photo-1530273973427-22351773250c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Travel",
    url: "https://images.unsplash.com/photo-1469826834904-e92950ee5bf9?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Fashion",
    url: "https://images.unsplash.com/photo-1692966307728-1d615077f813?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Food",
    url: "https://images.unsplash.com/photo-1604755530968-64e218e1b67a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Foods",
    url: "https://images.unsplash.com/photo-1604755530968-64e218e1b67a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "For You1",
    url: "https://images.unsplash.com/photo-1530273973427-22351773250c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Travel1",
    url: "https://images.unsplash.com/photo-1469826834904-e92950ee5bf9?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Fashion1",
    url: "https://images.unsplash.com/photo-1692966307728-1d615077f813?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Food1",
    url: "https://images.unsplash.com/photo-1604755530968-64e218e1b67a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  {
    name: "Foods1",
    url: "https://images.unsplash.com/photo-1604755530968-64e218e1b67a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 100,
    comments: 10,
  },
  
];

