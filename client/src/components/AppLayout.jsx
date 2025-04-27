import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BuilderCanvas from "./BuilderCanvas";
import { useState } from "react";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen bg-background-light dark:bg-background-dark">
      <Topbar />

      <Sidebar />

      <main className="container mx-auto">
        <BuilderCanvas />
      </main>
    </div>
  );
}

export default AppLayout;
