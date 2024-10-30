import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
      navigate(path)
    }

    return (
        <div className="bg-main1-2 min-h-screen w-full">
            <div className="mt-0 ml-[10px] w-full h-[70px] bg-main1-1 flex items-center justify-center mx-auto">
                <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">User Profile</h1>
            </div>

            <div className="mt-[10px] ml-[30px] flex flex-row flex-wrap justify-center">
                <div className="bg-white min-w-[300px] max-w-[700px] h-[650px] w-[500px]">abc</div>
                <div className="bg-slate-400 min-w-[300px] max-w-[700px] h-[650px] w-[500px]">cde</div>
            </div>
            

        </div>
    )
}

export default User;