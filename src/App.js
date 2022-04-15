import "./App.css";
import Wireframe from "./compoment/page/Wireframe";
import { Routes, Route, Link } from "react-router-dom";
import Product from '../src/compoment/page/Product'
import CheckOut from "./compoment/page/CheckOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wireframe />} />
        <Route path="product" element={<Product/>} />
        <Route path="checkout" element={<CheckOut/>} />
      </Routes>
    </>
  );
}

export default App;
