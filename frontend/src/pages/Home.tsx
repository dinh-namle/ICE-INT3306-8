import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <div>
      <div
        className='bg-local h-svh justify-center flex flex-col pl-32 pt-[80px]'
        style={{ backgroundImage: "url('/back1.png')" }}
      >
        <p className='text-white text-7xl font-sans font-extrabold flex flex-col my-4 space-y-4'>
          <span>VÌ MỘT</span> <span className='text-main2-1'>THẾ GIỚI</span> <span>KHÔNG CÒN</span>{' '}
          <span className='text-sub-1'>LỖ HỔNG</span>
        </p>
        <p className='text-white text-2xl font-sans font-light mb-4'>
          Cùng nhau xây dựng và duy trì một thế giới số an toàn tới mọi người
        </p>
        <div className='my-4 space-x-16'>
          <button
            onClick={() => handleNavigate('/register')}
            className='transition ease-in-out duration-100 hover:scale-110 text-main1-1 bg-main2-1 text-base font-semibold py-[10px] px-[20px] mx-1 rounded-md'
          >
            Tham gia ngay
          </button>
          <button
            onClick={() => handleNavigate('/login')}
            className='transition ease-in-out duration-100 hover:scale-110 text-main1-3 bg-main1-2 text-base font-semibold py-[10px] px-[20px] mx-1 rounded-md'
          >
            Đã là thành viên?
          </button>
        </div>
      </div>

      <div className='bg-main1-1 flex flex-col items-center py-8 space-y-4'>
        <div className='text-white font-sans font-medium text-2xl'>
          Đồng hành cùng <span className='text-main2-1'>chúng tôi</span>
        </div>
        <div className='flex flex-row items-center space-x-4'>
          <img className='h-12' src='/Logo_UET.png' alt='uet' />
          <img className='h-9 object-contain' src='/Logo_FET.png' alt='fet' />
        </div>
      </div>

      <div
        className='bg-local bg-cover h-svh justify-center items-end flex flex-col pr-32 pt-[80px]'
        style={{ backgroundImage: "url('/back2.jpg')" }}
      > 
        <p className='text-white text-7xl font-sans font-extrabold flex flex-col my-4 space-y-4 items-end'>
          <span>BẢO VỆ</span> <span className='text-main2-1'>DOANH NGHIỆP</span> <span>CỦA BẠN KHỎI</span>{' '}
          <span className='text-sub-1'>LỖ HỔNG</span>
        </p>  
        <p className='text-white text-2xl font-sans font-light mb-4'>
          Hãy để chúng tôi bảo vệ khỏi sự nguy hiểm của thế giới số
        </p>
        <div className='my-4 space-x-16'>
          <button
            onClick={() => handleNavigate('/register')}
            className='transition ease-in-out duration-100 hover:scale-110 text-main1-1 bg-main2-1 text-base font-semibold py-[10px] px-[20px] mx-1 rounded-md'
          >
            Trở thành đối tác của chúng tôi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
