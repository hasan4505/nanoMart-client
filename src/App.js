import "./App.css";
import NaVbar from "./components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Tools from "./components/Home/Tools";
import MyPurchase from "./components/Dashboard/MyPurchase";
import MyReview from "./components/Dashboard/MyReview";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/Login/SignUp";
import AvailablePurchase from "./components/MyItems/AvailablePurchase";
import MyPortfolio from "./components/Home/MyPortfolio";
import Blogs from "./components/Shared/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <NaVbar></NaVbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/tools" element={<Tools></Tools>} />

        <Route
          path="/purchase"
          element={<AvailablePurchase></AvailablePurchase>}
        />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyPurchase />}></Route>
          <Route path="my-review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="my-portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
