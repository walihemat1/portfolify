import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BuilderCanvas from "./BuilderCanvas";

function AppLayout() {
  return (
    <div className="grid grid-cols-[17rem_1fr] grid-rows-[auto_1fr] h-screen bg-gray-50">
      <Topbar />

      <Sidebar />

      <main className="container mx-auto">
        <BuilderCanvas />
      </main>
    </div>
  );
}

export default AppLayout;
