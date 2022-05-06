import React from "react";
import { useForm } from "react-hook-form";
import "./Addproduct.css";
const Addproduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
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
          <h1 className="text-center mt-4 mb-5"> Add product here</h1>
        </div>
        <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Photo Url"
            className="mb-3 forminput"
            type="url"
            {...register("image", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Fruit Name"
            className="mb-3 forminput"
            {...register("fruitname", { required: true, maxLength: 20 })}
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

          <input className="mb-3 forminput addsubmit-button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
