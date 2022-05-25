import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AllTools = ({ tool }) => {
  const { name, description, minimum_order, available, price } = tool;
  const Navigate = useNavigate();

  return (
    <div className="card lg:card-top bg-base-100 shadow-xl">
      <div>
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Description: {description}</p>
        <p>Minimum Order: {minimum_order} pcs</p>
        <p>Available: {available} pcs</p>
        <p>Price: ${price}/per unit</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => Navigate("/purchase")}
            className="bg-amber-600 text-black py-2 px-5 rounded-md my-5 font-semibold flex items-center gap-3 hover:bg-amber-500 duration-200 ease-in"
          >
            <p>Buy</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTools;
