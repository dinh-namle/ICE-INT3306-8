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


const Notification = () => {
  return (
    <div className='w-full h-lvh bg-main1-1 flex flex-col'>
      <AdminTitle title='Thông báo' />
      
      <div className='w-full h-full '>
        <Table needHeader={needHeader} columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Notification
