import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const ProgramsDropdown:React.FC = () => {

  const [state, setState]= useState(false);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <div className="flex justify-between bg-main1-1 px-4 py-3 rounded-md border-main2-1 border-2 overflow-hidden font-[sans-serif] items-center cursor-pointer" onClick={handleClick}>
      <div className="text-sm text-gray-600 outline-none bg-transparent">Select...</div>
      <FaAngleDown className="fill-gray-600" />

      {state &&
      <div className="absolute bg-main1-2 w-fit border-2 border-main2-1 rounded-md">
        <div className="flex flex-col space-y-2">
          <button className="px-4 py-3 hover:bg-main2-1">Program 1</button>
        </div>
      </div>
    }

    </div>

    
  );
}

export default ProgramsDropdown;