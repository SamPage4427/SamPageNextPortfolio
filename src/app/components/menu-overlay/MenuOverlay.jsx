import NavLink from "../nav/NavLInk";

function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default MenuOverlay;
