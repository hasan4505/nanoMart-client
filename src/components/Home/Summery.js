import React from "react";

const Summery = ({ summery }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={summery.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{summery.number}</h2>
        <p>{summery.name}</p>
      </div>
    </div>
  );
};

export default Summery;
