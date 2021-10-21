import { NavbarWrapper, NavItems, NavItem } from "./styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavItems>
        <NavItem to="/">Home</NavItem>
        {/* <NavItem to="/">Read</NavItem> */}
        <NavItem to="/characters">Characters</NavItem>
      </NavItems>
    </NavbarWrapper>
  );
};

export default Navbar;
