import React from "react";
import mission from "../../assets/images/mission.jpg";

const Mission = () => {
  return (
    <div>
      <section
        style={{
          background: `url(${mission})`,
        }}
        className="flex justify-center items-center min-h-screen mt-5"
      >
        <div className="flex-1 p-20">
          <h3 className="text-5xl text-primary font-bold">OUR MISSION</h3>

          <p className="text-white">
            With our large scope of hot tapping and plugging solutions for both
            pipelines and pressurized systems, we keep a safety-oriented
            approach first and foremost and ensure quality, timeliness, and
            precision throughout all services and projects. We offer our
            services to a wealth of industries and sectors, from private
            contracts to governmental work, and strive to provide constant
            assistance and support to fulfill any requests for all clients. We
            are pleased to offer free quotations and are confident in our
            competitive pricing and range of products. With safe, quick, and
            efficient service we are your hot tapping solution to save time and
            money.
          </p>
          <button className="bg-accent text-black py-2 px-5 rounded-md my-5 font-semibold flex items-center gap-3 hover:bg-red-500 duration-200 ease-in">
            Read More...
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mission;
