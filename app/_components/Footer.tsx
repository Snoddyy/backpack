import { Section } from "./Section";
import { DiscordIcon } from "./icons/DiscordIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YouTubeIcon } from "./icons/YoutubeIcon";

export const Footer = () => {
  return (
    <Section className="bg-zinc-950 text-white h-[50vh]">
      <div className="flex flex-col justify-center h-full relative font-ddin">
        <div className="flex items-center justify-center h-full relative gap-32">
          <button className=" flex items-center justify-center w-48 px-8 py-4 gap-4 border bg-[#5662FC]">
            <div className="flex flex-col items-start justify-center ">
              <p className="text-sm">Join us on</p>
              <h1 className="text-2xl font-bold">Discord</h1>
            </div>
            <DiscordIcon width={40} height={40} />
          </button>
          <button className=" flex items-center justify-center  w-48 px-8 py-4 gap-4 border bg-black">
            <div className="flex flex-col items-start justify-center ">
              <p className="text-sm">Join us on</p>
              <h1 className="text-2xl font-bold">X</h1>
            </div>
            <TwitterIcon width={40} height={40} />
          </button>
          <button className=" flex items-center justify-center  w-48 px-8 py-4 gap-4 border bg-[#282828]">
            <div className="flex flex-col items-start justify-center ">
              <p className="text-sm">Join us on</p>
              <h1 className="text-2xl font-bold">Youtube</h1>
            </div>
            <YouTubeIcon width={40} height={40} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full relative gap-8">
          <p className="font-ddin font-bold italic text-4xl">
            GET THE LATEST BACKPACK LEGENDS UPDATES
          </p>
          <div className="flex justify-center gap-8">
            <div className="  border flex items-center border-none">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-80 opacity-70 text-neutral-900 text-lg font-ddin tracking-tight px-4 py-2 outline-none rounded-3xl"
              />
            </div>
            <button
              type="submit"
              className="font-beau font-bold text-lg rounded-3xl border-2 text-orange-200 border-orange-200 py-2 px-12"
            >
              SUBMIT
            </button>
          </div>
          <p className="text-sm text-[#c7c7c7]">
            © 2023 Jurassic Studios. All rights reserved. |
            <a href="">Terms & Conditions</a> | <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>
    </Section>
  );
};
