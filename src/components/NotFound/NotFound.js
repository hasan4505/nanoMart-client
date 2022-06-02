import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/notFound.png";

const NotFound = () => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl mt-10">
      <figure>
        <img src={notFound} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">404!</h2>
        <p>Oops! This Page Could Not Be Found.</p>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable
        </p>
        <div class="card-actions justify-end">
          <Link className="btn bg-accent text-primary hover:bg-red-700" to="/">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
