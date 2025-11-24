import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";
const Order = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [rating, setRating] = useState({});
  const [comment, setComment] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await userRequest.get(
          `/orders/find/${user.currentUser._id}`
        );

        const ordersWithProducts = await Promise.all(
          res.data.map(async (order) => {
            const detailedProducts = await Promise.all(
              order.products.map(async (p) => {
                // اگر محصول کامل است (title و img دارد)
                if (p.title && p.img) {
                  return {
                    ...p,
                    price: p.price || p.discountedPrice || p.originalPrice || 0,
                  };
                }

                // اگر فقط productId دارد باید از API بگیریم
                const productRes = await userRequest.get(
                  `/products/find/${p.productId}`
                );
                const productData = productRes.data;

                return {
                  ...productData,
                  quantity: p.quantity,
                  price:
                    productData.price ||
                    productData.discountedPrice ||
                    productData.originalPrice ||
                    0,
                };
              })
            );

            return { ...order, products: detailedProducts };
          })
        );

        setOrders(ordersWithProducts);
      } catch (error) {
        console.log(error);
      }
    };

    getUserOrder();
  }, [user]);

  const handleRating = async (id) => {
    const singleRating = {
      star: parseFloat(rating[id] || 0), // حتما عدد باشه
      name: user.currentUser.name,
      postedBy: user.currentUser.name,
      comment: comment[id] || "", // حتما رشته باشه
    };

    try {
      // ارسال به سرور
      await userRequest.put(`/products/rating/${id}`, singleRating);

      // آپدیت محلی برای نمایش فوری
      setOrders((prev) =>
        prev.map((order) => ({
          ...order,
          products: order.products.map((p) =>
            p._id === id
              ? { ...p, ratings: [...(p.ratings || []), singleRating] }
              : p
          ),
        }))
      );

      // پاک کردن فیلدهای مربوط به این محصول
      setComment({ ...comment, [id]: "" });
      setRating({ ...rating, [id]: 0 });

      alert("Thank you for your review!");
    } catch (error) {
      console.log(error);
      alert("Error submitting review. Please try again.");
    }
  };

  useEffect(() => {
    // Clear cart after orders are fetched or payment is successful
    if (orders.length > 0) {
      dispatch(clearCart());
    }
  }, [orders, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8 ">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You For Your Orders!</h1>
          <p className="text-gray-600 mt-2">
            Here are the details of your recent Orders.
          </p>
        </div>

        {orders.map((order, index) => (
          <div className="mb-8 " key={index}>
            <h2 className="text-2xl font-semibold mb-4">Order #{order._id}</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Items Orderd</h3>
                <div className="flex flex-col">
                  {order.products.map((product, index) => (
                    <div className="mb-7" key={index}>
                      <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                        <img
                          src={product.img}
                          alt=""
                          className="w-[120px] h-[120px] rounded-md object-cover"
                        />
                        <div className="flex-1 ml-4">
                          <h4 className="text-lg font-semibold">
                            {product.title}
                          </h4>
                          <p className="text-gray-600">{product.quantity}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold">${product.price}</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="my-3">Rate This Product</h3>
                        <Rating
                          name={`rating-${product._id}`}
                          value={rating[product._id] || 0} // each product has its own value
                          precision={0.01}
                          onChange={(event, newValue) =>
                            setRating({ ...rating, [product._id]: newValue })
                          }
                          sx={{
                            "& .MuiRating-iconFilled": { color: "#FFD700" }, // طلایی
                            "& .MuiRating-iconHover": { color: "#FFC107" }, // طلایی روشن‌تر هنگام هاور
                          }}
                        />

                        <textarea
                          placeholder="Leave a message"
                          value={comment[product._id] || ""}
                          onChange={(e) =>
                            setComment({
                              ...comment,
                              [product._id]: e.target.value,
                            })
                          }
                          className="w-[300px] mt-3 bg-white p-4 rounded-lg shadow-md border border-gray-200"
                        ></textarea>
                        <button
                          className="bg-[#1f2ce2] mt-3 w-[200px] p-[5px] text-white cursor-pointer"
                          onClick={() => handleRating(product._id)}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
          <p className="text-gray-600">mehrnooshghz00@gmail.com</p>
          <p className="text-gray-600">+(1) 1304532</p>
          <p className="text-gray-600">Mehrnoosh Ghz</p>
        </div>

        <div className="bg-gray-50 rounded-lg my-2">
          <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
          <p className="text-gray-600">VISA</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Order Summery</h3>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="text-lg font-semibold">$72</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Shipping:</span>
            <span className="text-lg font-semibold">$10</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-semibold">$730</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-[#1f2ce2] text-white p-3 rounded-lg font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
