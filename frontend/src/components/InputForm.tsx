import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
export const InputForm:React.FC = ({}) => {
  return <div className="flex px-4 py-3 rounded-md border-2 border-main2-1 overflow-hidden font-[sans-serif] items-center">
          <FaMagnifyingGlass className="fill-gray-600 mr-2" />
          <input type="email" placeholder="Search Something..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
        </div>;
}
  