import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BuilderCanvas from "./BuilderCanvas";

function AppLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-52">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1">
        <div className="h-16">
          <Topbar />
        </div>
        <main className="flex-1 overflow-y-auto">
          <BuilderCanvas />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
