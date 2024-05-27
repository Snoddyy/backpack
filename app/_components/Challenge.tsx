/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Section } from "./Section";

type ChallengeOption = {
  name: string;
  description: string;
  icon: string;
  image: string;
  isDisabled?: boolean;
};

const ChallengeOption: ChallengeOption[] = [
  {
    name: "STRATEGY",
    description:
      "Select the ideal class that best fits your playstyle. Pick the best items to put in your backpack that helps you make the best build for your hero. Expand your backpack and optimize your item layouts to be able to fit more items. Select powerful Augments to your class as you continue to win battles. Your strategy in building out your character will prove useful in attaining victory.",
    icon: "/images/BL_Strategy_Icon.svg",
    image: "/images/BPL_Website_Strategy.jpg",
  },
  {
    name: "CRAFT",
    description:
      "Place two or more items with each other in your backpack to craft new and exciting items. This can be an upgraded version of your weapon or armor, a more potent potion, or a completely new item with different stats and bonuses. Discover new item combinations as you continue to collect different kinds of items into your backpack.",
    icon: "/images/BL_Craft_Icon.svg",
    image: "/images/BPL_Website_Crafting.jpg",
  },
  {
    name: "COLLECT",
    description:
      "Collect different kinds of items to create your ideal build. Weapons deal damage directly to your opponent, armor protects you from damage, accessories help you cast power buffs or debuffs, and consumables like potions and food restore your health and cleanse you.",
    icon: "/images/BL_Collect_Icon.svg",
    image: "/images/BPL_Website_Collect.jpg",
  },
  {
    name: "TRADE",
    description:
      "The shop will keep updating its inventory for items every time you return from battles. Use your gold from battles and buy powerful items that strike your fancy. If the shop does not have any item you want, you can reroll to have a new set of items. You can also sell unwanted items to get some of your gold back. Finally, you can also listen to the shopkeeper to receive tips about the game, or discover new crafting recipes.",
    icon: "/images/BL_Trade_Icon.svg",
    image: "/images/BPL_Website_Trade.jpg",
  },
  {
    name: "BATTLE",
    description:
      "Put your backpacking skills to the test as you engage with opponents. The kind of items that you brought are crucial to your victory. Damage your opponent with your weapons. Cast buffs to augment your abilities and debuffs to slow your opponent down.",
    icon: "/images/BL_Battle_Icon.svg",
    image: "/images/BPL_Website_battle.jpg",
  },
];

const Challenge: React.FC = () => {
  const [activeClass, setActiveClass] = useState<ChallengeOption>(
    ChallengeOption[0]
  );

  const setActive = (selectedClass: ChallengeOption) => {
    setActiveClass(selectedClass);
  };

  const navigateChallenge = (direction: "previous" | "next") => {
    let currentIndex = ChallengeOption.findIndex(
      (c) => c.name === activeClass.name
    );
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex + 1;
      while (
        newIndex < ChallengeOption.length &&
        ChallengeOption[newIndex].isDisabled
      ) {
        newIndex++;
      }
      newIndex = newIndex % ChallengeOption.length;
      while (ChallengeOption[newIndex].isDisabled) {
        newIndex = (newIndex + 1) % ChallengeOption.length;
      }
    } else {
      newIndex = currentIndex - 1;
      while (newIndex >= 0 && ChallengeOption[newIndex].isDisabled) {
        newIndex--;
      }
      newIndex = (newIndex + ChallengeOption.length) % ChallengeOption.length;
      while (ChallengeOption[newIndex].isDisabled) {
        newIndex =
          (newIndex + ChallengeOption.length - 1) % ChallengeOption.length;
      }
    }

    setActiveClass(ChallengeOption[newIndex]);
  };

  return (
    <Section className="h-screen w-full flex flex-col items-center justify-between bg-slate-900 text-white py-12 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 "></div>
        <img
          src="/images/ChallengeBackground.png"
          alt="hero background"
          className="object-cover w-full h-full mix-blend-luminosity"
        />
      </div>

      <div className="flex flex-col items-center justify-start mt-8 lg:mt-0 z-10">
        <h2 className=" font-beau text-6xl lg:text-8xl font-bold italic mb-4 text-center ">
          PLAY YOUR WAY <br /> TO VICTORY
        </h2>
        <div className="flex justify-center flex-col lg:justify-start items-center">
          <div className="flex items-center justify-center mx-4 my-4">
            {ChallengeOption.map((classOption) => (
              <div
                key={classOption.name}
                onClick={() =>
                  !classOption.isDisabled && setActive(classOption)
                }
                className={`mx-4 flex flex-col items-center cursor-pointer ${
                  activeClass.name === classOption.name
                    ? "text-yellow-400"
                    : classOption.isDisabled
                    ? "text-gray-200 opacity-20 cursor-not-allowed"
                    : "text-gray-400"
                }`}
              >
                <div className="relative">
                  <img
                    src={
                      activeClass.name === classOption.name
                        ? "/images/BP_Circle_Full.png"
                        : "/images/BP_Circle_Empty.png"
                    }
                    alt="Circle"
                    className="w-18 h-18"
                  />
                  <img
                    src={classOption.icon}
                    alt={classOption.name}
                    className={`w-10 h-10 absolute top-5 left-5 ${
                      activeClass.name === classOption.name
                        ? "opacity-100"
                        : "opacity-20"
                    }`}
                  />
                </div>
                <span
                  className={`text-lg uppercase mt-1 font-beau  tracking-wider font-bold ${
                    activeClass.name === classOption.name
                      ? "bg-gradient-to-b from-[#FEE4D3] to-[#C9A27F] bg-clip-text text-transparent "
                      : ""
                  }`}
                >
                  {classOption.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <button
              onClick={() => navigateChallenge("previous")}
              aria-label="Previous"
              className="p-4  mb-4"
            >
              <img
                src="/images/BPL_Website_Arrow_L.svg"
                alt="Left Arrow"
                className="w-6 h-6"
              />
            </button>
            <img
              src={activeClass.image}
              alt={`${activeClass.name} character`}
              className="max-w-xs lg:max-w-lg xl:max-w-xl mx-auto object-cover border-2 border-white"
            />
            <button
              onClick={() => navigateChallenge("next")}
              aria-label="Next"
              className="p-4 mb-4"
            >
              <img
                src="/images/BPL_Website_Arrow_R.svg"
                alt="Right Arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
        <p className="font-beau text-transparent font-bold italic text-4xl bg-gradient-to-b from-[#FEE4D3] to-[#C9A27F] bg-clip-text mt-4">
          {activeClass.name}
        </p>
        <div className="mt-4 h-42">
          <p className="text-base text-center text-gray-200 px-40 lg:text-sm max-w-4xl">
            {activeClass.description}
          </p>
        </div>
      </div>
      <button className="rounded-full hover:opacity-80 transition-opacity mt-10">
        <Image
          src="https://i.imgur.com/wysVGFK.png"
          alt="Wishlist Button"
          width={200}
          height={50}
        />
      </button>
    </Section>
  );
};

export default Challenge;
