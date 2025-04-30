import Heading from "./Heading";

function Topbar() {
  return (
    <header className="w-full col-start-2 border-b-[1px] h-14 border-light dark:border-border-dark bg-white flex items-center">
      <Heading variant="h2">Dashboard</Heading>
    </header>
  );
}

export default Topbar;
