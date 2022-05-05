import { Route, Routes } from "react-router-dom";
import "./App.css";
import FourOfour from "./Components/404/FourOfour";
import Allproducts from "./Components/Allproducts/Allproducts";
import Home from "./Components/FatherHome/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Allproducts></Allproducts>}></Route>
        <Route path="*" element={<FourOfour></FourOfour>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
