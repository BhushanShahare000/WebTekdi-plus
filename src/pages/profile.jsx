import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {
  Tooltip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home">
          <Link to="/menu">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem key="profile">Profile</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex justify-center items-center text-4xl font-extrabold text-[#7D2FCA] mt-4">
        <h1>Profile Information</h1>
      </div>
      <div className="mt-5">
        <div className="flex justify-around">
          <Input
            type="text"
            label="First Name"
            className="m-4 w-5/12 text-4xl "
            color="secondary"
            required
          />
          <Input
            type="text"
            label="Address"
            className="m-4 w-5/12  text-4xl "
            color="secondary"
            required
          />
        </div>
        <div className="flex justify-around">
          <Input
            type="number"
            label="Number"
            className="m-4 w-5/12 text-4xl"
            color="secondary"
            required
          />
          <Input
            type="email"
            label="Email"
            className="m-4 w-5/12 text-4xl"
            color="secondary"
            required
          />
        </div>
        <div className="flex justify-around">
          <Input
            type="text"
            label="State"
            className="m-4 w-5/12 text-4xl "
            color="secondary"
            required
          />
          <Input
            type="text"
            label="City"
            className="m-4 w-5/12 text-4xl"
            color="secondary"
            required
          />
        </div>
      </div>

      <div className="flex justify-center mt-8  items-center">
        <Button
          variant="bordered"
          className="px-16 py-2  text-[white] text-lg bg-[#7D2FCA] items-center"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default Profile;
