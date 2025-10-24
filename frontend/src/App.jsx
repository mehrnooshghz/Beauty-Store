import Home from "./pages/Home";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Order from "./pages/Order";


function App() {

   const Layout = () => {
    return (
        <div>
          <Announcement />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
       {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
         {
          path: "/login",
          element: <Login />,
        },  
         {
          path: "/myaccount",
          element: <Myaccount />
        },
         {
          path:"/product/:productId",
          element: <Product />
        },
         {
          path: "/create-account",
          element: <Register />,
        },
         {
          path: "/products/:searchterm",
          element: <ProductList />,
        },
         {
          path: "/myorders",
          element: <Order />
        }

    ],
   },
 ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
