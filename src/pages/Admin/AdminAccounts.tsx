import { useState } from 'react'
import { AdminTitle, Modal, Table } from '../../components'
import { FaFilter, FaMagnifyingGlass } from 'react-icons/fa6'
import CreateAccountModal from './CreateAccountModal'

const needHeader = false
const columns = ['Status', 'Type', 'Message', 'Time']
const data = [
  { Status: '1', Type: 'Program', Message: 'Yêu cầu tạo mới từ HackTheBox', Time: '1 ngày trước' },
  { Status: '1', Type: 'Program', Message: 'Yêu cầu tạo mới từ HackTheBox', Time: '2 ngày trước' },
  { Status: '1', Type: 'Report', Message: 'Yêu cầu tạo mới từ HackTheBox', Time: '3 ngày trước' }
]

const AdminAccounts = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => { setOpenModal(!openModal) }

  return (
    <div className='w-full h-lvh bg-main1-1 flex flex-col'>
      <AdminTitle title='Tài khoản' />

      {/* TODO: update search bar */}
      <div className='ml-8 mb-4 flex items-center space-x-auto'>
        <div className='basis-1/12 flex justify-center'>
          <FaFilter className='fill-white w-11 h-11 p-3 border-[1px] border-main1-3 rounded-md' />
        </div>
        <form className='basis-1/2 w-fit flex flex-col p-2 border-b-[0.5px] border-main1-3'>
          <div className='flex flex-row items-center'>
            <FaMagnifyingGlass className='fill-main1-3 mr-2' />
            <input
              type='search'
              className='placeholder:text-main1-3 bg-main1-1 flex-1'
              placeholder='Bạn muốn tìm gì?'
            />
          </div>
        </form>
        <div className='basis-[36%] flex justify-end'>
          <button onClick={() => {handleOpenModal()}} className='basis-auto transition ease-in-out duration-100 hover:scale-110 text-main1-1 bg-main2-1 font-semibold py-[4px] px-[16px] mx-1 rounded-md'>
            Tạo mới
          </button>
        </div>
      </div>

      <div className='w-full h-full '>
        <Table needHeader={needHeader} columns={columns} data={data} />
      </div>

      {openModal && <Modal onClose={() => {handleOpenModal()}}>
        <CreateAccountModal onClose={() => {handleOpenModal()}} />
      </Modal>}
    </div>
  )
}
export default AdminAccounts
