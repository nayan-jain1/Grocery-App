import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Cart from "./Cart"

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/items/:type" element={<Items />} />
      
      </Routes>
  );
}

export default App;
