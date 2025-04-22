import Accordion from "./Accordion";

function Sidebar() {
  return (
    <aside className="w-full h-full row-start-1 px-5 py-2 border-e-2 row-span-12 border-border-light dark:border-border-dark">
      <Accordion />
    </aside>
  );
}

export default Sidebar;
