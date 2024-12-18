import { useState } from "react";
import axios from "axios";

interface ModalProps {
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ModalProps> = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Mật khẩu mới và xác nhận mật khẩu không khớp");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user/change-password/:id", {
        id: 1, // ID của người dùng (cần lấy từ thông tin user hiện tại)
        currentPassword,
        newPassword,
      });
      alert(response.data.message);
      onClose();
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Đã xảy ra lỗi");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="text-xl font-bold text-main1-1">Đổi mật khẩu</div>
      <hr />
      <form className="flex flex-col my-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="currentPassword" className="block mt-2 text-sm font-medium text-main1-1">
          Mật khẩu hiện tại
        </label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="bg-gray-50 border border-main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />

        <label htmlFor="newPassword" className="block mt-2 text-sm font-medium text-main1-1">
          Mật khẩu mới
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="bg-gray-50 border border-main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />

        <label htmlFor="confirmNewPassword" className="block mt-2 text-sm font-medium text-main1-1">
          Nhập lại mật khẩu mới
        </label>
        <input
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="bg-gray-50 border border-main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      </form>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={handleChangePassword}
          className="focus:outline-none text-main1-1 bg-main2-2 hover:bg-main2-1 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Xác nhận
        </button>
        <button
          onClick={onClose}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
