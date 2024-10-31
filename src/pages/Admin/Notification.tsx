import { useState } from 'react';
import { AdminTitle, Table } from '../../components'

const needHeader = false
const columns = ["Status","Type", "Message", "Time"];
const data = [
    { Status: "1", Type: "Program", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "1 ngày trước" },
    { Status: "1", Type: "Program", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "2 ngày trước" },
    { Status: "1", Type: "Report", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "3 ngày trước" },
  ];

const buttons = ["Tất cả", "Chưa đọc", "Đã đọc"];

const [active, setActive] = useState<number | null>(null);

const handleClick = (index: number) => {
  setActive(index);
}

const Notification = () => {
  return (
    <div className='w-full h-lvh bg-main1-1 flex flex-col'>
      <AdminTitle title='Thông báo' />
      <div className='flex flex-row mx-8'>
        {buttons.map((button, index) => (
          <button key={index} className={`${active === index ? 'bg-main1-2' : 'bg-main1-1'} text-white font-sans font-semibold py-2 px-4 rounded-t-md`} onClick={() => handleClick(index)}>
            {button}
          </button>
        ))}
      </div>
      <div className='w-full h-full '>
        <Table needHeader={needHeader} columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Notification
