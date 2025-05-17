import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import Logo from "./Logo";

const AppNavbar = () => {
  return (
    <Navbar className="flex-row md:px-20 md:py-6">
      <NavbarBrand className="md:px-[28px] md:py-8 w-fit">
        <Logo/>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex md:gap-8 w-fit" justify="center">
        <NavbarItem isActive className="navbar-item">
          <Link color="foreground" href="#">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link aria-current="page" href="#">
            ABOUT ME
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link color="foreground" href="#">
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link color="foreground" href="#">
            BLOGS
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#">Talk to Me</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
