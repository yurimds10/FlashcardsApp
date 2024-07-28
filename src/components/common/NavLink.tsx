interface INavLink {
  link: string,
  icon?: any,
  name: string
}

export default function NavLink(props: INavLink) {
  return (
    <li
      className="
        list-item
        p-2
        mb-1
        hover:bg-normal-magenta
        hover:cursor-pointer
      "
    >
      <a className="flex items-center">
        {props.icon}
        <span className="ml-3">{props.name}</span>
      </a>
    </li>
  );
};
