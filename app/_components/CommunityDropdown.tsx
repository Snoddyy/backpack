import { FC } from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { MediumIcon } from "./icons/MediumIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YouTubeIcon } from "./icons/YoutubeIcon";

interface SocialMediaLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

interface CommunityDropdownProps {
  isOpen: boolean;
}

const CommunityDropdown: FC<CommunityDropdownProps> = ({ isOpen }) => {
  const socialMediaLinks: SocialMediaLink[] = [
    { name: "Discord", icon: <DiscordIcon />, url: "#discord" },
    { name: "X/Twitter", icon: <TwitterIcon />, url: "#twitter" },
    { name: "Medium", icon: <MediumIcon />, url: "#medium" },
    { name: "Instagram", icon: <InstagramIcon />, url: "#instagram" },
    { name: "YouTube", icon: <YouTubeIcon />, url: "#youtube" },
  ];

  const dropdownStyles = isOpen
    ? "block absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 w-40 rounded-b-xl shadow-md bg-neutral-900 ring-1 ring-black ring-opacity-5"
    : "hidden";

  return (
    <div className={dropdownStyles}>
      <ul>
        {socialMediaLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              className="flex items-center justify-between px-4 py-2 text-[#c7c7c7] hover:text-white"
            >
              {link.name}
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityDropdown;
