import { useState } from "react";
import { createUser } from "../../services/userService";

interface ModalProps {
  onClose: () => void;
  onSubmit?: () => void;
}

interface Form {
  username: string;
  email: string;
  password: string;
  // password2: string;
}

const CreateAccountModal:React.FC<ModalProps> = ({onClose, onSubmit}) => {

  const [formData, setFormData] = useState<Form> ({
    username: '',
    email: '',
    password: '',
    // password2: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }


  const submitForm = async () => {
    try {
      console.log(formData);
      await createUser(formData);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  const handleClick = () => {
    submitForm();
    onClose();
    // onSubmit();
  }

  return (
  <div className="w-full h-full">
    <div className="text-xl font-bold text-main1-1 ">Tạo tài khoản</div>
    <hr />
    <form className="flex flex-col my-4">
      <label htmlFor="username" className="block mt-2 text-sm font-medium text-main1-1">Username</label>
      <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <label htmlFor="email" className="block mt-2 text-sm font-medium text-main1-1">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <label htmlFor="password" className="block mt-2 text-sm font-medium text-main1-1">Mật khẩu</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <label htmlFor="password2" className="block mt-2 text-sm font-medium text-main1-1">Nhập lại mật khẩu</label>
      <input type="password" id="password2" className="bg-gray-50 border border- main1-3 text-main1-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <label htmlFor="role" className="block mt-2 text-sm font-medium text-main1-1">Vai trò</label>
      <select id="role" className="bg-gray-50 border border-main1-3 text-main1-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="admin">Admin</option>
        <option value="user">Partner</option>
        <option value="user">Researcher</option>
      </select>
    </form>
    <div className="flex space-x-4 justify-center">
      <button onClick={handleClick} className="focus:outline-none text-main1-1 bg-main2-2 hover:bg-main2-1 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Tạo mới</button>
      <button onClick={onClose} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Hủy</button>
    </div>
  </div>
  );
}

export default CreateAccountModal;