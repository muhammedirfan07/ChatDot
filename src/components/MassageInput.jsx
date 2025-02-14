import React, { useState } from "react";
import socket from "../utils/socket";

const MassageInput = ({ users }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() && users) {
      socket.emit("sendMessage", { text: message, sender: users }); // Send sender along with message
      setMessage(""); // Clear input
    }
  };

  return (
    

<div className="h-12 sm:h-16 bg-white p-2 rounded-b-xl flex items-center flex-shrink-0">
<form className="flex w-full space-x-2"
onSubmit={(e) => {
         e.preventDefault();
         handleSendMessage();
       }}>
  <input
    type="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="w-full rounded-md  sm:px-4 py-1 sm:py-2 border border-blue-100 bg-white text-sm sm:text-base text-black outline-none placeholder-gray-500 "
    placeholder="Enter a message.."
  />
  <button
    type="submit"
    className="px-3 sm:px-4 py-1 sm:py-2 rounded-md bg-blue-600 text-white hover:bg-blue-400 text-sm sm:text-base transition-colors"
  >
    Send
  </button>
</form>
</div>
  );
};

export default MassageInput;
