import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleRegister = async (e) => {
     e.preventDefault()
     try {
      await userRequest.post("/auth/register", {name, email, password});
      navigate("/login")
     } catch (error) {
       if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);  
      } else {
        toast.error("an unexpected error occured, please try again.") 
      }
   }
}

  return (
    <div className="flex items-center justify-center mt-[3%]">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
         {/* image */}

         <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105 ">
           <img src="/lotion1.jpg" alt="login" className="object-cover h-full w-full" />
         </div>

        {/* Form */}
        <div className="p-10 w-[500px]">
          <h2 className="text-xl font-bold text-gray-700 mb-5">Create Account</h2>
          <form className=" spay-y-5 ">

             <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">Full Name</label>
              <input type="text" className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]" placeholder="Maria" onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">Email</label>
              <input type="text" className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">Password</label>
              <input type="password" className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d55fbb]" placeholder="*******"  onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="w-full py-2 bg-[#d55fbb] text-white font-bold rounded-md transition-transform duration-500 hover:bg-blue-200 focus:outline-none focus:ring-red-500 trasform hover:scale-105" 
             onClick={handleRegister}>Create an Account</button>
             
             <div className="mt-4 text-sm text-gray-600">
              <span>Have Already an Account?</span>
              
              <Link to="/login" className="text-red-500 hover:underline ml-1">
              Login
              </Link>


             </div>
          
          </form>

        </div>

      </div>
    </div>
  )
}

export default Register