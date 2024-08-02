import React, { useEffect, useState } from "react";
import { Avatar, button } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { lists } from "./dummy";
import { CiDark } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import Logo from "../assets/webtekdi2.png";
import { CiLight } from "react-icons/ci";
import { Badge } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";


import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import useCart from "../contexts/cart/useCart";

const Header = ({ setSearch }) => {
  const { cart } = useCart();
  ///Dark mode ///
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <div>
      <div className="flex gap-6 bg-[#FFFFFF] w-full dark:bg-[#292640] py-9 h-16 items-center justify-end z-20 fixed ">
        <div className="flex gap-4 items-center mr-8 ">
          <input
            type="text"
            placeholder="Search"
            className=" w-[400px] px-6 py-2 border-gray-500 dark:bg-white shadow-slate-300 dark:text-black rounded shadow outline-none hidden md:block"
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* <Button isIconOnly className="rounded-full dark:text-[#948BDA] text-[#7D2FCA] bg-[#E4D4F4] dark:bg-[#3F2F5D]"   >
         {/* <CiSearch className="text-xl cursor-pointer" /> */}

          {/* </Button> */}

          <Button
            onClick={() => setDarkMode(!darkmode)}
            isIconOnly
            className="rounded-full  dark:text-[#948BDA] text-[#7D2FCA] bg-[#E4D4F4] dark:bg-[#3F2F5D]"
          >
            {darkmode ? (
              <CiLight className="text-xl cursor-pointer" />
            ) : (
              <CiDark className="text-xl cursor-pointer" />
            )}
          </Button>

          <Badge content={cart.length} color="danger">
            <Button
              isIconOnly
              className="rounded-full dark:text-[#948BDA] text-[#7D2FCA] bg-[#E4D4F4] dark:bg-[#3F2F5D]"
            >
              <Link to="/cart">
             
                <IoMdCart className="text-xl cursor-pointer" />
              </Link>
            </Button>
          </Badge>

          <Button
              isIconOnly
              className="rounded-full dark:text-[#948BDA] text-[#7D2FCA] bg-[#E4D4F4] dark:bg-[#3F2F5D]"
            >
            
             
                <IoMdPerson className="text-xl cursor-pointer" />
             
            </Button>
        


          {/* <Badge content="0" color="danger">
            <Button
              isIconOnly
              className="rounded-full dark:text-[#948BDA] text-[#7D2FCA] bg-[#E4D4F4] dark:bg-[#3F2F5D]"
            >
              <IoNotifications className="text-xl cursor-pointer" />
            </Button>
          </Badge> */}
          {/* ///Dropdown// */}
          {/* <Dropdown>
            <DropdownTrigger>
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                size="lg"
                className="cursor-pointer "
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">
                <Link to="/profile">Profile</Link>
              </DropdownItem>

              <DropdownItem key="delete" className="text-danger" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default Header;
