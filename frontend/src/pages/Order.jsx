import { FaCheckCircle } from "react-icons/fa"
import React,{ useState} from "react";
import Rating from "@mui/material/Rating";
const Order = () => {
    const [value, setValue] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="text-center mb-8 ">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4"/>
                <h1 className="text-3xl font-bold">Thank You For Your Orders!</h1>
                <p className="text-gray-600 mt-2">Here are the details of your recent Orders.</p>
            </div>

            <div className="mb-8 ">
                <h2 className="text-2xl font-semibold mb-4">Order #1</h2>
                <div className="space-y-4">

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Items Orderd</h3>

                        <div className="flex flex-col">
                           <div className="mb-7">
                            <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                                <img src="/lotion.jpg" alt="" className="w-30 h-30 rounded-md object-cover" />
                                <div className="flex-1 ml-4">
                                    <h4 className="text-lg font-semibold">Mekis Grapeseed & Sweet Almond Oil-30ml ,For Dull</h4>
                                    <p className="text-gray-600">2</p>

                                </div>

                                <div className="text-right">
                                    <p className="text-lg font-bold">$90</p>

                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="my-3">Rate This Product</h3>
                                <Rating name="simple controlled" value={value} precision={0.01} onChange={(event, newValue) =>{
                                 setValue(newValue);
                                 }} sx={{
                                  '& .MuiRating-iconFilled': { color: 'gray' },
                                  '& .MuiRating-iconEmpty': { color: 'lightgray' }
                                   }}/>

                                   <textarea name="" id="" placeholder="leave a message :)" className=" w-[300px] mt-3  bg-white p-4 rounded-lg shadow-md border border-gray-200">
                                    
                                   </textarea>
                                   <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                                    Submit
                                   </button>

                            </div>
                            </div>
                            <div className="mb-7">
                                <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                                <img src="/lotion.jpg" alt="" className="w-30 h-30 rounded-md object-cover" />
                                <div className="flex-1 ml-4">
                                    <h4 className="text-lg font-semibold">Mekis Grapeseed & Sweet Almond Oil-30ml ,For Dull</h4>
                                    <p className="text-gray-600">2</p>

                                </div>

                                <div className="text-right">
                                    <p className="text-lg font-bold">$90</p>

                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="my-3">Rate This Product</h3>
                                <Rating name="simple controlled" value={value} precision={0.01} onChange={(event, newValue) =>{
                                 setValue(newValue);
                                 }} sx={{
                                  '& .MuiRating-iconFilled': { color: 'gray' },
                                  '& .MuiRating-iconEmpty': { color: 'lightgray' }
                                   }}/>

                                   <textarea name="" id="" placeholder="leave a message :)" className=" w-[300px] mt-3  bg-white p-4 rounded-lg shadow-md border border-gray-200">
                                    
                                   </textarea>
                                   <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                                    Submit
                                   </button>

                            </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
            <p className="text-gray-600">mehrnooshghz00@gmail.com</p>
            <p className="text-gray-600">+(1) 1304532</p>
            <p className="text-gray-600">Mehrnoosh Ghz</p>
         
        </div>

        <div className="bg-gray-50 rounded-lg my-2">
            <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
            <p className="text-gray-600">VISA</p>

        </div>
 
        <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Order Summery</h3>
            <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">Subtotal:</span>
                <span className="text-lg font-semibold">$72</span>

            </div>
            <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">Shipping:</span>
                <span className="text-lg font-semibold">$10</span>

            </div>
            <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-lg font-semibold">$730</span>

            </div>

        </div>
        

        <div className="mt-8 text-center">
             <button className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold">Continue Shopping</button>
        </div>

        </div>

    </div>
  )
}

export default Order