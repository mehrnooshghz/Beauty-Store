import { useState } from "react";
import {showAverageRating} from "./Ratings"

const Product = ({product}) => {
      const [value, setValue] = useState(3); // (i added )
      console.log(product.title, product.ratings);

      const hasDiscount =
       product.discountedPrice && product.discountedPrice < product.originalPrice;

        return (
            <div className="flex flex-col items-center justify-center h-[500px] m-[30px] cursor-pointer">
            <img src={product.img} alt="" className="h-[400px] w-[300px] bg-cover" />
            <h2 className="font-semibold text-[18px] w-[300px]">
             {product.title}
            </h2>
            <div className="flex items-center gap-2">
                {hasDiscount ? (
                    <>
                    <span className="text-gray-600 text-[16px] font-semibold line-through">
                        ${product.discountedPrice}
                    </span>
                    </>
                ):(
                    <span className="text-[18px] font-semibold text-gray-800">
                        ${product.originalPrice}
                    </span>
                )}

            </div>
            <span className="flex items-center">
                {showAverageRating(product)}
            </span>
            </div>
        );
};


export default Product;



