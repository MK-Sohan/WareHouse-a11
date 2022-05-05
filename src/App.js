import { Route, Routes } from "react-router-dom";
import "./App.css";
import Allproducts from "./Components/Allproducts/Allproducts";
import Home from "./Components/FatherHome/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Allproducts></Allproducts>}></Route>
      </Routes>
    </div>
  );
}

export default App;
