import axios from "axios";
import React, { useEffect, useState } from "react";
const useJwtToken = (user) => {
  // console.log(user,'555');
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      // console.log({ email });
      if (email) {
        const { data } = await axios.post(
          "https://fathomless-forest-20620.herokuapp.com/login",
          {
            email,
          }
        );
        // const { data } = await axios.post('http://localhost:4000/signin', { email })
        // console.log(data.getToken);
        setToken(data.accesstoken);
        localStorage.setItem("token", data.accesstoken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useJwtToken;
