"use client";

import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import CommunityDropdown from "./CommunityDropdown";
import { BackpackLogo } from "./icons/BackpackLogo";

interface NavLink {
  name: string;
  href: string;
  linkName: LinkNames;
}

enum LinkNames {
  Game = "game",
  About = "about",
  Season1 = "season1",
  Leaderboard = "leaderboard",
  PatchNote = "patchnote",
  Community = "community",
}

type NavClickHandler = (name: LinkNames) => void;

const Header: FC = (): ReactElement => {
  const [activeLink, setActiveLink] = useState<LinkNames>(LinkNames.Game);
  const [isCommunityOpen, setIsCommunityOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "GAME", href: "#game", linkName: LinkNames.Game },
    { name: "ABOUT", href: "#about", linkName: LinkNames.About },
    { name: "SEASON 1", href: "#season1", linkName: LinkNames.Season1 },
    {
      name: "LEADERBOARD",
      href: "#leaderboard",
      linkName: LinkNames.Leaderboard,
    },
    {
      name: "GAME UPDATE",
      href: "#patchnote",
      linkName: LinkNames.PatchNote,
    },
  ];

  const getLinkClasses = (name: LinkNames): string => {
    return `inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full transition-all duration-150 ${
      activeLink === name
        ? "bg-zinc-800 rounded-3xl border border-orange-200 text-white"
        : "text-[#c7c7c7] hover:bg-transparent hover:text-white border border-transparent"
    }`;
  };

  const handleNavClick: NavClickHandler = (name) => {
    setActiveLink(name);
    if (name === LinkNames.Community) {
      setIsCommunityOpen(!isCommunityOpen);
    } else {
      setIsCommunityOpen(false);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="font-ddin bg-neutral-900 text-white top-0 fixed w-full z-50">
      <nav className="flex items-center justify-between h-[88px] py-3 text-xs">
        <div className="flex">
          <Link href="/" className="ml-4">
            <BackpackLogo />
          </Link>
          <ul className="hidden md:flex flex-row gap-2 items-center ml-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={getLinkClasses(link.linkName)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.linkName);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                onClick={() => handleNavClick(LinkNames.Community)}
                className={
                  getLinkClasses(LinkNames.Community) + " relative z-10"
                }
                aria-haspopup="true"
                aria-expanded={isCommunityOpen}
              >
                COMMUNITY
                <ChevronDownIcon
                  className={`ml-2 w-5 h-5 transition-transform duration-150 ${
                    isCommunityOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isCommunityOpen && (
                <CommunityDropdown isOpen={isCommunityOpen} />
              )}
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button
            className="mr-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="pr-6 hidden md:block">
            <button className="font-beau font-bold text-lg rounded-3xl border-2 text-orange-200 border-orange-200 py-2 px-12">
              WISHLIST
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block w-full max-w-xs px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.linkName);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
