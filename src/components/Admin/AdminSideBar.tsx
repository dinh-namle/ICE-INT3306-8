import { FaBell, FaBoxArchive, FaClipboardUser, FaFileWaveform, FaGear } from 'react-icons/fa6'
import Menu from './Menu'
import { Link, useLocation } from 'react-router-dom'

const itemsMenu = [
  { title: 'Thông báo', sub_title: ['Tất cả', 'Chưa đọc', 'Đã đọc'], icon: <FaBell /> },
  { title: 'Tài khoản', sub_title: ['Danh sách'], icon: <FaClipboardUser /> },
  { title: 'Programs', sub_title: ['Danh sách', 'Duyệt'], icon: <FaBoxArchive /> },
  { title: 'Reports', sub_title: ['Danh sách'], icon: <FaFileWaveform /> },
  { title: 'Đổi mật khẩu Admin', sub_title: [''], icon: <FaGear /> }
]

const items = [
  { title: 'Thông báo', icon: <FaBell />, url: '/admin/notification' },
  { title: 'Tài khoản', icon: <FaClipboardUser />, url: '/admin/accounts' },
  { title: 'Programs', icon: <FaBoxArchive />, url: '/admin/programs' },
  { title: 'Reports', icon: <FaFileWaveform />, url: '/admin/reports' },
  { title: 'Đổi mật khẩu', icon: <FaGear />, url: '/admin/change-password' }
]

const AdminSideBar: React.FC = () => {
  const location = useLocation();


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
          {items.map((item, index) => (
            <li key={index} className='my-8'>
              <Link
                className={`${location.pathname === item.url ? 'bg-main2-1 text-main1-2' : 'bg-main1-2 text-white'} w-full flex flex-row items-center text-left rounded-sm font-sans font-bold px-4 py-2 text-xl`}
                to={item.url}
              >
                {item.icon}
                <span className='ml-2'>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminSideBar
