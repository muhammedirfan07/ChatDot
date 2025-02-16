
import logo from '../assets/logo.png'
import bgImg from '../assets/loginbg.png'



const Login = ({setNewUsers,logNewUser,newUsers}) => {
 
  return (
    <>
     <div style={{fontFamily:"Poppins"}} className=' flex w-full h-screen rounded-2'>
        <div className='hidden md:block  w-1/2'> 
          <div className=' flex justify-center items-center h-full flex-col '>
            <h1 className='text-center text-md text-black-200'>Hey there 👋, Welcome Back.  chat with <br /> your friends & colleagues</h1>
            <img src={bgImg} alt="" />
          </div>
         
        </div>
        <div className='flex-1 max-auto max-w-2xl '>
          <div className='flex  justify-center items-center  h-full flex-col p-20' >
            <div className='flex items-center'>
              <img className='w-19 h-19 pb-2'  src={logo} alt="" />
               <h1 className='text-4xl mb-4 '> Chatdot</h1>
            </div>
            <form className='w-full'onSubmit={logNewUser} >
            <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    value={newUsers}
                    autoComplete="given-name"
                    className=" w-full rounded-md bg-white px-4 py-4 text-base text-gray-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400  mb-4"
                    placeholder='Enter your name'
                    onChange={e=>setNewUsers(e.target.value)}
                    onKeyDown={(e)=> e.key==="Enter"? logNewUser():null}
                  />
                   <button
                   type='submit'

            className=" w-full rounded-md bg-blue-500 px-4 py-3 text-xl  text-white shadow-xs hover:bg-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
          >
           let's Start
          </button>
            </form>
          </div>
        </div>
     </div>
    </>
  )
}

export default Login