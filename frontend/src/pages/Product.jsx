import React,{ useState} from "react";
import Rating from "@mui/material/Rating";
import {FaMinus, FaPlus} from "react-icons/fa";
const Product = () => {
  const [value, setValue] = useState(3);
  return (
    <div className="h-auto flex justify-self-stretch p-[30px]">

      {/* LEFT */}
      <div className="flex-1 h-[500px] w-[600px]">
        <img src="/lotion2.jpg" alt="" className="h-[110%] w-[80%] object-covers"/>

      </div>


      {/* RIGHT */}
      <div className="flex flex-1 flex-col ml-10">
          <h2 className="text-[25px] font-semibold mb-3">Bajaj Almond Drops, 6X Vitamin E Nourishment</h2>
           <span>the nwe and better bajaj Almond drops Hair Oil has 6X Vitamin that helps reduce hair fall and gives beautiful strong hair. it is light, non-sticky and the perfect solution for your hair . now styleyour hair the way you want without any fear of hair he nwe and better bajaj Almond drops Hair Oil has 6X Vitamin that helps reduce hair fall and gives beautiful strong hair. it is light, non-sticky and the perfect solution for your hair . now styleyour hair the way you want without any fear of hair he nwe and better bajaj Almond drops Hair Oil has 6X Vitamin that helps reduce hair fall and gives beautiful strong hair. it is light, non-sticky and the perfect solution for your hair . now styleyour hair the way you want without any fear of hair he nwe and better bajaj Almond drops Hair Oil has 6X Vitamin that helps reduce hair fall and gives beautiful strong hair. it is light, non-sticky.</span>
           <h2 className="font-semibold mt-2 text-[20px]">$ 90</h2>
           <Rating name="simple controlled" value={value} precision={0.01} onChange={(event, newValue) =>{
                setValue(newValue);
            }}/>

            <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6 ">
              <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700">WHAT'S IN BOX</h2>
              <hr className="mb-4"/>
              <span className="block text-gray-600 text-base text-[18px]">1 Garnier Even & Matte Vitamin C Cleaning Foam 500ml
              </span>
            </div>

            <div className="inline-flex items-center bg-[#ef93db] text-white font-semibold text-sm p-3 rounded-full shadow-md">
              Wholesale Available : $70 as from 10 items
            </div>

            <div className=" flex items-center my-5 p-4">
              <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2  rounded-full mr-4 text-3xl" />
              <span className="text-lg font-semibold mx-4">1</span>
              <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2  rounded-full mr-4 text-3xl" />
            </div>

              <button className="bg-[#3e3e3e8c] p-2.5 w-[200px] text-white cursor-pointer">Add To Cart</button>
              <hr className="my-6"/>
              <div className="flex flex-col">
                <h2 className="font-semibold text-[18px]">Reviews</h2>

                <div className="flex items-center">
                  <Rating name="simple controlled" value={value} precision={0.01} onChange={(event, newValue) =>{
                  setValue(newValue);
                  }}/>
                  <span className="font-semibold mx-5">John K.</span>
                </div>
                <div className="flex items-center">
                  <Rating name="simple controlled" value={value} precision={0.01} onChange={(event, newValue) =>{
                  setValue(newValue);
                  }}/>
                  <span className="font-semibold mx-5">Maria Gh.</span>
                </div>

              </div>
            

      </div>

    </div>
  )
}

export default Product