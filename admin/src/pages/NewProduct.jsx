import { FaPlus, FaTrash, FaSearch } from "react-icons/fa";
import axios from "axios";
import { userRequest } from "../requestMethods";
import { useState, useRef, useEffect } from "react";

const NewProduct = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [inputs, setInputs] = useState({});
  const [uploading, setUploading] = useState("Ready to upload");
  const [selectedOptions, setSelectedOptions] = useState({
    concern: [],
    skintype: [],
    categories: [],
  });
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImages(e.target.files[0]);
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: [...prev[name], value],
    }));
  };

  const handleRemoveOption = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name].filter((option) => option !== value),
    }));
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", selectedImages);
    data.append("upload_preset", "uploads");

    setUploading("uploading ...")
    try {
      const uploadRes = await axios.post( "https://api.cloudinary.com/v1_1/dgb1i9ti4/image/upload",data)
      const {url} = uploadRes.data;
      setUploading("Uploaded 100%")
      await userRequest.post("/products", {img: url, ...inputs, ...selectedOptions})
    } catch (error) {
      console.log(error);
      setUploading("Uploading failed")
      
    }
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-2xl font-semibold">New Product</h1>
      </div>

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form className="flex flex-col md:flex-row rounded-lg">
          {/* Left */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="font-semibold">Product Image:</label>
              
              {!selectedImages ? (
                <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md">
                <div className="flex items-center justify-center mt-10">
                  <label htmlFor="file" className="cursor-pointer">
                    <FaPlus className="text-[20px]" />
                  </label>
                </div>
              </div>
              ): 
              (
                <img src={URL.createObjectURL(selectedImages)} alt="" className="h-[100px] w-[100px] object-cover rounded-md border"  />
              )
              
              }
              <input type="file" id="file" onChange={imageChange} style={{display: "none"}} />
            </div>

            <span className="text-green-500">{uploading}</span>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                name="title"
                id=""
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Description
              </label>
              <textarea
                type="text"
                cols={15}
                rows={7}
                name="desc"
                id=""
                placeholder="Product Description"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                id=""
                placeholder="$100"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="number"
                name="discountedPrice"
                id=""
                placeholder="$80"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Right*/}
          <div className="ml-5 flex-1 space-y-5">
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Price
              </label>
              <input
                type="number"
                name="wholesalePrice"
                id=""
                placeholder="$70"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Minimum Quantity
              </label>
              <input
                type="number"
                name="wholesaleMinimumQuantity"
                id=""
                placeholder="10"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id=""
                placeholder="Kylie"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Concern
              </label>
              <select
                name="concern"
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectChange}
              >
                <option disabled defaultValue={true}>
                  Select Concern
                </option>
                <option>Dry Skin</option>
                <option>Pigmentation</option>
                <option>Oil Control</option>
                <option>Anti Acne</option>
                <option>Sunburn</option>
                <option>Skin Brightening</option>
                <option>Tan Removal</option>
                <option>Night Routine</option>
                <option>UV Protection</option>
                <option>Damaged Hair</option>
                <option>Frizzy Hair</option>
                <option>Stretch Marks</option>
                <option>Color Protection</option>
                <option>Dry Hair</option>
                <option>Soothing</option>
                <option>Dandruff</option>
                <option>Greying</option>
                <option>Hairfall</option>
                <option>Hair Color</option>
                <option>Well Being</option>
                <option>Acne</option>
                <option>Hair Growth</option>
                <option>Anti Aging</option>
                <option>Wrinkles</option>
                <option>Fine Lines</option>
                <option>Dark Spots</option>
                <option>Hyperpigmentation</option>
                <option>Redness</option>
                <option>Irritation</option>
                <option>Sensitivity</option>
                <option>Rosacea</option>
                <option>Eczema</option>
                <option>Psoriasis</option>
                <option>Dark Circles</option>
                <option>Puffy Eyes</option>
                <option>Large Pores</option>
                <option>Blackheads</option>
                <option>Whiteheads</option>
                <option>Clogged Pores</option>
                <option>Uneven Skin Tone</option>
                <option>Dull Skin</option>
              </select>
            </div>

            <div className="mb-2">
              {selectedOptions.concern.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash className="cursor-pointer text-red-500" 
                  onClick={() => handleRemoveOption("concern", option)} />

                </div>
              ))}

            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Skin Type
              </label>
              <select
                name="skintype"
                id=""
                onChange={handleSelectChange}
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Skin Type
                </option>
                <option>All</option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
                <option>Combination</option>
                <option>Acne-Prone</option>
                <option>Mature</option>
                <option>Dehydrated</option>
              </select>
            </div>
             <div className="mb-2">
              {selectedOptions.skintype.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash className="cursor-pointer text-red-500" 
                  onClick={() => handleRemoveOption("skintype", option)} />

                </div>
              ))}

            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Category
              </label>
              <select
                name="categories"
                id=""
                onChange={handleSelectChange}
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Category
                </option>
                <option>Skincare</option>
                <option>Makeup</option>
                <option>Hair Care</option>
                <option>Fragrance</option>
                <option>Bath & Body</option>
                <option>Tools & Accessories</option>
                <option>Men's Care</option>
                <option>Sun Care</option>
                <option>Oral Care</option>
                <option>Wellness & Supplements</option>
                <option>Toners</option>
                <option>Serums</option>
                <option>Foundations</option>
                <option>Lotions</option>
                <option>Cleansers</option>
                <option>Moisturizers</option>
                <option>Face Masks</option>
                <option>Eye Creams</option>
                <option>Lip Care</option>
                <option>Face Oils</option>
                <option>Exfoliators & Scrubs</option>
                <option>Sunscreen</option>
                <option>BB & CC Creams</option>
                <option>Concealers</option>
                <option>Powders</option>
              </select>
            </div>
             <div className="mb-2">
              {selectedOptions.categories.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash className="cursor-pointer text-red-500" 
                  onClick={() => handleRemoveOption("categories", option)} />

                </div>
              ))}

            </div>

            <button className="bg-slate-500 text-white py-2 px-4 rounded cursor-pointer" onClick={handleUpload}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
