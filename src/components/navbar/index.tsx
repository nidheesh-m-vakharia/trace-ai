import { NavbarThemeMenu } from "./NavbarThemeMenu";
import { NavbarModeSwitch } from "./NavbarModeSwitch";
import { NavbarClerkButtons } from "./NavbarClerkButtons";
import { NavbarLogo } from "./NavbarLogo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <NavbarLogo />
      <div className="flex items-center gap-10">
        <NavbarThemeMenu />
        <NavbarModeSwitch />
        <NavbarClerkButtons />
      </div>
    </nav>
  );
};

export default Navbar;
