import React from "react";
import useTools from "../../hooks/useTools";
import AllTools from "./AllTools";

const Tools = () => {
  const [tools, setTools] = useTools();

  return (
    <div>
      <h1 className="flex justify-center w-full py-5 gap-2 text-5xl text-primary">
        All Available machinery tools:{tools.length}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 drop-shadow-[10px_50px_50px_rgba(20,210,200,0.1)]">
        {tools.map((tool) => (
          <AllTools key={tool._id} tool={tool}></AllTools>
        ))}
      </div>
    </div>
  );
};

export default Tools;
