// MessageList.jsx
import React, { useState, useEffect } from "react";
import socket from "../utils/socket";

const MessageList = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [systemEvents, setSystemEvents] = useState([]);

  useEffect(() => {
    // Handle chat messages
    socket.on("receiveMessage", (msgData) => {
      setMessages(prevMessages => [...prevMessages, {
        type: 'chat',
        ...msgData
      }]);
    });

    // Handle user joins
    socket.on("updateUserList", (userList) => {
      const existingUsers = systemEvents.map(event => event.user);
      const newUsers = userList.filter(user => !existingUsers.includes(user));
      
      newUsers.forEach(user => {
        const joinEvent = {
          type: 'system',
          eventType: 'join',
          user,
          timestamp: Date.now(),
          text: user === currentUser ? 'You joined' : `${user} joined`
        };
        setSystemEvents(prev => [...prev, joinEvent]);
        setMessages(prev => [...prev, joinEvent]);
      });
    });

    // Handle user leaves
    socket.on("leftUsers", (username) => {
      const leaveEvent = {
        type: 'system',
        eventType: 'leave',
        user: username,
        timestamp: Date.now(),
        text: `${username} left`
      };
      setSystemEvents(prev => [...prev, leaveEvent]);
      setMessages(prev => [...prev, leaveEvent]);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("updateUserList");
      socket.off("leftUsers");
    };
  }, [currentUser, systemEvents]);

  // Combine and sort all messages and system events
  const allMessages = messages.sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="flex flex-col  overflow-y-auto">
      {allMessages.map((msg, index) => {
        if (msg.type === 'system') {
          // System message (join/leave)
          return (
            <div key={`system-${index}`} className="flex justify-center my-2">
              <div className="bg-gray-100 rounded-full px-4 py-1">
                <span className={`text-xs font-medium ${
                  msg.eventType === 'join' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {msg.text}
                </span>
              </div>
            </div>
          );
        } else {
          // Regular chat message
          return (
            <div
              key={`chat-${index}`}
              className={`flex mb-2 ${
                msg.sender === currentUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-2 rounded-lg break-words ${
                  msg.sender === currentUser 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-200"
                }`}
              >
                <span className="text-sm font-bold">
                  {msg.sender === currentUser ? "You" : msg.sender}
                </span>
                <p className="mt-1">{msg.text}</p>
                <span className="text-xs flex justify-end mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MessageList;