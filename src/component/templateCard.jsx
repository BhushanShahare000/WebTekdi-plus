import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Card,
  CardBody,
  Image,
  Button,
  CardFooter,
} from "@nextui-org/react";
import { lists } from "./dummy";
import useCart from "../contexts/cart/useCart";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const TemplateCard = ({ item }) => {
  const { addToCart, removeFromCart, cart, cartItemMap } = useCart();
  const showRemoveFromCartBtn = cartItemMap[item.id];

  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="dark:bg-white dark:text-black p-0 ">
        <Image
          shadow="sm"
          radius=""
          width="100%"
          alt={item.title}
          className="w-full object-cover h-[140px]"
          src={item.img}
        />
        <div className="flex items-center text-center mt-2">

        <p className="ml-4 font-semibold ">{item.title}</p>
       
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between overflow-auto dark:text-black dark:bg-white">
        <div className="flex items-center gap-2 ">
        <Button
              isPressable
              className="bg-white dark:bg-black hover:bg-slate-300"
            
            >
            
           <Link to="/design" >{item.price} Buy</Link>
            </Button>

          {showRemoveFromCartBtn ? (
            <Button
              isPressable
              className="bg-white dark:bg-black hover:bg-slate-300"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              <MdShoppingCart className="text-xl " />
              Remove
            </Button>
          ) : (
            <Button
              isPressable
              className="bg-white dark:bg-black hover:bg-slate-300"
              onClick={() => {
                addToCart(item);
              }}
            >
              <MdShoppingCart className="text-xl " />
              Add To Cart
            </Button>
          )}
          <Button variant="shadow" className=" text-white bg-[#7D2FCA]">
            <a href={item.live}>Live preview</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
