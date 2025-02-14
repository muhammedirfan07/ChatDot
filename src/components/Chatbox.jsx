import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import ActiveUsers from "./ActiveUsers";
import MassageInput from "./MassageInput";
import MessageList from "./MessageList";
import socket from "../utils/socket"; // Import socket instance

const Chatbox = ({ users }) => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    socket.on("updateUserList", (userList) => {
      setActiveUsers(userList);
    });

    return () => {
      socket.off("updateUserList");
    };
  }, []);

  return (
    <div className="h-screen w-full bg-gray-300 p-2 sm:p-5 flex flex-col">
      <div className="flex-1 p-2 w-full bg-white shadow-xl rounded-2xl flex flex-col min-h-0">
        {/* Header */}
        <div className="w-full bg-violet-300 rounded-xl h-12 sm:h-13 px-2 sm:px-4 flex justify-between items-center mb-1 flex-shrink-0">
          <div className="flex items-center">
            <img className="w-8 h-8 sm:w-10 sm:h-10" src={logo} alt="Logo" />
            <h1 className="text-lg sm:text-xl font-semibold ml-2">Chatdot</h1>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-user mr-2 text-blue-400"></i>
            <span className="text-sm sm:text-base">{users}</span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-1 gap-1 min-h-0 overflow-hidden">
          {/* Sidebar */}
          <div className="bg-gray-100 rounded-xl w-[100px] sm:w-1/6 sm:min-w-[120px] sm:p-3 overflow-y-auto flex-shrink-0">
            <ActiveUsers activeUsers={activeUsers} users={users} />
          </div>

          {/* Chat Body */}
          <div className="bg-blue-100 flex-1 rounded-xl p-1 flex flex-col min-h-0">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto bg-blue-100 rounded-t-xl scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-amber-200">
              <MessageList currentUser={users} />
            </div>

            <hr className="w-full bg-pink-500 my-1" />

            {/* Chat Message Input */}
            <MassageInput users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
