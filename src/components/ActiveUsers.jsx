import React, { useState } from "react";

const ActiveUsers = ({activeUsers,users}) => {
  
  return (
    <>
      <div className="flex flex-col  p-1 rounded-md flex-1 bg-gray-100 py-3 ">
        <h1 className="w-full pl-1 font-bold  mb-4 text-xl">Active Users</h1>
        <ul>
                {activeUsers.map((user, index) => (
                  <li key={index} className="flex mb-2 w-full font-semibold text-md pl-1 text-wrap py-1.5 rounded-md hover:bg-white">
                     {user === users ? `${user} (you) ` : user}
                  </li>
                 
                ))}
        </ul>
      </div>
    </>
    
  );
};

export default ActiveUsers;
