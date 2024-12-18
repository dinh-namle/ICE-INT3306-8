import { AdminTab, AdminTitle, Table } from '../../components'

const data = [
  { Status: "1", Type: "Program", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "1 ngày trước" },
  { Status: "1", Type: "Program", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "2 ngày trước" },
  { Status: "1", Type: "Report", Message: "Yêu cầu tạo mới từ HackTheBox", Time: "3 ngày trước" },
];

const buttons = ["Tất cả", "Chưa đọc", "Đã đọc"];

const AdminNotification = () => {
  return (
  <div className='w-full h-lvh bg-main1-1 flex flex-col'>
    <AdminTitle title='Thông báo' />

    <div className='ml-8'>
    <AdminTab buttons={buttons}  />
    </div>

    <div className='w-full h-full '>
    <Table data={data} />
    </div>
  </div>
  )
}

export default AdminNotification
