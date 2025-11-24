import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex items-center m-3">

      <Link to="/products/serums" className="contents">
        <div className="relative bg-[url('/s1.webp')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-5">
          <div className="absolute inset-0 bg-linear-to-l from-black/50 to-transparent"></div>
          <div className="relative flex items-center justify-center"> 
            <h2 className="font-semibold text-[30px] text-white">Skin Care</h2>
          </div>
        </div>
      </Link>

      <Link to="/products/toners" className="contents">
        <div className="relative bg-[url('/s5.png')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-5">
          <div className="absolute inset-0 bg-linear-to-l from-black/50 to-transparent"></div>
          <div className="relative flex items-center justify-center"> 
            <h2 className="font-semibold text-[30px] text-white">Body Care</h2>
          </div>
        </div>
      </Link>

      <Link to="/products/lotions" className="contents">
        <div className="relative bg-[url('/h1.jpg')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-5">
          <div className="absolute inset-0 bg-linear-to-l from-black/50 to-transparent"></div>
          <div className="relative flex items-center justify-center"> 
            <h2 className="font-semibold text-[30px] text-white">Hair Care</h2>
          </div>
        </div>
      </Link>

      <Link to="/products/foundation" className="contents">
        <div className="relative bg-[url('/m1.webp')] bg-no-repeat bg-cover bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-5">
          <div className="absolute inset-0 bg-linear-to-l from-black/50 to-transparent"></div>
          <div className="relative flex items-center justify-center"> 
            <h2 className="font-semibold text-[30px] text-white">Make Up</h2>
          </div>
        </div>
      </Link>

    </div>
  );
}

export default Category;
