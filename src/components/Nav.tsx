import { CgLogOut } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GiCardBurn } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <AiOutlineHome />
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};
