import React, { useState } from "react";

const ActiveUsers = ({activeUsers,users}) => {
  const[currentUsers,setCurrentUsers]=useState(users)
  return (
    <>
      <div className="flex flex-col  p-1 rounded-md flex-1 bg-gray-100 py-3 ">
        <h1 className="w-full pl-1 font-bold  mb-4 text-xl">Active Users</h1>
        <ul>
                {activeUsers.map((user, index) => (
                  <li key={index} className="flex mb-2 w-full font-semibold text-md pl-1 text-wrap py-1.5 rounded-md hover:bg-white">
                     {user === currentUsers ? `${user} (you) ` : user}
                  </li>
                 
                ))}
        </ul>
      </div>
    </>
    // <>
    // <div className=" bg-gray-100 rounded-xl w-[100px] sm:w-1/6 sm:min-w-[120px]  sm:p-3 overflow-y-auto flex-shrink-0">
    // <h1 className="w-full pl-1 p-0  mb-4 text-xl">Active Users</h1>
    //   <ul className="text-sm sm:text-base">
    //   {activeUsers.map((user, index) => (
    //                <li key={index} className="flex mb-2 w-full font-semibold text-md pl-1 text-wrap py-1.5 rounded-md hover:bg-white">
    //                   {user === currentUsers ? `${user} (you)` : user}
    //                </li>
                  
    //             ))}
    //   </ul>
    // </div>
    // </>
  );
};

export default ActiveUsers;
