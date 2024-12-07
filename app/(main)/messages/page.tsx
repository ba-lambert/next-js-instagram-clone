"use client"
import { PiMessengerLogo } from "react-icons/pi";
import { BiArrowBack, BiEdit } from "react-icons/bi"
import Image from "next/image"
import { useState } from "react"

// Add a type for the message
type Message = {
    id: number;
    text: string;
    sender: string;
    timestamp: string;
}

export default function Messages() {
    // Add state for selected user and messages
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    
    // Dummy messages data - replace with your actual data
    const messages: Record<string, Message[]> = {
        "Ba Lambert": [
            { id: 1, text: "Hey, how are you?", sender: "Ba Lambert", timestamp: "12:00" },
            { id: 2, text: "I'm good, thanks!", sender: "me", timestamp: "12:01" },
        ]
    };

    // Handler for selecting a user
    const handleUserSelect = (userName: string) => {
        setSelectedUser(userName);
    };

    return (
        <div className="flex flex-col sm:flex-row w-full h-[100dvh] bg-white">
            <div className={`flex flex-col w-full sm:w-[350px] h-full border-r-[1px] border-slate-700 
                ${selectedUser ? 'hidden sm:flex' : 'flex'}`}>
                <div className="flex relative justify-between items-center px-4 sm:px-6 flex-row w-full h-16 border-b-[1px] border-slate-700">
                    <p className="text-slate-600 text-lg font-semibold">ba_lambert</p>
                    <BiEdit className="text-slate-600" size={24} />
                </div>

                <div className="w-full h-24 flex flex-row gap-4 justify-start px-2 sm:px-4 items-center overflow-x-auto scrollbar-hide">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="flex-shrink-0 flex flex-col items-center mt-2 w-16 h-fit" key={index}>
                            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600">
                                <div className="p-[2px] rounded-full bg-white">
                                    <Image 
                                        src="https://res.cloudinary.com/do4supuho/image/upload/v1732727560/COMAGENCY/agukanet/Lambert.png" 
                                        alt="profile" 
                                        width={300} 
                                        height={300} 
                                        className="rounded-full w-12 h-12 object-cover"
                                    />
                                </div>
                            </div>
                            <p className="text-slate-600 text-xs mt-1">Ba</p>
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex flex-col overflow-y-auto">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => handleUserSelect("Ba Lambert")}
                            className={`flex flex-row items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-50
                                ${selectedUser === "Ba Lambert" ? "bg-slate-50" : ""}`}
                        >
                            <Image 
                                src="https://res.cloudinary.com/do4supuho/image/upload/v1732727560/COMAGENCY/agukanet/Lambert.png" 
                                alt="profile" 
                                width={300} 
                                height={300} 
                                className="rounded-full w-12 h-12 object-cover" 
                            />
                            <div className="flex-1">
                                <p className="text-slate-800 text-sm font-medium">Ba Lambert</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 text-xs">Last message • </span>
                                    <span className="text-slate-400 text-xs">2h</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`flex flex-col flex-1 h-full bg-white
                ${selectedUser ? 'flex' : 'hidden sm:flex'}`}>
                {selectedUser ? (
                    <div className="flex flex-col h-full">
                        <div className="h-16 border-b border-slate-700 px-4 flex items-center gap-4">
                            <button 
                                onClick={() => setSelectedUser(null)}
                                className="sm:hidden text-slate-600"
                            >
                                <BiArrowBack size={24} />
                            </button>
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="https://res.cloudinary.com/do4supuho/image/upload/v1732727560/COMAGENCY/agukanet/Lambert.png" 
                                    alt="profile" 
                                    width={300} 
                                    height={300} 
                                    className="rounded-full w-8 h-8 object-cover" 
                                />
                                <p className="text-slate-600 text-sm font-semibold">{selectedUser}</p>
                            </div>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {messages[selectedUser]?.map((message) => (
                                <div key={message.id} 
                                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[75%] p-3 rounded-2xl ${
                                        message.sender === 'me' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-gray-100 text-slate-800'
                                    }`}>
                                        <p className="text-sm">{message.text}</p>
                                        <span className="text-[10px] opacity-70 mt-1 block">{message.timestamp}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 flex items-center gap-2">
                            <input 
                                type="text" 
                                placeholder="Message..." 
                                className="flex-1 p-3 rounded-full border border-slate-200 focus:outline-none focus:border-slate-400 text-sm"
                            />
                            <button className="text-blue-500 font-semibold text-sm">Send</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-4 w-full h-full p-4">
                        <div className="w-16 h-16 rounded-full border-2 border-slate-600 flex items-center justify-center">
                            <PiMessengerLogo size={32} className="text-slate-600" />
                        </div>
                        <p className="text-slate-800 text-xl font-semibold">Your Messages</p>
                        <p className="text-slate-500 text-sm text-center">Send private photos and messages to a friend</p>
                        <button className="text-white bg-blue-500 px-6 py-2 rounded-lg text-sm font-semibold">
                            Send message
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

