import { io } from 'socket.io-client'

const socket=io("https://chatdot-backend.onrender.com")

export default socket