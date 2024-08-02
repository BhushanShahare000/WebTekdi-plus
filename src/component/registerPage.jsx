import React, { useState } from "react";
import axios from "axios"; // Import axios
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
import { FaGoogle } from "react-icons/fa";
import Logo from "../assets/webtekdi2.png";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/user/save', {
            email: email,
            password: input.password,
            firstName: input.firstName,
            lastName: input.lastName,
            phone: input.phone,
            confirmPassword: input.confirmPassword
        });
        
        if (response.status === 200) {
            // Data saved successfully
            alert(response.data); // Display the message from the server
            // Redirect or do other actions here
        } else if (response.status === 409) {
            // Email already exists
            alert(response.data); // Display the message from the server
        } else {
            // Other error occurred
            alert(response.data);
        }
    } catch (error) {
        console.error(error); 
        alert('Record Already Exist Or Please Fill all the Required Fields');
    }
};



  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Removed imports and useState hooks for clarity  
  return (
    <div className="flex justify-center items-center bg-[#3F2F5D] h-[100vh]">
      <Card className="bg-[#796ecc] p-6 m-2 shadow-lg shadow-slate-600">
        <CardHeader className="flex flex-col font-bold">
          <Image src={Logo} alt="" className="h-36 w-80" />
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center flex-col gap-2 mb-4 justify-center">
            <div className="flex">
              <Input
                type="text"
                label="First Name"
                name="firstName"
                className="m-2 w-80 text-4xl"
                value={input.firstName}
                onChange={onInputChange}
                required
              />
              <Input
                type="text"
                label="Last Name"
                name="lastName"
                className="m-2 w-80 text-4xl"
                value={input.lastName}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="flex">
              <Input
                type="number"
                label="Number"
                name="phone"
                className="m-2 w-80 text-4xl"
                value={input.phone}
                onChange={onInputChange}
                required
              />
              <Input
                type="email"
                label="Email"
                name="email"
                className="m-2 w-80 text-4xl"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <Input
                  className="m-2 w-80 text-4xl"
                  label="Password"
                  name="password"
                  value={input.password}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  type="password"
                  required
                />
                {error.password && (
                  <span className="err">{error.password}</span>
                )}
              </div>
              <div className="flex flex-col items-center">
                <Input
                  className="m-2 w-80 text-4xl"
                  label="Confirm Password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <IoEye className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  required
                />
                {error.confirmPassword && (
                  <span className="err">{error.confirmPassword}</span>
                )}
              </div>
            </div>
            <Button
              color=""
              type="submit"
              className="m-2 w-11/12 bg-[#3F2F5D] text-white font-semibold"
            >
              Register
            </Button>
            <p className="text-white">
              Need to login ?
              <a href="/sign-in" className="ml-2 underline">
                Click here
              </a>
            </p>
          </div>
        </form>
        <Divider />
        <CardFooter className="flex justify-center items-center">
          <Button
            startContent={<FaGoogle />}
            className="m-2 w-11/12 font-semibold bg-slate-50 text-black"
          >
            Log In With Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
