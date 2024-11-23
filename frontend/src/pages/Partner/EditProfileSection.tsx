import { useState } from "react";
interface EditProfileModalProps {
    onClose: () => void;
  }
  
  const EditProfileSection: React.FC<EditProfileModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
      website: '',
      email: '',
      phone: '',
      address: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Submitted Data: ", formData);
    };
  
    return (
      <div className="bg-main1-1 p-6 rounded-lg">
        <h2 className="text-main2-1 text-2xl mb-4">Edit Profile</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {['website', 'email', 'phone', 'address'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="text-gray-400 capitalize">
                {field}
              </label>
              <input
                type="text"
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full bg-main1-2 text-gray-300 p-2 rounded mt-2"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-700 text-gray-300 py-2 px-4 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-main2-1 text-gray-900 py-2 px-4 rounded hover:bg-main2-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default EditProfileSection;
  