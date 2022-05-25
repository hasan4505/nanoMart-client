import React from "react";
import useReviews from "../../hooks/useReviews";
import AllReviews from "./AllReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          TESTIMONIAL
        </h3>
        <h2 className="text-4xl text-accent py-2">Meet Clients Satisfaction</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 drop-shadow-2xl">
        {reviews.map((review) => (
          <AllReviews key={review.id} review={review}></AllReviews>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
