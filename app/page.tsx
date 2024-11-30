"use client";

import Feed from "./components/Feeds/Feed";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <section className="flex flex-row w-screen h-screen">
      <LeftBar />
      <main className="flex flex-row w-[79%] overflow-scroll">
        <div className="w-[60%]"> 
          <Header />
          <div className="px-20">
          <Feed />
          </div>
        </div>
        <Sidebar />
      </main>
    </section>
  );
}
