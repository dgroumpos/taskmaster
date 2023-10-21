"use client";

import Link from "next/link";
import React from "react";
import { GiMagicBroom } from "react-icons/gi";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

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
            className={classNames({
              "text-amber-950": link.href === currentPath,
              "text-amber-600": link.href !== currentPath,
              "hover:text-amber-800 transition-colors": true,
            })}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
