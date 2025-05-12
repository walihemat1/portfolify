import { NavLink } from "react-router-dom";

function SidebarItem({ to, children }) {
  return (
    <li className="flex">
      <NavLink
        to={to}
        className="w-full px-3 py-2 text-gray-700 rounded-md dark:text-text-secondary-dark active:text-indigo-700 active:bg-indigo-50"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
