import Login from "../pages/Login.js";
import Signup from "../pages/Signup.js";
import Home from "../pages/Home.js";
import ProductDetail from "../pages/ProductDetail.js";
import ShoppingCart from "../pages/ShoppingCart.js";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/productDetail", component: ProductDetail },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },
  { path: "/shoppingCart", component: ShoppingCart, layout: null },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
