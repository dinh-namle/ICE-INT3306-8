import { useState } from "react";
import React from "react";
import { FaGlobe, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import EditProfileSection from "./EditProfileSection";
import ChangePasswordSection from "./ChangePasswordSection";

const LogoSection: React.FC = () => {
  return (
    <div className="col-span-2 bg-main1-1 rounded-lg p-6 flex items-center space-x-6">
      <div className="w-48 h-48 bg-main1-2 rounded-full flex items-center justify-center">
        <span className="text-white font-extrabold text-7xl">
          <span className="text-main2-1">I</span>CE
        </span>z
      </div>
      <div>
        <p className="text-white text-4xl font-sans font-extrabold flex flex-col my-4 space-y-4">
          <span>VÌ MỘT</span>
          <span className="text-main2-1">THẾ GIỚI</span>
          <span>KHÔNG CÒN</span>
          <span className="text-sub-1">LỖ HỔNG</span>
        </p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="col-span-2 bg-main1-1 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-main2-1 mb-4">About Us</h2>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

type ContactInfoProps = {
  icon: JSX.Element;
  text: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-4 mb-4">
    <span className="text-xl">{icon}</span>
    <span>{text}</span>
  </div>
);

const ContactSection: React.FC<{ toggleEditProfile: () => void }> = ({ toggleEditProfile }) => {
  return (
    <div className="bg-main1-1 rounded-lg p-6">
      <ContactInfo icon={<FaGlobe />} text="www.mothaiba.com" />
      <ContactInfo icon={<FaEnvelope />} text="busines@gmail.com" />
      <ContactInfo icon={<FaPhone />} text="+388 123 456" />
      <ContactInfo icon={<FaHome />} text="144, Xuan Thuy" />
      <button
        className="mt-4 bg-main2-1 text-gray-900 w-full py-2 rounded-lg font-semibold hover:bg-main2-2"
        onClick={toggleEditProfile}
      >
        Edit Profile
      </button>
    </div>
  );
};

const PartnerAccount: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "change-password" | "profile-edit">("profile");

  const handleTabClick = (tab: "profile" | "change-password" | "profile-edit") => {
    setActiveTab(tab);
  };

  const toggleEditProfile = () => {
    setActiveTab("profile-edit");
  };

  const toggleChangePassword = () => {
    setActiveTab("change-password");
  };

  // Hàm xử lý khi đổi mật khẩu thành công
  const handleChangePasswordClose = () => {
  };

  return (
    <main className="flex-1 p-8 bg-main1-2 text-gray-200 min-h-screen">
      {/* Tabs */}
      <div className="flex space-x-8 mb-8 border-b border-gray-700 pb-2">
        <button
          className={`text-main2-1 ${activeTab === "profile" || activeTab === "profile-edit" ? "font-bold" : ""}`}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </button>
        <button
          className={`text-main2-1 ${activeTab === "change-password" ? "font-bold" : ""}`}
          onClick={() => handleTabClick("change-password")}
        >
          Change Password
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-3 gap-8">
        <LogoSection />
        {activeTab === "profile" || activeTab === "profile-edit" ? (
          <>
            {activeTab === "profile-edit" ? (
              <EditProfileSection onClose={() => setActiveTab("profile")} />
            ) : (
              <ContactSection toggleEditProfile={toggleEditProfile} />
            )}
            <AboutSection />
          </>
        ) : (
          <ChangePasswordSection onClose={handleChangePasswordClose} />
        )}
      </div>
    </main>
  );
};

export default PartnerAccount;
