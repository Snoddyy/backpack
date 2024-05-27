/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Section } from "./Section";

export const Battle = () => {
  return (
    <Section className="h-screen w-full relative bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/BattleBackground.png"
          alt="hero background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full relative">
        <p className="text-white font-beau font-bold text-4xl mb-4 italic">
          BATTLE NOW
        </p>
        <img
          src="/images/BPL_Logo.svg"
          alt="Backpack Legends Logo"
          className="w-[38rem] mb-4"
        />
        <button className="rounded-full hover:opacity-80 transition-opacity mt-10">
          <Image
            src="https://i.imgur.com/wysVGFK.png"
            alt="Wishlist Button"
            width={200}
            height={50}
          />
        </button>
      </div>
    </Section>
  );
};
