interface AdminTitleProps {
  title: string
}

const AdminTitle: React.FC<AdminTitleProps> = ({ title }) => {
  return (
    <div className='w-full bg-main1-1 flex flex-col px-8 py-4'>
      <div className='text-white font-sans font-bold text-[32px] w-full'>{title}</div>
      <hr className='border-t-1 border-white w-full my-4' />
    </div>
  )
}
export default AdminTitle
