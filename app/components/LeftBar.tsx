"use client";

import { 
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineVideoCamera, 
} from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsPlusSquare } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { RxPerson } from 'react-icons/rx';
import { IoIosMenu } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';


const menuItems = [
  {
    label: 'Home',
    icon: AiFillHome,
    path: '/'
  },
  {
    label: 'Search',
    icon: AiOutlineSearch,
    path: '/search'
  },
  {
    label: 'Explore',
    icon: AiOutlineCompass,
    path: '/explore'
  },
  {
    label: 'Reels',
    icon: AiOutlineVideoCamera,
    path: '/reels'
  },
  {
    label: 'Messages',
    icon: BiMessageSquareDetail,
    path: '/messages'
  },
  {
    label: 'Notifications',
    icon: FaRegHeart,
    path: '/notifications'
  },
  {
    label: 'Create',
    icon: BsPlusSquare,
    path: '/create'
  },
  {
    label: 'Profile',
    icon: RxPerson,
    path: '/profile'
  }
];

export default function LeftBar() {
  return (
    <div className="relative w-[21%] border-r border-black border-opacity-20 sm:flex flex-col space-y-10 items-start px-4 py-10 hidden">
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
        alt="Instagram"
        width={120}
        height={108}
        priority
      />
      
      <div className="w-full">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
          >
            <item.icon size={20} />
            <span className="text-lg font-semibold">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex w-full items-center absolute bottom-6 flex-row gap-4 px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
        <IoIosMenu size={20} />
        <span className="text-lg font-semibold">Menu</span>
      </div>
    </div>
  );
}