import React from "react";
// import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";
import ShoppingCartPage from "./components/ShoppingCartPage.js";
import LoginPage from "./components/LoginPage";
import PaymentsPage from "./components/PaymentsPage";
import SearchPage from "./components/SearchPage";
import AddItemsPage from './components/AddItemsPage';
import CreateBillPage from './components/CreateBillPage';
import Code from "./Code";
// import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <SideBar/> */}
      {/* <LoginPage /> */}
      {/* <LandingPage/> */}
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items" element={<ShoppingCartPage />} />
        <Route path="/Additems" element={<AddItemsPage/>} />
        <Route path="/items" element={<ShoppingCartPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/bill" element={<CreateBillPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/code" element={<Code/>} />
      </Routes>
      
    </>
  );
};

export default App;
