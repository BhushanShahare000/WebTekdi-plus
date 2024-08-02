import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import useCart from "../contexts/cart/useCart";
import TemplateCard from "../component/templateCard";
import Notfound from  "../assets/not_Found.jpg";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home">
          <Link to="/menu">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem key="cart">Cart</BreadcrumbItem>
      </Breadcrumbs>
      <div>
        <section>
          <div className="gap-4 grid grid-cols-2 m-4  mt-6 sm:grid-cols-3">
            {(cart.length)?cart.map((item, id) => (
              <TemplateCard item={item} key={id} />
            )): null}

          </div>
            {
             (cart.length === 0)?
             <div className="flex flex-col text-center items-center justify-center">
             <img src={Notfound} className="w-96" alt="" />
             <h1 className="  text-gray-500 text-xl ">Your cart is empty</h1>
             </div>
             :null
            }
        </section>
      </div>
    </div>
  );
}

export default Cart;
