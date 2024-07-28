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
        py-2
        px-8
        mb-1
        mx-2
        rounded-xl
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
