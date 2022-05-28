import React from "react";

const AllReviews = ({ review }) => {
  const { name, rating, review_, picture } = review;
  return (
    <div className="card lg:card-top bg-teal-200 rounded-full max-h-50 items-center text-center">
      <div class="avatar">
        <div class="w-24 mask mask-hexagon items-center text-center">
          <img src={picture} alt="" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Rating: {rating}out of 5</p>
        <p>Review: {review_}</p>
      </div>
    </div>
  );
};

export default AllReviews;
