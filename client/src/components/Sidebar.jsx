import {
  FaBriefcase,
  FaCode,
  FaCommentDots,
  FaEnvelope,
  FaGear,
  FaGlobe,
  FaGraduationCap,
  FaHouse,
  FaNewspaper,
  FaPalette,
} from "react-icons/fa6";

import Heading from "./Heading";

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
  return (
    <aside className="w-full overflow-hidden h-full row-start-1 py-2 bg-white dark:bg-gray-900 border-e-[1px] border-light row-span-12 dark:border-border-dark md:px-4 md:py-4">
      <div className="flex items-center gap-4">
        <img
          src="/images/profile-img.jfif"
          alt="profile-img"
          className="object-cover object-center rounded-full md:w-10 md:h-10"
        />
        <div>
          <Heading variant="h2" styles="text-gray-800 dark:text-white">
            Your Portfolio
          </Heading>
          <p className="text-xs text-gray-500 dark:text-gray-400">Edit Mode</p>
        </div>
      </div>

      <nav className="overflow-y-auto h-[95%] scrollbar-hide mt-4">
        <Heading
          variant="h3"
          styles="uppercase mb-4 mt-7 dark:text-gray-400 text-gray-500"
        >
          Content Sections
        </Heading>
        <ul className="flex flex-col space-y-1">
          <SidebarItem to="/hero">
            <FaHouse size={20} />
            <span>Hero</span>
          </SidebarItem>
          <SidebarItem to="/projects">
            <FaBriefcase size={20} />
            <span>Projects</span>
          </SidebarItem>
          <SidebarItem to="/skills">
            <FaCode size={20} />
            <span>Skills</span>
          </SidebarItem>
          <SidebarItem to="blog">
            <FaNewspaper size={20} />
            <span>Blog</span>
          </SidebarItem>
          <SidebarItem to="education">
            <FaGraduationCap size={20} />
            <span>Education</span>
          </SidebarItem>
          <SidebarItem to="testimonials">
            <FaCommentDots size={20} />
            <span>Testimonials</span>
          </SidebarItem>
          <SidebarItem to="contact">
            <FaEnvelope size={20} />
            <span>Contact</span>
          </SidebarItem>
        </ul>

        <Heading
          variant="h3"
          styles="uppercase mb-4 mt-7 dark:text-gray-400 text-gray-500"
        >
          Settings
        </Heading>

        <ul className="flex flex-col space-y-1">
          <SidebarItem to="settings">
            <FaGear size={20} />
            <span>Settings</span>
          </SidebarItem>
          <SidebarItem to="">
            <FaPalette size={20} />
            <span>Appearance</span>
          </SidebarItem>
          <SidebarItem to="">
            <FaGlobe size={20} />
            <span>Domain</span>
          </SidebarItem>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
