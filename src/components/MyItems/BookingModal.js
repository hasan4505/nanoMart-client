import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.init";

const BookingModal = ({ buy, setBuy }) => {
  const { _id, name, tools, minimum_order, available, price, number } = buy;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();
    const tools = event.target.tools.value;
    console.log(_id, name, tools);

    const booking = {
      buyId: _id,
      buy: name,
      number,
      price,
      buyer: user.email,
      buyerName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("https://secret-dusk-46242.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Item is purchased, ${name} at ${price}`);
        } else {
          toast.error(
            `Already  purchased ${data.booking?.name} at ${data.booking?.tool}`
          );
        }
        setBuy(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Buying item: </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={name}
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <h2>Available quantity: {available}</h2>
            <h2>Price: $ {price} /pc</h2>
            <input
              type="number"
              name={number}
              placeholder="order quantity"
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
