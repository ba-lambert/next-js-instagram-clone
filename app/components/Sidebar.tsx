"use client";

import Profile from "./sidebar/Profile";
import Suggestion from "./sidebar/Suggestion";
import BottomUrl from "./sidebar/BottomUrl";
export default function Sidebar() {
  return (
    <div className="w-[40%] py-3 px-6">
      <Profile />
      <Suggestion />
      <BottomUrl />
    </div>
  );
}
