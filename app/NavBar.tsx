import Link from "next/link";
import React from "react";
import { GiMagicBroom } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/tasks", label: "Tasks" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 items-center px-5 mb-5">
      <Link href="/">
        <GiMagicBroom />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-amber-600 hover:text-amber-950 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
