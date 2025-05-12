import { useState } from "react";
import Accordion from "./Accordion";
import Heading from "./Heading";
import { Link, NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";

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
    <aside className="w-full h-full row-start-1 py-2 overflow-y-auto bg-white dark:bg-background-dark border-e-[1px] border-light row-span-12 dark:border-border-dark md:px-4 md:py-4">
      <div className="flex items-center gap-4 mb-7">
        <img
          src="/images/profile-img.jfif"
          alt="profile-img"
          className="object-cover object-center rounded-full md:w-10 md:h-10"
        />
        <div>
          <Heading variant="h2">Your Portfolio</Heading>
          <p className="text-xs text-gray-500">Edit Mode</p>
        </div>
      </div>

      <nav className="">
        <Heading variant="h3" styles="uppercase mb-4">
          Content Sections
        </Heading>
        <ul className="flex flex-col space-y-1">
          <SidebarItem to="/home">Hero</SidebarItem>
          <SidebarItem>Projects</SidebarItem>
          <SidebarItem>Skills</SidebarItem>
          <SidebarItem>Blog</SidebarItem>
          <SidebarItem>Education</SidebarItem>
          <SidebarItem>Testimonials</SidebarItem>
          <SidebarItem>Contact</SidebarItem>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
