type ChangePasswordSectionProps = {
    onClose: () => void;
  };
  
  const ChangePasswordSection: React.FC<ChangePasswordSectionProps> = ({ onClose }) => {
    return (
      <div className="bg-main1-1 p-6 rounded-lg">
        <h2 className="text-main2-1 text-2xl mb-4">Change Password</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="current-password" className="text-gray-400">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="w-full bg-main1-2 text-gray-300 p-2 rounded mt-2"
              placeholder="Enter your current password"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="text-gray-400">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="w-full bg-main1-2 text-gray-300 p-2 rounded mt-2"
              placeholder="Enter your new password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="text-gray-400">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full bg-main1-2 text-gray-300 p-2 rounded mt-2"
              placeholder="Confirm your new password"
            />
          </div>
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
              Change Password
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ChangePasswordSection;
  