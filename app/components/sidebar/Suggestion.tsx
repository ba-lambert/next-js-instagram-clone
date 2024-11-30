"use client";

import Image from "next/image";
export default function Suggestion() {
    return (
        <div className="w-full h-fit px-10 flex flex-col gap-4">
            <div className="flex flex-row justify-between">
                <p className="text-sm font-semibold text-gray-500">Suggested for you</p>
                <p className="text-black text-xs font-semibold">See All</p>
            </div>
            <div className="flex flex-col gap-4">
                <PersonProfile />
                <PersonProfile />
                <PersonProfile />
                <PersonProfile />
                <PersonProfile />
            </div>
        </div>
    );
}


const PersonProfile = () => {
    return (
        <div className="flex flex-row gap-2 w-full items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
                <Image src="https://avatars.githubusercontent.com/u/50544115?v=4" alt="profile-img" width={40} height={30} className="rounded-full" />
                <div>
                    <p className="font-semibold text-sm">ba_lambert</p>
                    <p className="text-gray-500 text-xs">Followed by ba_lambert + 2 others</p>
                </div>
            </div>
            <button className="text-sm font-semibold text-blue-500">Follow</button>
        </div>
    );
}
