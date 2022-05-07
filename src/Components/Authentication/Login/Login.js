import React, { useEffect, useRef } from "react";
import "./Login.css";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import googleicon from "../../../images/google.png";
import Loading from "../../Loading/Loading";
import useJwtToken from "../../Usejwttoken/Usejwttoken";

const Login = () => {
  const [user1, loading1, error1] = useAuthState(auth);
  // console.log(user1.email);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const emailref = useRef("");
  const passwordref = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [token] = useJwtToken(user1);
  if (token) {
    navigate(from, { replace: true });
  }
  if (user1) {
    navigate(from, { replace: true });
  }

  const handleloginForm = async (e) => {
    const email = emailref.current.value;
    const password = passwordref.current.value;

    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  let errorelement;
  if (error) {
    errorelement = (
      <div>
        <p className="text-danger text-center mt-4">Error: {error?.message}</p>
      </div>
    );
  }
  const resetpassword = async () => {
    const email = emailref.current.value;
    await sendPasswordResetEmail(email);
    if (!email) {
      toast("Enter an Email first");
    } else {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
  };

  const handlesigninwithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
    if (user1) {
      navigate(from, { replace: true });
    }
  };
  if (loading || sending || googleloading) {
    return <Loading></Loading>;
  }

  return (
    <div className="loginfull-container">
      <div className="main-container">
        <form onSubmit={handleloginForm}>
          <div className="login-container">
            <div className="login-tittle ">
              <h1 className="text-center text-white ">Sign in</h1> <br />
              <p className="text-center text-white">
                New to Fruittish?
                <Link to="/register"> Create an Account</Link>{" "}
              </p>
            </div>
            <div className="login-inputs">
              <input
                ref={emailref}
                type="email"
                name="email"
                id="loginemail"
                required
                placeholder="Enter Your Email"
              />{" "}
              <br />
              <input
                ref={passwordref}
                required
                type="password"
                name="password"
                id="loginpass"
                placeholder="Enter Your Password"
              />{" "}
              <br />
              {errorelement}
              <button className="signin-button">Sign in</button>
              <Link to="/login" onClick={resetpassword}>
                <p className="text-center mt-5">Forget Password?</p>
              </Link>
              <div className="design">
                <div className="d-flex  align-items-center">
                  <div
                    style={{ height: "1px", width: "290px" }}
                    className="bg-primary "
                  >
                    {" "}
                  </div>
                  <p className="mt-2 px-2 text-white">or</p>
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
          <img src={googleicon} alt="" />
          Sign in With google
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
