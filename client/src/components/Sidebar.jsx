import Accordion from "./Accordion";

const home = {
  sectionType: "home",
  elements: [
    {
      type: "heading",
      text: "Welcome to My Portfolio",
    },
    {
      type: "paragraph",
      text: "I'm a full-stack developer building amazing apps.",
    },
    {
      type: "button",
      text: "View My Work",
      link: "#projects",
    },
    {
      type: "image",
      src: "default-home-image.jpg",
    },
  ],
};

function Sidebar() {
  const [homeSection, setHomeSection] = useState({ ...home });

  return (
    <aside className="w-full h-full row-start-1 py-2 overflow-y-auto border-e-2 row-span-12 border-border-light dark:border-border-dark">
      <Accordion homeSection={homeSection} setHomeSection={setHomeSection} />
    </aside>
  );
}

export default Sidebar;
