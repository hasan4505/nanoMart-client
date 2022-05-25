import React from "react";
import global from "../../assets/images/global.png";
import businessman from "../../assets/images/businessman.png";
import project from "../../assets/images/project.png";
import like from "../../assets/images/like.png";
import Summery from "./Summery";

const Summaries = () => {
  const summaries = [
    {
      _id: 1,
      name: "Countries",
      number: 65,
      img: global,
    },
    {
      _id: 2,
      name: "Projects",
      number: 255,
      img: project,
    },
    {
      _id: 3,
      name: "Happy Customer",
      number: 754,
      img: businessman,
    },
    {
      _id: 3,
      name: "Feedback",
      number: 1201,
      img: like,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Quality Focuses
        </h3>
        <h2 className="text-4xl py-3">Awesome Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 drop-shadow-2xl">
        {summaries.map((summery) => (
          <Summery key={summery._id} summery={summery}></Summery>
        ))}
      </div>
    </div>
  );
};

export default Summaries;
