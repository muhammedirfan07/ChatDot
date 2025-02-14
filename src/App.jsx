
// import socket from './utils/socket'
import './App.css'
import Login from './components/Login'
import Chatbox from './components/Chatbox'
import React, {  useState } from 'react'
import socket from './utils/socket'
function App() {

  const [newUsers,setNewUsers]=useState("")
  //actual signed user
  const [users,setUsers]=useState("")
  //messages 
  const logNewUser = () => {
    if (newUsers&&newUsers.trim() !== "") { // Ensure the input is not empty
        setUsers(newUsers)
        socket.emit("uesrJoing",newUsers)
    }
  };
  
  socket.on("session",({userId,usernames})=>{
    setUsers(usernames)
    console.log(`${userId}`);
  })


  return (
    <>
    <div className='w-full h-screen'>
    {
      users? <Chatbox users={users} newUsers={newUsers} setUsers={setUsers} setNewUsers={setNewUsers} /> :<Login newUsers={newUsers} setNewUsers={setNewUsers} logNewUser={logNewUser} />
    }
    </div>
     
        
    </>
  )
}

export default App
