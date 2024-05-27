/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="h-screen w-full relative bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/9tKD8lc.jpg"
          alt="hero background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 w-full h-full flex">
        <div className="flex-1 hidden lg:block"></div>
        <div className="flex-1 flex items-center justify-center p-4 text-white lg:min-h-screen">
          <div className="max-w-md">
            <img
              src="/images/BPL_Logo.svg"
              alt="Backpack Legends Logo"
              className="w-96 mb-4"
            />
            <p className="text-xl mb-4 font-bold text-center">
              PVP AUTO BATTLER RPG
            </p>
            <div className="flex flex-row justify-center items-center mb-6">
              <p className="text-sm font-medium mr-2">Soon available on</p>
              <img
                src="https://i.imgur.com/LVmca6A.png"
                alt="Mobile Icon"
                className="h-6 mr-2"
              />
              <img
                src="https://i.imgur.com/iNpmfNJ.png"
                alt="Windows Icon"
                className="h-6"
              />
            </div>
            <div className="flex flex-col mb-8 justify-center items-center gap-4">
              <button className="rounded-full px-8 hover:opacity-80 transition-opacity">
                <img
                  src="https://i.imgur.com/wysVGFK.png"
                  alt="Wishlist Button"
                  width={200}
                  height={50}
                />
              </button>
              <button className="rounded-full px-8 hover:opacity-80 transition-opacity">
                <img
                  src="https://i.imgur.com/Sv8ifH9.png"
                  alt="Newsletter Button"
                  width={200}
                  height={50}
                />
              </button>
              <button className="rounded-full px-8 hover:opacity-80 transition-opacity">
                <img
                  src="https://i.imgur.com/LAUuzqQ.png"
                  alt="Press Kit Button"
                  width={200}
                  height={50}
                />
              </button>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <a
                href="https://tiktok.com"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://i.imgur.com/hsTsPvX.png"
                  alt="TikTok Logo"
                  className="h-8"
                />
              </a>
              <a
                href="https://twitter.com"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://i.imgur.com/9X2mmRN.png"
                  alt="Twitter Logo"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
