import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = ({ children, setSearch }) => {
  return (
    <>
      <Sidebar />
      <Header setSearch={setSearch} />
      {children}
    </>
  );
};

export default Layout;
