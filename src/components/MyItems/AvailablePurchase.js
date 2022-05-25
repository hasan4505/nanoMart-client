import React, { useEffect, useState } from "react";
import useTools from "../../hooks/useTools";
import BookingModal from "./BookingModal";
import Tool from "./Tool";

const AvailablePurchase = () => {
  const [tools, setTools] = useTools();
  const [buy, setBuy] = useState(null);

  return (
    <div className="my-10">
      <h4 className="text-2xl text-secondary text-center my-5">Want to buy</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool} setBuy={setBuy}></Tool>
        ))}
      </div>
      {buy && <BookingModal buy={buy} setBuy={setBuy}></BookingModal>}
    </div>
  );
};

export default AvailablePurchase;
