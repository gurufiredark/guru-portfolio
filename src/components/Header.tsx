"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hobbies", label: "Hobbies" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-black text-white sticky top-0 w-full z-50 border-b border-white/20">
      <nav className="container bg-black mx-auto flex items-center justify-between p-6 gap-4">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`${
                link.href === pathname ? "text-purple-600" : "text-white"
              } capitalize hover:text-purple-600 transition-all`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
