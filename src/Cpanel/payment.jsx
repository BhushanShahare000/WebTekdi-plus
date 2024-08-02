import React from "react";
import { Input, Button } from "@nextui-org/react";
function Payment() {
  return (
    <div className="ml-72 mt-24">
      <div className="">
        <div>
          <h1 className="text-3xl font-semibold">Account Confirmation</h1>
          <p className="text-xl mt-2 font-semibold">
            Please enter OTP we've sent on your phone number. Do not refresh the
            page.
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 justify-between">
          <div className="flex justify-center gap-4 items-center">
            <Input
              type="number"
              label="Number"
              color="secondary"
              className="m-2 w-80 text-4xl"
              required
            />
            <Button className=" bg-[#7D2FCA] font-semibold text-lg text-white">
              Confirm OTP and Submit
            </Button>
          </div>

          <div className="flex flex-col mt-10  items-center">
            <table className=" text-xl   border-separate border-spacing-2 border border-slate-500">
              <thead>
                <tr>
                  <th
                    className="bg-[#7D2FCA] border text-white text-2xl border-slate-700"
                    colSpan={2}
                  >
                    Contact Information
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700 p-2 font-semibold">
                    Email
                  </td>
                  <td className="border border-slate-700 p-2 font-semibold">
                    ₹ 6000.0
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-2 font-semibold">
                    Phone
                  </td>
                  <td className="border border-slate-700 p-2 font-semibold">
                    ₹ 6000.0
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Button className="mt-8 px-28 bg-[#7D2FCA] font-semibold text-lg text-white">
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
