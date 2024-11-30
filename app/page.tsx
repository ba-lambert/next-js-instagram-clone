
import { IoAddCircleOutline, IoHomeOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { PiFilmStripDuotone } from "react-icons/pi";
import { RiImageAddLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import Feed from "./components/Feeds/Feed";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import Sidebar from "./components/Sidebar";
import { feeds } from "./data/feeds";

export default function Home() {
  return (
    <section className="flex flex-row w-screen h-screen max-w-[1840px] mx-auto">
      <LeftBar />
      <main className="flex relative flex-col w-full sm:w-[79%]">
        <div className="overflow-y-scroll flex flex-row">
          <div className="sm:w-[60%]">
            <Header />
            <div className="px-4 sm:px-20 pb-32 sm:pb-20">
              {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
        <BottomMobile />
      </main>
    </section>
  );
}

const BottomBar = [
  {
    icon: IoHomeOutline,
    label: "Home",
  },
  {
    icon: MdExplore,
    label: "Explore",
  },
  {
    icon: PiFilmStripDuotone,
    label: "Reels",
  },
  {
    icon: RiImageAddLine,
    label: "Add",
  },
  {
    icon: SiGooglemessages,
    label: "Messages",
  },
  {
    icon: IoPersonOutline,
    label: "Profile",
  },
]

const BottomMobile = () => {
  return (
    <div className="absolute bottom-0 flex flex-row px-4 items-center bg-white justify-between sm:hidden h-14 w-full">
      {BottomBar.map((item) => (
        <div className="flex flex-col items-center gap-2">
          <item.icon size={30} />
        </div>
      ))}
    </div>
  )
}