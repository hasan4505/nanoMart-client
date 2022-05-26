import React from "react";
import me from "../../assets/images/me.jpg";

const MyPortfolio = () => {
  return (
    <div class="card flex justify-center w-full py-5 gap-2 text-2xl text-primary shadow-xl">
      <figure class="px-10 pt-10">
        <img src={me} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class=" items-center text-center">
        <h5>Hello</h5>
        <p>This is Hassan</p>
        <p>
          Wanna know about me... <br />
          Please contact me: mijuahmed5@gmail.com
        </p>
        <p>I have completed my MSc in chemistry from RU</p>
        <p>
          Skills:{" "}
          <span>
            HTML5, CSS3, Bootstrap,Tailwind, JS, React, node, mongodb,
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
