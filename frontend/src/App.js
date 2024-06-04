import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Products from "./Components/Product/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import HomePage from "./Pages/HomePage/HomePage";
import CheckOut from './Components/CheckOut/CheckOut'

function App() {
  return (
    <>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Products /> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <CheckOut/>
      </div>
      <Footer/>
    </>
  );
}

export default App;