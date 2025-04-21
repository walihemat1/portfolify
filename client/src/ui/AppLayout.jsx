import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BuilderCanvas from "./BuilderCanvas";

function AppLayout() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <BuilderCanvas />
    </>
  );
}

export default AppLayout;
