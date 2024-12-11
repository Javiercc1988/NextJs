import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-4 m-2 gap-4 rounded text-lg">
      <Link href={"/"} className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
