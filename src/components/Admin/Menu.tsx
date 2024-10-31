import React from "react";

interface MenuProps {
  title: string;
  sub_title: string[];
  icon: React.ReactNode;
  href?: string;
}

const Menu:React.FC<MenuProps> = ({title, sub_title, icon, href}) => {
  return <li className="w-full">
            <li className='w-full'>
              <a className='bg-white w-full flex flex-row items-center text-left text-main1-2 rounded-sm font-sans font-bold px-4 py-2 text-xl' href='#'>
              {icon}
              <span className="ml-2">{title}</span>
              </a>
            </li>
            <li className='w-full'>
              <ul className='w-full'>
                {sub_title.map((sub, index) => (
                  <li key={index} className='w-full'>
                    <a className='w-full flex flex-row items-center font-light font-sans text-xl text-white ml-8 px-4 py-2 text-left' href={href}>
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </li>;
}
export default Menu;