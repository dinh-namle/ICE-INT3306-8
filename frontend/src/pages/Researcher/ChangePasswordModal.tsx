interface ModalProps {
    onClose: () => void;
  }
  
const ChangePasswordModal:React.FC<ModalProps> = ({onClose}) => {
   return (
    <div className="w-full h-full">
      <div className="text-xl font-bold text-main1-1 ">Đổi mật khẩu</div>
      <hr />
      <form className="flex flex-col my-4">
        <label htmlFor="password" className="block mt-2 text-sm font-medium text-main1-1">Mật khẩu hiện tại</label>
        <input type="password" id="password" className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        <label htmlFor="newPassword" className="block mt-2 text-sm font-medium text-main1-1">Mật khẩu mới</label>
        <input type="password" id="newPassword" className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        <label htmlFor="confirmNewPassword" className="block mt-2 text-sm font-medium text-main1-1">Nhập lại mật khẩu mới</label>
        <input type="password" id="confirmNewPassword" className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      </form>
      <div className="flex space-x-4 justify-center">
        <button onClick={onClose} className="focus:outline-none text-main1-1 bg-main2-2 hover:bg-main2-1 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Xác nhận</button>
        <button onClick={onClose} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Hủy</button>
      </div>
    </div>
   );
  }
  
  export default ChangePasswordModal;