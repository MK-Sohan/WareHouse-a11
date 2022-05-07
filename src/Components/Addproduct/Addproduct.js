import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "./Addproduct.css";
const Addproduct = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    const url = `https://fathomless-forest-20620.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className=" addproductmain-container">
      <div className="formcontainer ">
        <div className="tittle">
          <h1 className="text-center text-white mt-4 mb-5"> Add Product</h1>
        </div>
        <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Photo Url"
            className="mb-3 forminput"
            {...register("image")}
          />
          <input
            placeholder="Fruit Name"
            className="mb-3 forminput"
            {...register("fruitname", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Fruit Name"
            className="mb-3 forminput"
            value={user?.email}
            {...register("email")}
          />

          <input
            placeholder="Price"
            className="mb-3 forminput"
            type="number"
            {...register("price")}
          />
          <input
            placeholder="Qiantity"
            className="mb-3 forminput"
            type="number"
            {...register("quantity")}
          />
          <input
            placeholder="Supplire Name"
            className="mb-3 forminput"
            {...register("suppliername", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Description"
            className="mb-3 forminput"
            {...register("description", { required: true, maxLength: 20 })}
          />

          <input
            className="mb-3 forminput addsubmit-button"
            value="Add Item"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
