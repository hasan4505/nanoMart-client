import React from "react";

const Blogs = () => {
  return (
    <div class="carousel w-full mt-20 bg-accent shadow-xl ">
      <div id="slide1" class="carousel-item relative w-full  grid">
        <h1 className="justify-center text-4xl p-3">
          How will you improve the performance of a React Application?
        </h1>
        <br />
        <p className="p-3">
          Ans: Analytics tracking libraries, excessive CSS animations,
          non-optimized images, iframes, and many more factors can contribute to
          poor performance.Also, some techniques to improve React code are 1.
          Using Immutable Data Structures, 2.Dependency optimization 3. Use
          React.Fragments to Avoid Additional HTML Element Wrappers 4. Avoid
          Inline Function Definition in the Render Function and etc.
        </p>

        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" class="btn btn-circle bg-inherit">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle bg-inherit">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full grid ">
        <h1 className="justify-center text-4xl p-3">
          What are the different ways to manage a state in a React application?
        </h1>
        <br />
        <p className=" p-3">
          Ans: There are several types of state to properly manage a React apps:{" "}
          <br /> 1.Communication State <br /> 2.Control State <br /> 3.Local
          state <br /> 4.Global state <br />
          5.Server state and <br /> 6.URL state.
        </p>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle bg-inherit">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle bg-inherit">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full grid ">
        <h1 className="justify-center text-4xl p-3">
          How does prototypical inheritance work?
        </h1>
        <br />
        <p className=" p-3">
          Ans: It is a method by which an object can inherit the properties and
          methods of another object. The prototype is responsible for storing
          and giving access to a common set of methods and properties shared
          among all instances of the class or constructor to which the prototype
          is configured By being an object, the prototype offers more
          flexibility than a class. Every object with its methods and properties
          contains an internal and hidden property known as [[Prototype]]. The
          Prototypal Inheritance is a feature in javascript used to add methods
          and properties in objects. It is a method by which an object can
          inherit the properties and methods of another object. Traditionally,
          in order to get and set the [[Prototype]] of an object, we use
          Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
          language, it is being set using __proto__.
        </p>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle bg-inherit">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle bg-inherit">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full grid ">
        <h1 className="justify-center text-4xl p-3">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts?
        </h1>
        <br />
        <p className=" p-3">
          Ans: One should never update the state directly because of the
          following reasons: <br /> 1.If you update it directly, calling the
          setState() afterward may just replace the update you made. <br />{" "}
          2.When you directly update the state, it does not change this.state
          immediately. Instead, it creates a pending state transition, and
          accessing it after calling this method will only return the present
          value. <br /> 3.You will lose control of the state across all
          components.
        </p>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle bg-inherit">
            ❮
          </a>
          <a href="#slide5" class="btn btn-circle bg-inherit">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" class="carousel-item relative w-full grid ">
        <h1 className="justify-center text-4xl p-3">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <br />
        <p className=" p-3">
          Ans: 1.Import useState and set state variables <br /> 2.Define a
          callback function and pass it down as a prop. <br /> 3.Set an
          “onChange” event handler on the input field. <br /> To see the
          characters logged just type them within the search bar by
          Console.log(e.target.value).
        </p>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle bg-inherit">
            ❮
          </a>
          <a href="#slide6" class="btn btn-circle bg-inherit">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" class="carousel-item relative w-full grid">
        <h1 className="justify-center text-4xl p-3">
          What is a unit test? Why should write unit tests?
        </h1>
        <br />
        <p className=" p-3">
          Ans: Unit Testing is a type of software testing where individual units
          or components of a software are tested.
          <br />
          It ensures that all code meets quality standards before it's deployed.
          The purpose is to validate that each unit of the software code
          performs as expected. This ensures a reliable engineering environment
          where quality is paramount. Over the course of the product development
          life cycle, unit testing saves time and money, and helps developers to
          write better code, more efficiently.
        </p>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" class="btn btn-circle bg-inherit">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle bg-inherit">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
