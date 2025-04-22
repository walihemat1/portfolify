import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BuilderCanvas from "./BuilderCanvas";

// function AppLayout() {
//   return (
//     <div className="flex h-screen">
//       <aside className="w-52">
//         <Sidebar />
//       </aside>
//       <div className="flex flex-col flex-1">
//         <div className="h-16">
//           <Topbar />
//         </div>
//         <main className="flex-1 overflow-y-auto">
//           <BuilderCanvas />
//         </main>
//       </div>
//     </div>
//   );
// }

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Topbar />

      <Sidebar />

      <main>
        <BuilderCanvas />
      </main>
    </div>
  );
}

export default AppLayout;
