import { ProgramsSearch } from "../../components"

const Programs = () => {
  return (
    <div className="bg-main1-2 h-dvh text-white flex flex-col">
      <div className="flex bg-main1-1 text-main2-1 p-8 w-full font-bold text-3xl items-center">Programs</div>

      <div className="flex flex-row w-full bg-main1-1 pl-8 pb-2 space-x-8">
        <button className="font-medium" onClick={null}>All programs</button>
        <button className="font-medium" onClick={null}>Public programs</button>
        <button className="font-medium" onClick={null}>Private programs</button>
      </div>

      <div className="bg-main1-2 flex flex-col pl-8 py-8 w-full justify-center">
        <div className="flex font-semibold text-xl text-main2-1">Find the best opportunities for your skills and wallet</div>
        <div className="flex font-black text-5xl text-white">Programs Discovery</div>
      </div>

      <div className="mx-8">
        <ProgramsSearch />
      </div>

      <div>Campaigns & top-paying programs</div>
      <div>
        list {/* TODO: List component */}
      </div>

      <div>Collaboration Opportunities</div>
      <div>
        list {/* TODO: List component */}
      </div>

      <div>Programs in the Internet & Online Services industry</div>
      <div>
        list {/* TODO: List component */}
      </div>

      <div>Assets you might be interested in</div>
      <div>
        list {/* TODO: List component */} 
      </div>

      <div>Technologies you might be interested in</div>
      <div>
        list {/* TODO: List component */} 
      </div>

    </div>
  )
}

export default Programs
