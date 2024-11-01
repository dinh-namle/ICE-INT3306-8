import { AdminTitle, Table } from '../../components'
import React from 'react';

const needHeader = false
const columns = ["Status","Type", "Message", "Time"];
const data = [
  { Status: "1", Type: "Program", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "1 ngày trước" },
  { Status: "1", Type: "Program", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "2 ngày trước" },
  { Status: "1", Type: "Report", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "3 ngày trước" },
  ];

const buttons = ["Tất cả", "Chưa đọc", "Đã đọc"];

const AdminNotification = () => {
  const [active, setActive] = React.useState<number>(1);

  const handleClick = (index: number) => {
  setActive(index);
  }

  return (
  <div className='w-full h-lvh bg-main1-1 flex flex-col'>
    <AdminTitle title='Thông báo' />

    <div className='ml-8'>
    <div className='flex justify-start m'>
      {buttons.map((button, index) => (
      <button key={`tab_${index}`} className={`${active === index ? 'bg-main1-2' : 'bg-main1-1'} px-4 py-2 text-white rounded-t-md`} onClick={() => handleClick(index)}>{button}</button>
      ))}
    </div>
    </div>

    <div className='w-full h-full '>
    <Table needHeader={needHeader} columns={columns} data={data} />
    </div>
  </div>
  )
}

export default AdminNotification
