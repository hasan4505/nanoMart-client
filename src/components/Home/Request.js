import React from "react";

const Request = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-accent my-20">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">REQUEST AN ESTIMATE</h1>
            <p class="py-6">
              Because of our large range of services and equipment, as well as
              variables in pipeline parameters and specifications, we highly
              encourage interested customers to take advantage of our
              complimentary consultations and quotations. This allows our
              engineers to fully familiarize themselves with the site, system,
              and needed scope of services – additionally, it allows us to
              become better acquainted with you, the customer!
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Name:"
                  class="input input-bordered"
                  required
                />
              </div>

              <div class="form-control">
                <input
                  type="text"
                  placeholder="Email:"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <input
                  type="number"
                  placeholder="Phone Number:"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary hover:bg-amber-500">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
