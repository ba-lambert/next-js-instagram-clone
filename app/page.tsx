import Feed from "./components/Feeds/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { feeds } from "./data/feeds";

export default function Home() {
  return (
    <div className="overflow-y-scroll flex flex-row">
      <div className="sm:w-[60%]">
        <Header />
        <div className="px-4 sm:px-20 pb-20">
          {feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}