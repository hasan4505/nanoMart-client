import React from "react";

const Tool = ({ tool, setBuy }) => {
  const { name, img, minimum_order, available, price } = tool;
  return (
    <div class="card lg:max-w-lg bg-accent shadow-xl">
      <div>
        <figure>
          <img src={img} alt="Album" />
        </figure>
      </div>
      <div class="card-body text-start">
        <h2 class="text-xl font-bold text-secondary">{name}</h2>
        <h2 class="text-xl font-bold text-secondary">
          Available: {available} pcs
        </h2>
        <h2 class="text-xl font-bold text-secondary">
          Minimum Order: {minimum_order} pcs
        </h2>
        <h2 class="text-xl font-bold text-secondary">Price: $ {price} /pc</h2>

        <div class="card-actions justify-center">
          <label
            for="booking-modal"
            disabled={tool.length === 0}
            onClick={() => setBuy(tool)}
            class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            Buy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tool;
