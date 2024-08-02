import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./component/loginPage";
import Menu from "./pages/menu";
import Categories from "./pages/categories";
import Cart from "./pages/cart";
import Order from "./pages/order";
import Layout from "./component/layout";
import RegisterPage from "./component/registerPage";
import { useState } from "react";
import Profile from "./pages/profile";
import Design from "./Cpanel/design";
import Name from './Cpanel/name'
import Plan from './Cpanel/plan'
import Payment from "./Cpanel/payment";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#292640] h-full ">
      <Routes>
        <Route path="/" element={<Navigate to="/categories" />} />

        <Route
          path="/menu"
          element={
            <Layout setSearch={setSearch}>
              <Menu search={search} />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />

        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/register-in" element={<RegisterPage />} />
        {/* <Route path="/sign-in" element={<LoginPage />} /> */}
        <Route path="/design" element={<Layout><Design /></Layout>} />
        <Route path="/name" element={<Layout><Name/></Layout>} />
        <Route path="/plan" element={<Layout><Plan/></Layout>}/>
        <Route path="/payment" element={<Layout><Payment/></Layout>}/>
      </Routes>
    </div>
  );
};

export default App;
