import React, { useState } from "react";
import { links } from "../component/dummy";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/webtekdi2.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/sign-in");
  };

  return (
    <div className="bg-[#302B46] h-full w-[100%] md:w-64 z-30 fixed ">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="" className="h-24 w-44 mt-4" />
      </div>

      <div className="mt-10">
        <ul className="gap-2 flex flex-col items-left  text-[#948BDA] ">
          {links.map((item, index) => (
            <Link
              key={index}
              to={`/${item.key}`}
              className="cursor-pointer font-semibold md:ml-4 hover:bg-[#454066] p-2 hover:text-white text-[#948BDA] flex items-center gap-2 text-lg  mt-2 rounded-md duration-700 hover:shadow"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center text-lg mt-20  md:mt-40">
        <Link to="/sign-in">
          <Button
            variant="bordered"
            className="px-16  text-[white] border-[#948BDA] items-center"
            onclick={handleLogout}
          >
            Log In <FaAngleRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
