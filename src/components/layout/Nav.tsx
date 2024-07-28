import NavLink from "../common/NavLink";
import { CgLogOut } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GiCardBurn } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

export default function Nav() {
  return (
    <nav className="fixed bg-normal-black max-md:400 h-screen border-r-2">
      <ul className="pt-12">
        <NavLink link="/" name="Home" icon={<AiOutlineHome/>}/>
        <NavLink link="/decks" name="Decks" icon={<GiCardBurn/>}/>
        <NavLink link="/dashboard" name="Dashboard" icon={<BsGraphUp/>}/>
        <NavLink link="/friends" name="Friends" icon={<FaUserFriends/>}/>
        <NavLink link="/logout" name="Logout" icon={<CgLogOut/>}/>
      </ul>
    </nav>
  );
};
