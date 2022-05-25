import "./App.css";
import NaVbar from "./components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Tools from "./components/Home/Tools";
import WriteReview from "./components/Home/WriteReview";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import AvailablePurchase from "./components/MyItems/AvailablePurchase";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <NaVbar></NaVbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/tools" element={<Tools></Tools>} />
        <Route path="/review" element={<WriteReview></WriteReview>} />
        <Route
          path="/purchase"
          element={<AvailablePurchase></AvailablePurchase>}
        />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="dashboard" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
