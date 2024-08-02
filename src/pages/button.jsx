import React from "react";
import { lists } from "../component/dummy";
import { Button } from "@nextui-org/react";

function Buttonn({ menuItems, filterItems, setItems }) {
  return (
    <div className="flex mt-4 flex-wrap">
      {/* gap-1 grid grid-cols-2 mt-5 sm:grid-cols-7 */}

      <Button
        radius="full"
        className="bg-gradient-to-br dark:from-violet-500 dark:to-violet-700 from-violet-700 to-violet-950 text-white m-1 shadow-lg"
        onClick={() => setItems(lists)}
      >
        All
      </Button>
      {menuItems.map((val, item) => (
        <Button
          radius="full"
          className="bg-gradient-to-br dark:from-violet-500 dark:to-violet-700 from-violet-700 to-violet-950 text-white m-1 shadow-lg"
          key={item}
          onClick={() => filterItems(val)}
        >
          {val}
        </Button>
      ))}
    </div>
  );
}

export default Buttonn;
