import { MdHome } from "react-icons/md";
import {
  FaBriefcase,
  FaCode,
  FaCommentDots,
  FaEnvelope,
  FaGear,
  FaGlobe,
  FaGraduationCap,
  FaHouse,
  FaMessage,
  FaNewspaper,
  FaPalette,
} from "react-icons/fa6";

import Accordion from "./Accordion";
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
  // const [, setHomeSection] = useState({ ...home });

  return (
    <aside className="w-full h-full row-start-1 py-2 overflow-y-auto bg-white dark:bg-background-dark border-e-[1px] border-light row-span-12 dark:border-border-dark md:px-4 md:py-4">
      <div className="flex items-center gap-4">
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
        <Heading variant="h3" styles="uppercase mb-4 mt-7">
          Content Sections
        </Heading>
        <ul className="flex flex-col space-y-1">
          <SidebarItem to="/home">
            <FaHouse size={20} />
            <span>Hero</span>
          </SidebarItem>
          <SidebarItem>
            <FaBriefcase size={20} />
            <span>Projects</span>
          </SidebarItem>
          <SidebarItem>
            <FaCode size={20} />
            <span>Skills</span>
          </SidebarItem>
          <SidebarItem>
            <FaNewspaper size={20} />
            <span>Blog</span>
          </SidebarItem>
          <SidebarItem>
            <FaGraduationCap size={20} />
            <span>Education</span>
          </SidebarItem>
          <SidebarItem>
            <FaCommentDots size={20} />
            <span>Testimonials</span>
          </SidebarItem>
          <SidebarItem>
            <FaEnvelope size={20} />
            <span>Contact</span>
          </SidebarItem>
        </ul>

        <Heading variant="h3" styles="uppercase mb-4 mt-7">
          Settings
        </Heading>

        <ul className="flex flex-col space-y-1">
          <SidebarItem>
            <FaGear size={20} />
            <span>Settings</span>
          </SidebarItem>
          <SidebarItem>
            <FaPalette size={20} />
            <span>Appearance</span>
          </SidebarItem>
          <SidebarItem>
            <FaGlobe size={20} />
            <span>Domain</span>
          </SidebarItem>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
