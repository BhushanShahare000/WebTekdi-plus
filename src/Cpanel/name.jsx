import React from "react";
import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { Domains } from "../component/dummy";
import { Link } from "react-router-dom";

function Name() {
  return (
    <div className="ml-72 mt-24">
      <div className="">
        <h1 className="text-3xl font-semibold">
          Standard Website Plan for
          <span className="text-violet-600"> 1-Year</span>
        </h1>
        <p className="text-xl mt-2 font-semibold">
          Includes everything you need to succeed online.
        </p>
      </div>

      <div className="flex gap-16">
        <div className="flex flex-col mt-16 items-center">
          <table className=" text-xl   border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th
                  className="bg-[#7D2FCA] border text-white text-2xl border-slate-700"
                  colSpan={2}
                >
                  Services
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Website Development
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Website Name
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Website Hosting
                </td>
              </tr>

              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Facebook Page
                </td>
              </tr>

              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Google Map Integration
                </td>
              </tr>

              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Private Email
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ---------------------------------- */}
        <div className="flex flex-col mt-16 items-center">
          <table className=" text-xl   border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th
                  className="bg-[#7D2FCA] border text-white text-2xl border-slate-700"
                  colSpan={2}
                >
                  Features
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  High Performance
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  High Security
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  24/7 Customer Support
                </td>
              </tr>

              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  99.99% Uptime
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Online Payment
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Free Business Consultation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* ------------------ */}
        <div className="flex flex-col mt-16 items-center">
          <table className=" text-xl   border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th
                  className="bg-[#7D2FCA] border text-white text-2xl border-slate-700"
                  colSpan={2}
                >
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
                  ₹ 1000.0
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-2 font-semibold">
                  Website Hosting +<sub>Additional Products</sub>{" "}
                </td>
                <td className="border border-slate-700 p-2 font-semibold">
                  ₹ 3000.0
                </td>
              </tr>

              <tr className="bg-[#7D2FCA] text-white">
                <td className="border border-slate-700 p-2 font-semibold">
                  Current total
                </td>
                <td className="border font-bold border-slate-700 p-2">
                  ₹ 10000.0
                </td>
              </tr>
            </tbody>
          </table>

          <Button className="mt-8 px-28 bg-[#7D2FCA] font-semibold text-lg text-white">
           <Link to='/plan'>Place Order</Link> 
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Name;
