import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
      navigate(path)
    }

    const userName : string = `CaoLePhungCP`;
    const email : string = `caolephungcp@gmail.com`;
    const phoneNumber : string = `0123 456 789`;
    const webSite : string = `abcdd`;

    return (
        <div className="bg-main1-2 min-h-screen w-full">
            <div className="mt-0 ml-[10px] w-full h-[70px] bg-main1-1 flex items-center justify-center mx-auto">
                <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">User Profile</h1>
            </div>

            <div className="mt-[10px] flex flex-row flex-wrap justify-center">
                <div className="min-w-[115px] max-w-[700px] h-[650px] w-[370px] mr-[30px] ml-[20px] flex flex-col items-center">
                    <div className="bg-main1-1 w-full flex flex-col items-center p-[1px] pb-[30px] mb-[30px]">
                        <div className="pb-[10px] pt-[30px]"><img src="public\Logo_UET.png" alt="" className="w-[180px]"/></div>
                        <div className="flex flex-col w-full items-center pt-[10px] pb-[10px] border-b-[0.25px] border-main1-3">
                            <div id="userName" className="text-main1-3"><span>{userName}</span></div>
                            <div id="email" className="text-main1-3"><span>{email}</span></div>
                            <div id="phoneNumber" className="text-main1-3"><span>{phoneNumber}</span></div>
                            <div id="webSite" className="text-main1-3"><span>{webSite}</span></div>
                        </div>

                        <div className="p-[10px] w-full flex justify-center">
                            <span className="text-main1-3">hiển thị thời gian ở đây</span>
                        </div>

                        <div className="flex flex-row w-full justify-center">
                            <button className="text-main2-1 w-[120px] h-[60px] bg-slate-800 m-[10px] text-center">Edit Profile</button>
                            <button className="text-main2-1 w-[180px] h-[60px] bg-slate-800 m-[10px] text-center">Change Password</button>
                        </div>
                    </div>

                    <div className="bg-main1-1 w-full flex flex-col items-center p-[1px] pb-[30px] mb-[30px]">
                        day la khoi thu 2
                    
                    </div>

                </div>

                <div className="min-w-[100px] max-w-[1000px] h-[650px] w-[800px] flex flex-col items-center">
                    <div className="bg-main1-1 flex flex-col w-full">
                        <div className="w-full"><span className="text-main1-3">About {userName}</span></div>
                        <div className="w-full">
                            day la thong tin
                        </div>
                    </div>

                    <div className="bg-main1-1 flex flex-col w-full">
                        <div className="w-full"><span className="text-main1-3">Hacktivity</span></div>
                        <div className="w-full">
                            day la thong tin
                        </div>
                    </div>

                    <div className="bg-main1-1 flex flex-col w-full">
                        <div className="w-full flex flex-row">
                            <span className="text-main1-3">Thanks</span>
                        </div>
                        <div className="w-full">
                            day la thong tin
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Profile;