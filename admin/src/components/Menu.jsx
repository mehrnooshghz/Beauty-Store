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
  FaStethoscope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-screen bg-gray-100 p-5 w-[350px] shadow-lgs">
      <ul className="flex flex-col items-start justify-start mt-5 pl[20px]">
        <Link to="/">
          <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
            <FaHome className="mr-[15px] text-[#1f2ce2]" />
            Home
          </li>
        </Link>

        <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
          <FaUser className="mr-[15px] text-[#1f2ce2] " />
          Profile
        </li>

        <hr className="w-full my-5 border-gray-500" />

        <Link to="users">
          <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
            <FaUsers className="mr-[15px] text-[#1f2ce2] " />
            Users
          </li>
        </Link>

        <Link to="/products">
          <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
            <FaBox className="mr-[15px] text-[#1f2ce2] " />
            Products
          </li>
        </Link>

        <Link to="/orders">
          <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
            <FaClipboardList className="mr-[15px] text-[#1f2ce2] " />
            Orders
          </li>
        </Link>

        <hr className="w-full my-5 border-gray-500" />

        <Link to="/banners">
          <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
            <FaElementor className="mr-[15px] text-[#1f2ce2]" />
            Banners
          </li>
        </Link>
        <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
          <FaCog className="mr-[15px] text-[#1f2ce2] " />
          Settings
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
          <FaHdd className="mr-[15px] text-[#1f2ce2] " />
          Backups
        </li>

        <hr className="w-full my-5 border-gray-500" />

        <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
          <FaChartBar className="mr-[15px] text-[#1f2ce2]" />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
          <FaClipboard className="mr-[15px] text-[#1f2ce2] " />
          All Logs
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-5 transition-colors duration-100">
          <FaSignOutAlt className="mr-[15px] text-[#1f2ce2] " />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Menu;
