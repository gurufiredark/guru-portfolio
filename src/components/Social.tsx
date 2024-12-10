"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

    const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/gurufiredark",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/gabrielrodriguesguru/",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/5544984360035?text=Olá%20Gabriel,%20tudo%20bem?",
    },
  ];

const Social = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {socialLinks.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-purple-500 transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;