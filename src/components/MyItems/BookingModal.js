import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const BookingModal = ({ buy, setBuy }) => {
  const { _id, name, minimum_order, available, price, number } = buy;
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const handleBooking = (event) => {
    event.preventDefault();
    const number = event.target.number.value;
    console.log(_id, name, number);

    const booking = {
      buyId: _id,
      buy: name,
      number,
      price,
      buyer: user.email,
      buyerName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Item is purchased`);
        } else {
          toast.error(`Already  purchased`);
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
            onSubmit={handleSubmit(handleBooking)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={name}
              class="input input-bordered w-full max-w-xs"
              {...register("name", { required: true, maxLength: 20 })}
            />

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true, maxLength: 20 })}
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
              {...register("price")}
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
