import {LineChart} from '@mui/x-charts/LineChart';
import {FaUpload} from 'react-icons/fa';
const Product = () => {
  return (
    <div className="p-5 w-[70vw]">
      {/* First Part */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl font-semibold">Product</h3>
        <button className="bg-slate-500 text-white py-2 px-4 rounded">create</button>
      </div>
      {/* Second Part */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* Chart */}
        <div className="flex-1">
          <LineChart
            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={250}
            width={500}
            margin={{left: 30, right: 30, top: 30, bottom: 30}}
            grid={{vertical: true, horizontal: true}}
          />
        </div>

        {/* PRODUCT CARD */}

        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <div className="flex items-center mb-5">
                <img
              src="/serum1.jpg"
              alt=""
              className="h-20 w-20 rounded-full mr-5"
            />
            <span className="text-2xl font-semibold">
              Hydrating Facial Cleanser
            </span>
          </div>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span className="font-semibold">ID:</span>
              <span>34456767</span>

            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Sales:</span>
              <span>780</span>

            </div>
            <div className="flex justify-between">
              <span className="font-semibold">In stock:</span>
              <span>Yes</span>

            </div>

          </div>
          </div>
           </div>

           {/* THIRD PART */}

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form action="" className="flex flex-col md:flex-row gap-5">
          {/* LEFT */}
          <div className="flex-1 space-y-5">
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Description
              </label>
              <input
                type="text"
                name="desc"
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
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="text"
                name="discountedPrice"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                InStock
              </label>
              <select
                name=""
                id=""
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
              <img
                src="/serum1.jpg"
                alt=""
                className="h-40 w-40 rounded-full mr-5"
              />

              <label htmlFor="" className="cursor-pointer mt-5">

                <FaUpload className="text-2xl text-gray-700" />
              </label>

              <button className='bg-slate-500 text-white py-2 px-4 rounded mt-5' >Update</button>

            </div>
          </div>

        </form>

      </div>

    </div>
  );
};

export default Product