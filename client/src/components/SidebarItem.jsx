import { NavLink } from "react-router-dom";

function SidebarItem({ to, children }) {
  return (
    <li>
      <NavLink>{children}</NavLink>
    </li>
  );
}

export default SidebarItem;
