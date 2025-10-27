import { LineChart } from "@mui/x-charts/LineChart";
const Home = () => {
  return (
    <div className="flex justify-between h-screen p-2 bg-gray-200 w-[78vw]">

      {/* Left */}
      <div className="flex flex-col w-2/3">
      <div className="flex w-[50vw] ">

        <div className="bg-white h-52 w-80 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center ">
          <div className="h-32 w-32 m-5 border-10 border-blue-400 border-solid rounded-full flex items-center justify-center ">
            <h2 className="font-bold text-2xl">699</h2>
          </div>
          <h2 className="font-semi-bold text-xl">Products</h2>
          
        </div>
       

        <div className="bg-white h-52 w-80 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center ">
          <div className="h-32 w-32 m-5 border-10 border-red-400 border-solid rounded-full flex items-center justify-center ">
            <h2 className="font-bold text-2xl">100</h2>
          </div>
          <h2 className="font-semi-bold text-xl">Orders</h2>
          
        </div>
     
        
       
        <div className="bg-white h-52 w-80 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center ">
          <div className="h-32 w-32 m-5 border-10 border-gray-400 border-solid rounded-full flex items-center justify-center ">
            <h2 className="font-bold text-2xl">200</h2>
          </div>
          <h2 className="font-semi-bold text-xl">Users</h2>
          
        </div>
      
        
      
      </div>


      {/* Table*/}
      <div className="bg-white m-5 p-5 rounded-lg">
        <div className="p-6 bg-white rounded-md">
          <h3 className="text-lg  font-bold mb-4">Lastest Transaction</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
               <th className="py-2 px-4">Maria Gh</th>
               <th className="py-2 px-4">$ 200</th>
               <th className="py-2 px-4 text-green-500">Approved</th>
              </tr>

               <tr className="border-b">
               <th className="py-2 px-4">Maria Gh</th>
               <th className="py-2 px-4">$ 200</th>
               <th className="py-2 px-4 text-red-500">Decline</th>
              </tr>

               <tr className="border-b">
               <th className="py-2 px-4">Maria Gh</th>
               <th className="py-2 px-4">$ 200</th>
               <th className="py-2 px-4 text-green-500">Approved</th>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

        
      </div>

       {/* Right*/}
       <div className="flex flex-col w-1/3 bg-white p-4 shadow-xl rounded-lg">
       <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
        <h2 className="font-bold text-2xl">Total Revenue: $200,000</h2>
       </div>

       <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
        <h2 className="font-bold text-2xl">Total Losses: $0</h2>
       </div>

       <LineChart
           xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
           series={[
          {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
          height={350}
          margin={{ left: 30, right: 30, top: 30, bottom: 30}}
          grid={{ vertical: true, horizontal: true}}
        />
 
       </div>

    </div>
  )
}

export default Home