import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../firebase/firebase.init";
import SocialLogin from "../Login/SocialLogin";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="card w-96 bg-accent shadow-2xl justify-center items-center">
        <div className="card-body"></div>
        <h2 className="text-center text-2xl font-bold text-primary">
          Please Sign Up
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3 ">
            <label className="label " htmlFor="name">
              Your Name
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="name"
            />
          </div>
          <div className="mb-3 ">
            <label className="label " htmlFor="email">
              Email
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="email"
              name="email"
            />
          </div>
          <div className="mb-3 ">
            <label className="label " htmlFor="password">
              Password
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              name="password"
            />
          </div>
          <div className="mb-3 ">
            <label className="label" htmlFor="Confirm password">
              Confirm Password
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              name="confirmPassword"
            />
          </div>
          <input
            className="btn btn-primary w-100 btn-lg fs-6"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p>
          <small>
            Already have an account?
            <Link className="text-primary" to="/login" onClick={navigateLogin}>
              Please login
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
