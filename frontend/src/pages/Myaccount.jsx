import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logOut,
} from "../redux/userRedux";
import { userRequest } from "../requestMethods";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaSignOutAlt,
  FaSave,
} from "react-icons/fa";
const Myaccount = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // --------------------------
  // Local state for form values
  // --------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  // set initial values once
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        address: currentUser.address || "",
      });
    }
  }, [currentUser]);
  // controlled inputs
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // --------------------------
  // UPDATE USER INFORMATION
  // --------------------------
  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await userRequest.put(
        `/users/${currentUser._id}`,
        formData
      );
      dispatch(updateUserSuccess(res.data));
      alert("Your information updated!");
    } catch (err) {
      dispatch(updateUserFailure());
      alert("Update failed");
    }
  };
  return (
    <div className="bg-linear-to-b from-blue-50 to-white py-10 px-4 flex justify-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-8">
        <h2 className="text-3xl font-bold mb-6">My Account</h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          {/* LEFT: INFO FORM */}
          <form onSubmit={handleUpdateInfo} className="space-y-5">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <input
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <button className="w-full bg-blue-600 text-white p-3 rounded">
              Save Changes
            </button>
          </form>
          {/* RIGHT: PASSWORD SECTION */}
        </div>
        <button
          onClick={() => dispatch(logOut())}
          className="w-full mt-6 bg-gray-200 p-3 rounded flex justify-center"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};
export default Myaccount;
