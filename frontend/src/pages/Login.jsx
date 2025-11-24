import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"
import { login } from "../redux/apiCalls";
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Login = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false);
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const navigate = useNavigate();


   useEffect(() => {
   if (user.currentUser) {
    navigate("/");
   }
  }, [user.currentUser, navigate]);


    const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

  try {
    // Wait for the login function to finish
    await login(dispatch, { email, password });

    // Check if login was successful
    if (user.currentUser) {
      navigate("/"); // only navigate if user exists
    } else {
      toast.error("Invalid email or password");
    }

  } catch (error) {
    if (error.response && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An unexpected error occurred, please try again.");
    }
  } finally {
    setLoading(false);
  }
};



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
           <img src="/blue.avif" alt="login" className="object-cover h-full w-full" />
         </div>

        {/* Form */}
        <div className="p-10 w-[500px]" >
          <h2 className="text-xl font-bold text-gray-700 mb-5">Login</h2>
          <form className=" spay-y-5 " autoComplete="off">
            
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">Email</label>
              <input type="text" className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2ce2]" placeholder="example@example.com" value={email}  onChange={(e) => setEmail(e.target.value)}  />
            </div>

            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">Password</label>
              <input type="password" className="w-full p-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1f2ce2]" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className="w-full py-2 bg-[#1f2ce2] text-white font-bold rounded-md transition-transform duration-500 hover:bg-blue-200 focus:outline-none focus:ring-blue-500 trasform hover:scale-105" onClick={handleLogin}>
              {loading ? "loading ..." : "Login"}
              </button>
             
             <div className="mt-4 text-sm text-gray-600">
              <span>Don't Have an Account? </span>
              
              <Link to="/create-account" className="text-blue-500 hover:underline ml-1">
              Sign Up
              </Link>


             </div>
          
          </form>

        </div>

      </div>
    </div>
  )
}

export default Login