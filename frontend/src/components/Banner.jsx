import React, { useState,  useEffect } from "react";
import { userRequest } from "../requestMethods";
const Banner = () => {
  const [banner, setBanner] = useState({})

    useEffect(() => {
    const fetchRandomBanner = async () => {
      try {
        const res = await userRequest.get("/banners/random");
        setBanner(res.data);
      } catch (error) {
        console.error("Failed to fetch random banner data:", error);
        } 
    };
    
    fetchRandomBanner();
  }, []);

  if (!banner){ 
     return <div>Loading...</div>;
  }
  return (
    <div className={'relative bg-[url(--banner.img)] bg-no-repeat bg-cover h-[80vh] px-[200px]'} 
    style={{backgroundImage: `url(${banner.img})`}}
    >
       <div className="absolute inset-0 bg-black opacity-50">

       </div>

       <div className="relative flex flex-col text-white w-[50%] pt-[10%]">
         
         <span className="text-[30px] mt-3">{banner.subtitle}</span>

         <h1 className="text-3xl mt-3">{banner.title}</h1>

         <div className="flex items-center mt-5">
             <button className="bg-[#e64fbe] p-2.5 w-[200px] text-white cursor-pointer mr-9">Shop Now</button>
             <button className="bg-gray-500 p-2.5 w-[200px] text-white cursor-pointer mr-9" >CALL: (176) 678 890</button>
         </div>
       </div>
    </div>
  );
}

export default Banner;
