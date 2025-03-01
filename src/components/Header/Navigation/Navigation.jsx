import { Link } from "react-scroll";
import { links } from "../../../data/navigation";
import { NavList } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavList>
      {links.map((link) => (
        <Link
          activeClass="active"
          to={link.url.slice(1)}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </NavList>
  );
};

export default Navigation;
