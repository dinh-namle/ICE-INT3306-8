import { BsFacebook, BsMessenger, BsTelegram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-main1-1">
      <div className="p-12 pl-16">
        <img className="h-[30px] mb-3" src="/ICE_Long.png" alt="logo_long" />
        <p className="text-white font-sans text-base font-normal">Đây là website bài tập lớn được thực hiện bởi nhóm Imposter 
          <br/>
            học phần Phát triển ứng dụng Web (INT 3306 8).
          <br/>
            Mong rằng 4 imposter từ K67E-CE1 sẽ có điểm cao!</p>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row basis-1/2 pl-12 my-2">
          <a className="ml-4 h-fit w-fit" href="https://fb.com"><BsFacebook className="fill-white size-6"/></a>
          <a className="ml-4 h-fit w-fit" href="https://messenger.com"><BsMessenger className="fill-white size-6"/></a>
          <a className="ml-4 h-fit w-fit" href="https://fb.com"><BsTelegram className="fill-white size-6"/></a>
        </div>

        <div className="flex flex-row basis-1/2 pr-12 my-2 justify-end">
          <div className="text-white font-sans text-sm font-light mr-4">Cookie Setting</div>
          <div className="text-white font-sans text-sm font-light mr-4">Privacy Policy</div>
          <div className="text-white font-sans text-sm font-light mr-4">2024 ICE</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;