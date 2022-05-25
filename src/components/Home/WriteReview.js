import React from "react";
import { useForm } from "react-hook-form";
import Rating from "./Rating";

const WriteReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <div className="card lg:max-w-lg bg-accent shadow-xl mx-auto items-center text-center shadow mt-10">
        <h2 className="fw-normal text-xl  text-center text-primary">
          Add Your Reviews
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label fs-5 text-center" htmlFor="name">
              Name
            </label>
            <input
              className="form-control fs-5 "
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fs-5" htmlFor="name">
              Review
            </label>
            <textarea
              className="form-control fs-5"
              type="text"
              placeholder="Review"
              {...register("review", { required: true, maxLength: 200 })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fs-5 text-center" htmlFor="name">
              Rating
            </label>
            <Rating></Rating>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Review" />
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
