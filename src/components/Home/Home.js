import React from "react";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import useTools from "../../hooks/useTools";
import AllTools from "./AllTools";
import Summaries from "./Summaries";
import Reviews from "../Swiper/Reviews";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Mission from "./Mission ";
import Request from "./Request";

const Home = () => {
  const [tools, setTools] = useTools();
  const Navigate = useNavigate();

  return (
    <div>
      <Banner></Banner>
      <h1 className="flex justify-center w-full py-5 gap-2 text-3xl text-primary">
        Our Available tools:{tools.length}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        {tools.slice(0, 3).map((tool) => (
          <AllTools key={tool._id} tool={tool}></AllTools>
        ))}
      </div>
      <button
        onClick={() => Navigate("/tools")}
        className="bg-amber-600 text-black py-2 px-5 rounded-md my-5 font-semibold flex items-center gap-3 hover:bg-amber-500 duration-200 ease-in"
      >
        <p>See All</p>
      </button>
      <Summaries></Summaries>
      <h2 className="text-4xl text-accent py-2">Meet Clients Satisfaction</h2>
      <Reviews></Reviews>
      <div className="card-actions justify-start">
        <Link to="/review" className="btn btn-primary">
          Leave a review
        </Link>
      </div>
      <Mission></Mission>
      <Request></Request>

      <Footer></Footer>
    </div>
  );
};

export default Home;
