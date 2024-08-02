import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';

function Design() {
  const [domainName, setDomainName] = useState('');

  const checkDomainAvailability = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/checkDomain/${domainName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // No need to include body in this case
      });
  
      if (response.ok) {
        const data = await response.text();
        if (data.includes('available')) {
          alert(data);
        } else {
          console.log('Domain not available');
        }
      } else {
        console.error('Error checking domain availability:', response.statusText);
      }
    } catch (error) {
      console.error('Error checking domain availability:', error);
    }
  };
  
  
  const handleInputChange = (event) => {
    setDomainName(event.target.value);
  };
  
  return (
    <div className="ml-72 mt-24">
     
        <h1 className="text-3xl font-semibold">
          Check Website Name
          <span className="text-violet-600">Availability</span>
        </h1>
        <p className="text-xl mt-2 font-semibold">Search for a website name</p>
        <div className="flex mt-8 gap-3 items-center justify-center">
         
          <Input
            color="secondary"
            className=" w-72 mr-6 "
            placeholder="search"
            value={domainName}
            onChange={handleInputChange}
            startContent={<BsSearch className="text-default-400 " size={20} />}
          ></Input>

          <Button className=" font-semibold text-[white] text-lg  bg-[#7D2FCA] p-4 items-center" onClick={checkDomainAvailability}>
            Check Availability
          </Button>
        </div>

      <div className="flex flex-col mt-16 items-center">
        <table className="text-xl border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="bg-[#7D2FCA] border text-white text-2xl border-slate-700" colSpan={2}>
                Your Order
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 p-2 font-semibold">
                Website Development
              </td>
              <td className="border border-slate-700 p-2 font-semibold">
                ₹ 6000.0
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-2 font-semibold">
                Website Name
              </td>
              <td className="border border-slate-700 p-2 font-semibold">
                ₹ 6000.0
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-2 font-semibold">
                Website Hosting +<sub>Additional Products</sub>{" "}
              </td>
              <td className="border border-slate-700 p-2 font-semibold">
                ₹ 0.00
              </td>
            </tr>

            <tr className="bg-[#7D2FCA] text-white">
              <td className="border border-slate-700 p-2 font-semibold">
                Current total
              </td>
              <td className="border font-bold border-slate-700 p-2">
                ₹ 7000.0
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/name">
          <Button className="mt-8 bg-[#7D2FCA] font-semibold text-lg text-white">Next, choose your plan</Button>
        </Link>   
      </div>
      </div>
  
  );
}

export default Design;
