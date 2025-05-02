import { useState } from "react";
import Accordion from "./Accordion";
import Heading from "./Heading";
import { Link, NavLink } from "react-router-dom";

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
  // const [homeSection, setHomeSection] = useState({ ...home });

  return (
    <aside className="w-full h-full row-start-1 py-2 overflow-y-auto bg-white dark:bg-background-dark border-e-[1px] border-light row-span-12 dark:border-border-dark">
      <div>
        <Heading variant="h2">PortfolioBuilder</Heading>
        <Heading variant="h3">John Doe's Workspace</Heading>
      </div>
      <nav>
        <ul>
          <NavLink></NavLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
