import { InputForm } from './InputForm';
import ProgramsDropdown from './ProgramsDropdown';

const ProgramsSearch:React.FC = () => {
  return (
    <div className="relative bg-main1-1 w-full flex px-8 py-4 space-x-4">
      <div className="flex flex-col basis-4/12 space-y-2">
        <div className="text-white font-medium">Search bar</div>
        <InputForm     />
      </div>

      <div className="flex flex-col basis-2/12 space-y-2">
        <div className="text-white font-medium">Programs type</div>
        <ProgramsDropdown />
      </div>

      <div className="flex flex-col basis-2/12 space-y-2">
        <div className="text-white font-medium">Programs type</div>
        <ProgramsDropdown />
      </div>

      <div className="flex flex-col basis-2/12 space-y-2">
        <div className="text-white font-medium">Programs type</div>
        <ProgramsDropdown />
      </div>

      <div className="flex flex-col justify-end basis-1/12 space-y-2">
        <br />
        <button className='px-4 py-3 bg-main2-1 rounded-md border-2 border-main2-1 font-[sans-serif] text-sm' onClick={null}>Search</button>
      </div>
    </div>
  )
}

export default ProgramsSearch;