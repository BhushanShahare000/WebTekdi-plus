import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  CardBody,
  Image,
  Button,
  CardFooter,
} from "@nextui-org/react";
import { lists } from "../component/dummy";
import useCart from "../contexts/cart/useCart";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import TemplateCard from "../component/templateCard";
import Notfound from  "../assets/not_Found.jpg";

function Menu({ search }) {
  const { addToCart } = useCart();
  const [restro, setrestro] = useState(lists);

  const filteredList = search.length
    ? restro.filter((restro) =>
        restro.title.toLowerCase().includes(search.toLowerCase())
      )
    : restro;

  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home">
          <Link to="/menu">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem key="menu">All Templates</BreadcrumbItem>
      </Breadcrumbs>

      <div className="gap-4 grid grid-cols-2 m-4  mt-6 sm:grid-cols-3">
        {filteredList.length ? (
          filteredList.map((item, id) => <TemplateCard key={id} item={item} />)
        ) : filteredList}
      </div>
      {filteredList.length === 0 ? (
      <div className="flex flex-col text-center items-center justify-center">
        <img src={Notfound} className="w-96" alt="" />
        <h1 className="  text-gray-500 text-xl ">Item not found</h1>
        </div>
          
        ) : null}
    </div>
  );
}

export default Menu;
