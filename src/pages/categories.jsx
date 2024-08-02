import React, { useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Card,
  CardBody,
  Image,
  Button,
  CardFooter,
} from "@nextui-org/react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Buttonn from "./button";
import { lists } from "../component/dummy";
import TemplateCard from "../component/templateCard";

const Categories = ({ search }) => {
  const [items, setItems] = useState(lists);
  const menuItems = [...new Set(lists.map((val) => val.title))];

  const filterItems = (cat) => {
    const newItems = lists.filter((newval) => newval.title === cat);
    setItems(newItems);
  };

  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home">
          <Link to="/menu">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem key="dashboard">Categories</BreadcrumbItem>
      </Breadcrumbs>

      <Buttonn
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
      />

      <div className="gap-4 grid grid-cols-2 m-4  mt-6 sm:grid-cols-3">
        {items.map((item, id) => (
          <TemplateCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
