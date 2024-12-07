"use client"
import { PiMessengerLogo } from "react-icons/pi";
import { BiEdit } from "react-icons/bi"
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
        <div className="flex flex-row w-[100%] flex-1 h-screen">
            <div className="flex flex-col w-[30%] h-full border-r-[1px] border-slate-700">
                <div className="flex relative justify-between items-center px-10 flex-row w-full h-32 border-b-[1px] border-slate-700">
                    <p className="text-slate-600 text-2xl font-bold">Ba Lambert</p>
                    <BiEdit className="text-slate-600 text-xl" size={30} />
                    <div className="absolute bottom-1 left-4 flex flex-col w-full">
                        <button className="text-slate-600 w-fit text-md font-normal">Primary</button>
                    </div>
                </div>

                <div className="w-full h-24 flex flex-row gap-4 justify-start px-4 items-center overflow-x-auto scrollbar-hide">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="flex-shrink-0 flex flex-col items-center mt-4 w-20 h-fit">
                            <Image src="https://res.cloudinary.com/do4supuho/image/upload/v1732727560/COMAGENCY/agukanet/Lambert.png" alt="profile" width={300} height={300} className="rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover" key={index} />
                            <p className="text-slate-600 text-sm">Ba</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col overflow-y-auto scrollbar-hide px-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => handleUserSelect("Ba Lambert")}
                            className={`flex-shrink-0 flex flex-row items-center py-4 w-full gap-4 h-20 cursor-pointer hover:bg-slate-100 ${
                                selectedUser === "Ba Lambert" ? "bg-slate-100" : ""
                            }`}
                        >
                            <Image src="https://res.cloudinary.com/do4supuho/image/upload/v1732727560/COMAGENCY/agukanet/Lambert.png" 
                                alt="profile" width={300} height={300} 
                                className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover" 
                            />
                            <div>
                                <p className="text-slate-600 text-sm">Ba Lambert</p>
                                <span className="text-slate-600 text-xs">Last seen 12:00</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Update the right side to show messages or default view */}
            <div className="flex flex-col w-[70%] h-full">
                {selectedUser ? (
                    <div className="flex flex-col h-full">
                        {/* Chat header */}
                        <div className="h-16 border-b border-slate-700 px-6 flex items-center">
                            <p className="text-slate-600 text-lg font-semibold">{selectedUser}</p>
                        </div>
                        
                        {/* Messages container */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages[selectedUser]?.map((message) => (
                                <div key={message.id} 
                                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[70%] p-3 rounded-lg ${
                                        message.sender === 'me' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-slate-100 text-slate-800'
                                    }`}>
                                        <p>{message.text}</p>
                                        <span className="text-xs opacity-70">{message.timestamp}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message input */}
                        <div className="h-20 border-t border-slate-700 px-6 flex items-center">
                            <input 
                                type="text" 
                                placeholder="Type a message..." 
                                className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                ) : (
                    // Default view when no chat is selected
                    <div className="flex flex-col items-center justify-center space-y-4 w-full h-full">
                        <PiMessengerLogo size={50} className="text-slate-600" />
                        <p className="text-slate-600 text-2xl font-bold">Your messages</p>
                        <p className="text-slate-600 text-sm">Send private a message to start chatting</p>
                        <button className="text-white bg-blue-500 px-4 py-1 rounded-md text-md font-normal">
                            send message
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

