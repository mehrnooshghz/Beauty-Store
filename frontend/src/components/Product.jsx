import React,{ useState} from "react";
import Rating from "@mui/material/Rating";

const Product = () => {
    const [value, setValue] = useState(3);
  return (
    <div>
         <div className="flex flex-col items-center justify-center h-[500px] m-[10px] cursor-pointer">
            <img src="/serum1.jpg" alt="" className="h-[400px] w-[300px] bg-cover"/>
            <h2 className="font-semibold text-[18px] w-[300px]">Rosehip Seed ,Argan ,Sweet Almond & Vitamin E Oil-Anti-Aging</h2>
            <span className="text-[18px] font-semibold flex items-center justify-center">$100</span>
            <span className="flex items-center"></span>
            <Rating name="simple controlled" value={value} precision={0.01} onChange={(event, newValue) =>{
                setValue(newValue);
            }}/>
        </div>
    </div>
  )
}

export default Product