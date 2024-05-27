/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Section } from "./Section";

type StyleOption = {
  name: string;
  Character: string;
  Pet: string;
};

const StyleOptions: StyleOption[] = [
  {
    name: "DUELIST",
    Character: "/images/BPL_Duelist_Original.png",
    Pet: "/images/pets/BL_Biscuit.png",
  },
  {
    name: "KNIGHT",
    Character: "/images/BPL_Knight_Original.png",
    Pet: "/images/pets/BPL_Poti.png",
  },
];

const StyleSelector: React.FC = () => {
  const [activeClass, setActiveClass] = useState<StyleOption>(StyleOptions[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === StyleOptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveClass(StyleOptions[currentIndex]);
  }, [currentIndex]);

  return (
    <Section className="font-beau h-screen w-full flex items-center justify-center gap-20 bg-slate-900 text-white py-12 px-4">
      <div className="flex-shrink-0 flex justify-center items-center">
        <img
          src="images/BPL_Website_CircularGraphicElement.png"
          alt="Background Circle"
          className="max-w-[48rem] absolute z-0"
        />
        <img
          src={activeClass.Character}
          alt={`${activeClass.name} character`}
          className="h-[42rem] relative z-10"
        />
        <img
          src={activeClass.Pet}
          alt="Pet"
          className="h-[14rem] relative z-10 top-[-12rem]"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl md:text-5xl font-beau font-bold italic">
          BATTLE WITH
        </h2>
        <h1 className="text-cyan-400 text-6xl md:text-8xl font-beau font-bold italic self-start">
          STYLE
        </h1>
        <p className="text-base font-ddin text-gray-200 text-center">
          Customize your character, pets, battle background,
          <br /> shopkeeper and many more !
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
    </Section>
  );
};

export default StyleSelector;
