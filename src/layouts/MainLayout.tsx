import SideBar from "../components/SideBar";

function MainLayout(){
  return (
    <div className="flex flex-row">
      <SideBar />
      <div>Test</div>
    </div>
  );
}

export default MainLayout;