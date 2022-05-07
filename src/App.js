import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import FourOfour from "./Components/404/FourOfour";
import Addproduct from "./Components/Addproduct/Addproduct";
import Allproducts from "./Components/Allproducts/Allproducts";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Blogs from "./Components/Blogs/Blogs";

import Home from "./Components/FatherHome/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MyItems from "./Components/Myitems/MyItems";
import Requireauth from "./Components/Requireauth/Requireauth";
import UpdateStock from "./Components/UpdateStock/UpdateStock";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <Requireauth>
              <Allproducts></Allproducts>
            </Requireauth>
          }
        ></Route>
        <Route path="*" element={<FourOfour></FourOfour>}></Route>
        <Route
          path="/updatestock/:productid"
          element={
            <Requireauth>
              <UpdateStock></UpdateStock>
            </Requireauth>
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            <Requireauth>
              <Addproduct></Addproduct>
            </Requireauth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myitem" element={<MyItems></MyItems>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
