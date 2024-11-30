"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { IoIosMore, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbLocationShare } from "react-icons/tb";
import { CiSaveUp2 } from "react-icons/ci";
import { FaRegFaceMeh } from "react-icons/fa6";
import { IFeed } from "@/types/feeds";

export default function Feed({ feed }: { feed: IFeed }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev < feed.image.length - 1 ? prev + 1 : prev
        );
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => 
            prev > 0 ? prev - 1 : prev
        );
    };

    return (
        <div className="w-[450px] min-h-[500px] mt-4">
            {/* Header */}
            <div className="flex w-full justify-between items-center py-2">
                <div className="flex items-center gap-2">
                    <div className="relative w-fit h-fit rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 cursor-pointer hover:scale-105 transition-transform">
                        <div className="block p-[2px] w-[40px] h-[40px] relative bg-white rounded-full">
                            <Image 
                                src={feed?.profileImage} 
                                alt="user profile" 
                                fill
                                className="rounded-full object-cover" 
                            />
                        </div>
                    </div>
                    <p className="text-sm font-semibold">{feed.username}</p>
                    <p className="text-xs text-gray-500">
                        <span className="text-gray-700">•</span> 2h
                    </p>
                </div>
                <IoIosMore className="w-4 h-4 text-black cursor-pointer" />
            </div>
            <div className="relative overflow-hidden rounded-md">
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {feed.image.map((img, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <Image 
                                src={img} 
                                alt={`Post image ${index + 1}`} 
                                width={450} 
                                height={450} 
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                {feed.image.length > 1 && (
                    <>
                        {currentImageIndex > 0 && (
                            <button
                                onClick={previousImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1.5 shadow-lg hover:bg-white transition-colors"
                                aria-label="Previous image"
                            >
                                <IoIosArrowBack size={20} />
                            </button>
                        )}

                        {currentImageIndex < feed.image.length - 1 && (
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1.5 shadow-lg hover:bg-white transition-colors"
                                aria-label="Next image"
                            >
                                <IoIosArrowForward size={20} />
                            </button>
                        )}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {feed.image.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all ${
                                        index === currentImageIndex 
                                            ? 'bg-blue-500 w-4' 
                                            : 'bg-gray-300 w-1.5'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="flex items-center gap-2 w-full justify-between mt-2">
                <div className="flex items-center gap-2">
                    <FaRegHeart className="w-6 h-6 text-black cursor-pointer hover:opacity-60 transition-opacity" />
                    <FaRegComment className="w-6 h-6 text-black cursor-pointer hover:opacity-60 transition-opacity" />
                    <TbLocationShare className="w-6 h-6 text-black cursor-pointer hover:opacity-60 transition-opacity" />
                </div>
                <CiSaveUp2 className="w-6 h-6 text-black cursor-pointer hover:opacity-60 transition-opacity" />
            </div>
            <p className="text-sm text-gray-800 font-semibold mt-4">
                {feed.likes} likes
            </p>
            <p className="text-sm text-gray-800 mt-2">
                {feed.description}
            </p>
            <button className="text-sm text-gray-500 mt-2 hover:text-gray-900 transition-colors">
                View all {feed.comments} comments
            </button>
            <div className="flex items-center gap-2 justify-between border-b border-gray-300">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full h-10 text-xs focus:outline-none transition-all"
                />
                <FaRegFaceMeh className="w-4 h-4 text-black cursor-pointer hover:opacity-60 transition-opacity" />
            </div>
        </div>
    );
}