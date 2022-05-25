import React from "react";
import google from "../../assets/images/google.png";
import github from "../../assets/images/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}}</p>;
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-full max-w-xs text-white bg-teal-600 hover:bg-red-700"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>

        <button className="btn w-full max-w-xs text-white bg-teal-600 hover:bg-red-700 mt-4">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
