import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

import google from "../../../images/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";

const Register = () => {
  const nameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const [signinwithgoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  useEffect(() => {
    if (user || googleuser) {
      navigate("/");
      errorelement = "";
    }
  }, [user, googleuser]);

  let errorelement;
  if (error) {
    errorelement = (
      <div>
        <p className="text-danger text-center mt-4">Error: {error?.message}</p>
      </div>
    );
  }

  const handleFormsubmit = (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;
    console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
    toast("email send");
  };

  const handlesigninwithGoogle = (e) => {
    e.preventDefault();
    signinwithgoogle();
  };
  if (loading || googleloading) {
    return <Loading></Loading>;
  }

  return (
    <div className="registerfull-container">
      <div className="main-container">
        <form onSubmit={handleFormsubmit}>
          <div className="login-container">
            <div className="login-tittle ">
              <h1 className="text-center text-white ">Register</h1> <br />
            </div>
            <div className="login-inputs">
              <input
                required
                ref={nameref}
                type="name"
                name="name"
                id=""
                placeholder="Enter Your Name"
              />{" "}
              <br />
              <input
                ref={emailref}
                type="email"
                name="email"
                required
                id="regemail"
                placeholder="Enter Your Email"
              />{" "}
              <br />
              <input
                ref={passwordref}
                type="password"
                name="password"
                required
                id="regpass"
                placeholder="Enter Your Password"
              />{" "}
              <br />
              {errorelement}
              <p className=" text-white text-center mt-4">
                Already Have an Account? <Link to="/login"> Log in</Link>
              </p>
              <button className="register-button">Register</button>
              <div className="design">
                <div className="d-flex  align-items-center">
                  <div
                    style={{ height: "1px", width: "290px" }}
                    className="bg-primary "
                  >
                    {" "}
                  </div>
                  <p className="mt-2 px-2">or</p>
                  <div
                    style={{ height: "1px", width: "290px" }}
                    className="bg-primary "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={handlesigninwithGoogle}
          className="signinwithgoogle-button"
        >
          <img src={google} alt="" />
          Sign in With google
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
