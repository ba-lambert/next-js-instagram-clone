import Link from "next/link";
import { 
  IoHomeOutline, 
  IoPersonOutline 
} from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { PiFilmStripDuotone } from "react-icons/pi";
import { RiImageAddLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";

const BottomBar = [
  {
    icon: IoHomeOutline,
    label: "Home",
    href: "/",
  },
  {
    icon: MdExplore,
    label: "Explore",
    href: "/explore",
  },
  {
    icon: PiFilmStripDuotone,
    label: "Reels",
    href: "/reels",
  },
  {
    icon: RiImageAddLine,
    label: "Add",
    href: "/add",
  },
  {
    icon: SiGooglemessages,
    label: "Messages",
    href: "/messages",
  },
  {
    icon: IoPersonOutline,
    label: "Profile",
    href: "/profile",
  },
];

export default function BottomMobile() {
  return (
    <div className="absolute bottom-0 flex flex-row px-4 items-center bg-white justify-between sm:hidden h-12 w-full">
      {BottomBar.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <Link href={item.href}>
            <item.icon size={30} />
          </Link>
        </div>
      ))}
    </div>
  );
} 