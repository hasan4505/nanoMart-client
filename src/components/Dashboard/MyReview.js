import React from "react";
import { Link } from "react-router-dom";

const MyReview = () => {
  return (
    <div>
      <h2>My Review</h2>
      <div className="card-actions justify-start">
        <Link to="/review" className="btn btn-primary">
          Write a review
        </Link>
      </div>
    </div>
  );
};

export default MyReview;
