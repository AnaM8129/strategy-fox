import { React } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_li">
          <NavLink
            to="/levels"
            className={({ isActive }) => (isActive ? "navlink" : "")}
          >
            <AiOutlineHome className="navbar_icon" />
          </NavLink>
        </li>
        <li className="navbar_li">
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "navlink" : "")}
          >
            <BsBookmark className="navbar_icon" />
          </NavLink>
        </li>
        <li className="navbar_li">
          <NavLink
            to="/foro"
            className={({ isActive }) => (isActive ? "navlink" : "")}
          >
            <BiMessageAltDetail className="navbar_icon" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
