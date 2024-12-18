"use client";
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
    <div className="flex bg-black  flex-row items-center justify-center gap-4">
      {socialLinks.map((item, index) => {
        return (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-purple-500 transform hover:scale-110 transition-transform duration-300"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;