import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import FourOfour from "./Components/404/FourOfour";
import Allproducts from "./Components/Allproducts/Allproducts";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";

import Home from "./Components/FatherHome/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
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
          path="/updatestock"
          element={<UpdateStock></UpdateStock>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
