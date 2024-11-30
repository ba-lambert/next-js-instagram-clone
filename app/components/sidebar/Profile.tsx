"use client";

import Image from "next/image";
export default function Profile() {
    return (
        <div className="w-full h-fit px-10 py-10">
            <div className="w-full h-fit flex-row justify-between flex">
                <div className="flex flex-row text-sm gap-2 items-center">
                    <Image src="https://avatars.githubusercontent.com/u/50544115?v=4" alt="profile-img" width={40} height={40} className="rounded-full" />
                    <div>
                        <p className="font-semibold">ba_lambert</p>
                        <p className="text-gray-500">BA Lambert</p>
                    </div>
                </div>
                <button className="text-sm font-semibold text-blue-500">Switch</button>
            </div>
        </div>
    );
}