import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BuilderCanvas from "./BuilderCanvas";

function AppLayout() {
  return (
    <div className="grid">
      <div className="col-span-2">
        <Topbar />
      </div>
      <Sidebar />
      <BuilderCanvas />
    </div>
  );
}

export default AppLayout;
