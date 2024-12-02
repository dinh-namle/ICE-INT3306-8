import { InputForm } from './InputForm';
// import { FaMagnifyingGlass } from "react-icons/fa6";
import ProgramsDropdown from './ProgramsDropdown';

const ProgramsSearch:React.FC = () => {
  return (
    <div className="bg-main1-1 w-full flex px-8 py-4 space-x-4">
      <div className="flex flex-col basis-4/12 space-y-2">
        <div className="text-white font-medium">Search bar</div>
        <InputForm     />
      </div>

      <div className="flex flex-col basis-2/12 space-y-2">
        <div className="text-white font-medium">Programs type</div>
        <ProgramsDropdown />
      </div>

      <div className="flex flex-col basis-1/12 space-y-2">
        <br />
        <button onClick={null}>Search</button>
      </div>
    </div>
  )
}

export default ProgramsSearch;