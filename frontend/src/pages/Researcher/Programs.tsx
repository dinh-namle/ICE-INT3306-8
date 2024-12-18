import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6"
import { ProgramCard, ProgramsSearch } from "../../components"

const Programs = () => {

  const handlebutton = () => {}

  return (
    <div className="bg-main1-2 h-dvh text-white flex flex-col">
      <div className="flex bg-main1-1 text-main2-1 p-8 w-full font-bold text-3xl items-center">Programs</div>

      <div className="flex flex-row w-full bg-main1-1 pl-8 pb-2 space-x-8">
        <button className="font-medium" onClick={handlebutton}>All programs</button>
        <button className="font-medium" onClick={handlebutton}>Public programs</button>
        <button className="font-medium" onClick={handlebutton}>Private programs</button>
      </div>

      <div className="bg-main1-2 flex flex-col pl-8 py-8 w-full justify-center">
        <div className="flex font-semibold text-xl text-main2-1">Find the best opportunities for your skills and wallet</div>
        <div className="flex font-black text-5xl text-white">Programs Discovery</div>
      </div>

      <div className="mx-8">
        <ProgramsSearch />
      </div>

      <div className="flex flex-col mx-8 my-4">
        <div className="font-sans text-lg font-semibold">Campaigns & top-paying programs</div>
        <div className="flex flex-row items-center my-2 space-x-5 scrollbar-hide overflow-x-scroll scroll-x-auto">
          {/* <FaCircleArrowLeft className="size-6 cursor-pointer"/> */}
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          {/* <ProgramCard /> */}
          {/* <FaCircleArrowRight className="size-6 cursor-pointer" /> */}
        </div>
      </div>

    </div>
  )
}

export default Programs
