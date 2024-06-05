import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Products from "./Components/Product/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import HomePage from "./Pages/HomePage/HomePage";
import CheckOut from "./Components/CheckOut/CheckOut";
import { Routes, Route } from "react-router-dom";
import OrderDetails from "./Components/CheckOut/OrderDetails";
import orderList from "./Components/CheckOut/orderList";


function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Products />} />
        <Route path="/product/productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<orderList />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes> */}

      <div>
        <Products/>
      {/* <ProductDetails /> */}
        <Footer />

      </div>
      
    </>
  );
}

export default App;
