import React from "react";

interface AdminTabProps {
  buttons: string[];
}

const AdminTab:React.FC<AdminTabProps> = ({buttons}) => {
  const [active, setActive] = React.useState<number>(1);

  const handleClick = (index: number) => {
  setActive(index);
  }

  return <div className='flex justify-start m'>
      {buttons.map((button, index) => <button key={index} className={`${active === index ? 'bg-main1-2' : 'bg-main1-1'} px-4 py-2 text-white rounded-t-md`} onClick={() => handleClick(index)}>{button}</button>)}
    </div>;
}

export default AdminTab;