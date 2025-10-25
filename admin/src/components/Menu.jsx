import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
  FaDollarSign,
  FaGift,
  FaPlus,
  FaBoxOpen,
  FaSearch,
  FaStethoscope
} from 'react-icons/fa';
const Menu = () => {
  return (
    <div className='h-screen bg-gray-100 p-5 w-[350px] shadow-lgs'>
      <ul className='flex flex-col items-start justify-start mt-5 pl[20px]'>
        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaHome className='mr-[15px] text-[#ef93db] '/>
          Home
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaUser className='mr-[15px] text-[#ef93db] '/>
          Profile
        </li>

        <hr className='w-full my-5 border-gray-500'/>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaUsers className='mr-[15px] text-[#ef93db] '/>
          Users
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaBox className='mr-[15px] text-[#ef93db] '/>
          Products
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaClipboardList className='mr-[15px] text-[#ef93db] '/>
          Orders
        </li>

        <hr className='w-full my-5 border-gray-500'/>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaElementor className='mr-[15px] text-[#ef93db] '/>
          Banners
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaCog className='mr-[15px] text-[#ef93db] '/>
          Settings
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaHdd className='mr-[15px] text-[#ef93db] '/>
          Backups
        </li>

        <hr className='w-full my-5 border-gray-500'/>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaChartBar className='mr-[15px] text-[#ef93db] '/>
          Charts
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaClipboard className='mr-[15px] text-[#ef93db] '/>
          All Logs
        </li>

        <li className='flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100'>
          <FaSignOutAlt className='mr-[15px] text-[#ef93db] '/>
          Logout
        </li>



      </ul>


    </div>
  )
}

export default Menu