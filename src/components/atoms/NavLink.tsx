import { Link } from "react-router-dom";

interface INavLink {
  link: string,
  icon?: any,
  name: string
}

export const NavLink = (props: INavLink) => {
  return (
    <li className="list-item p-2 mb-1 hover:bg-normal-yellow">
      <Link to={props.link} className="flex items-center">
        {props.icon}
        <span className="ml-3">{props.name}</span>
      </Link>
    </li>
  );
};
