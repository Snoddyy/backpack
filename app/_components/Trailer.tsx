/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Section } from "./Section";

export const Trailer = () => {
  return (
    <Section className="h-screen w-full relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-80"></div>
        <img
          src="https://i.imgur.com/rzx6Uad.png"
          alt="hero background"
          className="object-cover w-full h-full mix-blend-luminosity"
        />
      </div>

      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-40 px-4 h-full">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-white text-4xl md:text-5xl font-beau font-bold italic mb-2">
              BECOME THE
            </h1>
            <h2 className="text-cyan-400 text-6xl md:text-8xl font-beau font-bold italic">
              LEGEND
            </h2>
            <div className="mt-4 md:mt-8">
              <h3 className="text-white text-2xl md:text-4xl font-beau font-bold tracking-wide">
                BATTLE OTHER PLAYERS
              </h3>
              <p className="text-white text-base md:text-2xl font-normal font-['D-DIN'] leading-6 md:leading-7">
                Pick your class to craft and build powerful weapons, potion and
                mythical items. Start battling with the other!
              </p>
              <button className="rounded-full m-auto md:m-0 hover:opacity-80 transition-opacity mt-4">
                <Image
                  src="https://i.imgur.com/wysVGFK.png"
                  alt="Wishlist Button"
                  width={200}
                  height={50}
                  className="mt-8"
                />
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto md:mx-0 md:max-w-none">
            {/* video placeholder */}
            <img
              src="https://i.imgur.com/NLXsrom.png"
              alt="Video placeholder"
              className="w-full h-auto max-w-screen-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
