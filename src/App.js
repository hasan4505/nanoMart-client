import "./App.css";
import NaVbar from "./components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Tools from "./components/Home/Tools";
import MyPurchase from "./components/Dashboard/MyPurchase";
import MyReview from "./components/Dashboard/MyReview";
import WriteReview from "./components/Home/WriteReview";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/Login/SignUp";
import AvailablePurchase from "./components/MyItems/AvailablePurchase";
import MyPortfolio from "./components/Home/MyPortfolio";
import RequireAdmin from "./components/Login/RequireAdmin";
import Users from "./components/Dashboard/Users";
import Payment from "./components/Dashboard/Payment";
import AddAdmin from "./components/Dashboard/AddAdmin";
import Blogs from "./components/Shared/Blogs";

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-base-200">
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
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyPurchase />}></Route>
          <Route path="my-review" element={<MyReview></MyReview>}></Route>

          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addAdmin"
            element={
              <RequireAdmin>
                <AddAdmin></AddAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="my-portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
