"use client";

import Feed from "./components/Feeds/Feed";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import Sidebar from "./components/Sidebar";
import { feeds } from "./data/feeds";

export default function Home() {
  return (
    <section className="flex flex-row w-screen h-screen max-w-[1840px] mx-auto">
      <LeftBar />
      <main className="flex flex-row w-[79%] overflow-y-scroll">
        <div className="w-[60%]"> 
          <Header />
          <div className="px-20 pb-20">
            {feeds.map((feed) => (
              <Feed key={feed.id} feed={feed} />
            ))}
          </div>
        </div>
        <Sidebar />
      </main>
    </section>
  );
}
