import { useNavigate } from 'react-router-dom'

const R_EditProfile = () => {
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
      navigate(path)
    }

    return (
        <div className="bg-main1-2 min-h-screen w-full">
          <h1 className='text-[white]'>R editprofile</h1>
        </div>
    )
}

export default R_EditProfile;