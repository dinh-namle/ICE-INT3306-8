import { FaBell, FaBoxArchive, FaClipboardUser, FaFileWaveform, FaGear } from 'react-icons/fa6';
import Menu from './Menu';

const itemsMenu = [
  {title: "Thông báo", sub_title: ["Tất cả", "Chưa đọc", "Đã đọc"], icon: <FaBell />},
  {title: "Tài khoản", sub_title: ["Danh sách"], icon: <FaClipboardUser />},
  {title: "Programs", sub_title: ["Danh sách", "Duyệt"], icon: <FaBoxArchive />},
  {title: "Reports", sub_title: ["Danh sách"], icon: <FaFileWaveform />},
  {title: "Đổi mật khẩu Admin", sub_title: [""], icon: <FaGear />},
];

const AdminSideBar: React.FC = () => {
  return (
    <div className='flex flex-col items-center w-[320px] px-8 bg-main1-2 h-dvh'>
      <div className='flex w-fit h-fit mt-6 mb-1'>
        <img className='w-20' src='/ICE.png' alt='logo' />
      </div>
      <div className='flex flex-row w-full'>
        <hr className='border-t-2 border-white w-full my-4' />
      </div>
      <div className='flex flex-col mt-1 w-full'>
        <ul className='w-full'>
          {itemsMenu.map((item, index) => (
            <Menu key={index} title={item.title} sub_title={item.sub_title} icon={item.icon}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminSideBar
