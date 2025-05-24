import { NavLink } from "react-router-dom";

function SidebarItem({ to, children }) {
  return (
    <li className="flex">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center justify-start w-full gap-2 px-3 py-2 font-semibold text-gray-700 rounded-md dark:text-text-secondary-dark ${
            isActive ? "text-indigo-700 bg-indigo-50" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
