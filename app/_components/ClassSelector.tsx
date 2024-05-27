/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Section } from "./Section";

type ClassOption = {
  name: string;
  description: string;
  icon: string;
  image: string;
  isDisabled?: boolean;
};

const classOptions: ClassOption[] = [
  {
    name: "DUELIST",
    description:
      "The Duelist class focuses on Speed and dealing Critical Hits. They are often the fastest to deal damage and can potentially deal the highest burst damage with their critical. However, they do not have a lot of innate options with regards to their survivability and is the squishiest of them all.",
    icon: "/images/BL_Duelist_Icon.svg",
    image: "/images/BPL_Duelist_Original.png",
  },
  {
    name: "MAGICIAN",
    description:
      "The Magician class specializes on the manipulation of Buffs and Debuffs. Out of the 3 classes, the magician class is the most versatile and utilitarian. They control the flow of battle by casting buffs on themselves, or to shut down their enemies with Debuffs. On the downside, apart from buffs, they do not have options to further improve their flat and burst damage, and defense.",
    icon: "/images/BL_Mage_Icon.svg",
    image: "/images/BPL_Mage_Original.png",
  },
  {
    name: "KNIGHT",
    description:
      "The Knight class focus primarily in the areas of defense and flat damage. Out of the 3 classes the Knight has the highest potential survivability but they have limited options when it comes to their attack speed and accuracy.",
    icon: "/images/BL_Knight_Icon.svg",
    image: "/images/BPL_Knight_Original.png",
  },
  {
    name: "SOON",
    description: "...",
    icon: "/images/BL_ComingSoon_Icon.svg",
    image: "/images/BPL_Knight_Original.png",
    isDisabled: true,
  },
];

const ClassSelector: React.FC = () => {
  const [activeClass, setActiveClass] = useState<ClassOption>(classOptions[0]);

  const setActive = (selectedClass: ClassOption) => {
    setActiveClass(selectedClass);
  };

  const navigateClass = (direction: "previous" | "next") => {
    let currentIndex = classOptions.findIndex(
      (c) => c.name === activeClass.name
    );
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex + 1;
      while (
        newIndex < classOptions.length &&
        classOptions[newIndex].isDisabled
      ) {
        newIndex++;
      }
      newIndex = newIndex % classOptions.length;
      while (classOptions[newIndex].isDisabled) {
        newIndex = (newIndex + 1) % classOptions.length;
      }
    } else {
      newIndex = currentIndex - 1;
      while (newIndex >= 0 && classOptions[newIndex].isDisabled) {
        newIndex--;
      }
      newIndex = (newIndex + classOptions.length) % classOptions.length;
      while (classOptions[newIndex].isDisabled) {
        newIndex = (newIndex + classOptions.length - 1) % classOptions.length;
      }
    }

    setActiveClass(classOptions[newIndex]);
  };

  return (
    <Section className="font-beau h-screen w-full flex flex-col lg:flex-col items-center justify-between bg-slate-900 text-white py-12 px-4">
      <div className="mb-8 italic">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          <p> CHOOSE YOUR</p>
          <p className="text-8xl bg-gradient-to-b from-[#FEE4D3] to-[#C9A27F] bg-clip-text text-transparent">
            CLASS
          </p>
        </h2>
      </div>

      <div className="flex-grow h-full flex flex-col lg:flex-row items-start justify-between w-full">
        <div className="lg:flex-1 flex flex-col items-center justify-center mt-8 lg:mt-0 flex-shrink-0 h-full">
          <div className="flex justify-center lg:justify-center items-center">
            <button
              onClick={() => navigateClass("previous")}
              aria-label="Previous"
              className="p-2"
            >
              <img
                src="/images/BPL_Website_Arrow_L.svg"
                alt="Left Arrow"
                className="w-6 h-6"
              />
            </button>

            <div className="flex items-center justify-center mx-4">
              {classOptions.map((classOption) => (
                <div
                  key={classOption.name}
                  onClick={() =>
                    !classOption.isDisabled && setActive(classOption)
                  }
                  className={`mx-2 flex flex-col items-center cursor-pointer ${
                    activeClass.name === classOption.name
                      ? "text-yellow-400"
                      : classOption.isDisabled
                      ? "text-gray-200 opacity-20 cursor-not-allowed "
                      : "text-gray-400"
                  }`}
                >
                  <div className="relative w-24 h-24">
                    {activeClass.name === classOption.name && (
                      <img
                        src="/images/BP_Circle_Class.png"
                        alt="Class Circle"
                        className="w-full h-full object-contain"
                      />
                    )}
                    <img
                      src={classOption.icon}
                      alt={classOption.name}
                      className={`w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        activeClass.name === classOption.name
                          ? "opacity-100 "
                          : "opacity-20"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm uppercase mt-1 font-beau  tracking-wider font-bold ${
                      activeClass.name === classOption.name
                        ? "bg-gradient-to-b from-[#FEE4D3] to-[#C9A27F] bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {classOption.name}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigateClass("next")}
              aria-label="Next"
              className="p-2"
            >
              <img
                src="/images/BPL_Website_Arrow_R.svg"
                alt="Right Arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
          <div className="mt-4 lg:mt-8 h-60 overflow-y-auto">
            <p className="text-base text-gray-200 px-40">
              {activeClass.description}
            </p>
          </div>
          <button className="rounded-full hover:opacity-80 transition-opacity mt-10">
            <Image
              src="https://i.imgur.com/wysVGFK.png"
              alt="Wishlist Button"
              width={200}
              height={50}
            />
          </button>
        </div>

        {/* {Character} */}
        <div className="lg:flex-1 flex-shrink-0 flex justify-center items-center relative">
          <img
            src={activeClass.image}
            alt={`${activeClass.name} character`}
            className="h-[42rem] relative z-10"
          />
          <img
            src="images/BPL_Website_CircularGraphicElement.png"
            alt="Background Circle"
            className="max-w-[48rem] absolute z-0"
          />
        </div>
      </div>
    </Section>
  );
};

export default ClassSelector;
