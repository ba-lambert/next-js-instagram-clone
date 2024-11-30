"use client";
import Image from "next/image";
import { IoIosSettings } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { BsThreads } from "react-icons/bs";

export default function Profile() {
    return (
        <div>
            <ProfileHeader />
            <div className="sm:p-14 mt-20 sm:mt-0">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center gap-2 w-1/3 relative py-10 px-4 sm:px-10">
                        <Image src="https://res.cloudinary.com/do4supuho/image/upload/v1732727560/COMAGENCY/agukanet/Lambert.png" alt="profile" width={300} height={300} className="rounded-full w-20 h-20 sm:w-40 sm:h-40 object-cover" />
                        {/* <IoIosSettings size={34} className="absolute right-56 top-[40px]" /> */}
                    </div>
                    <div className="flex flex-col gap-2 w-2/3">
                        <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <p className="text-md sm:text-xl ">Ba Lambert</p>
                                    <IoIosSettings size={34} className="" />
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <button className="bg-gray-200 bg-opacity-80 text-sm rounded-lg text-black font-semibold px-6 py-2">Edit Profile</button>
                                    <button className="bg-gray-200 bg-opacity-80 text-sm rounded-lg text-black font-semibold px-6 py-2">View Archive</button>
                                </div>
                                <IoIosSettings size={34} className="hidden sm:block" />
                            </div>
                        </div>
                        <div className="hidden">
                            <div className="hidden sm:flex flex-row items-center justify-start mt-4 gap-10">
                                <p><span className="font-semibold">5 </span> Posts</p>
                                <p><span className="font-semibold">100 </span> Followers</p>
                                <p><span className="font-semibold">100</span> Following</p>
                            </div>
                            <p className="text-md font-semibold mt-4">Ba Lambert</p>
                            <p className="text-sm text-gray-800">I am a developer and I work with a team to build systems. I’ve worked with multiple languages and frameworks, include MERN stack ,java ,flutter ,..
                            </p>
                        </div>
                        <div className="sm:w-96 h-20 bg-gray-200 rounded-2xl px-6 mt-4 sm:mt-0 flex flex-col justify-center items-start">
                            <p className="text-sm font-semibold">Proffessional Dashboard</p>
                            <p className="text-sm text-gray-500">100 accounts reached in the last 30 days</p>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden p-2">
                            <div className="hidden sm:flex flex-row items-center justify-start mt-4 gap-10">
                                <p><span className="font-semibold">5 </span> Posts</p>
                                <p><span className="font-semibold">100 </span> Followers</p>
                                <p><span className="font-semibold">100</span> Following</p>
                            </div>
                            <p className="text-md font-semibold mt-4">Ba Lambert</p>
                            <p className="text-sm text-gray-800">I am a developer and I work with a team to build systems. I’ve worked with multiple languages and frameworks, include MERN stack ,java ,flutter ,..
                            </p>
                        </div>
                <div className="flex flex-col mt-4 sm:mt-20 items-start justify-start gap-2">
                    <div className="bg-gray-200 bg-opacity-52 rounded-full p-4 border-2 border-gray-300">
                        <IoIosAdd size={44} className="text-gray-400" />
                    </div>
                    <p className="text-sm pl-6 font-semibold">New</p>
                </div>
            </div>
        </div>
    );
}


const ProfileHeader = () => {
    return (
        <div className="fixed top-0 w-screen flex flex-row items-center justify-between gap-2 px-4 border-b-2 border-black py-4">
            <IoIosSettings size={28} />
            <div>
                <p className="text-md font-semibold">Ba Lambert</p>
            </div>
            <BsThreads size={28} />
        </div>
    )
}
