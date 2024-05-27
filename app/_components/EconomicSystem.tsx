/* eslint-disable @next/next/no-img-element */

import { FC, ReactElement } from "react";
import { Section } from "./Section";

const EconomicSystem: FC = (): ReactElement => {
  return (
    <Section className="mx-auto flex justify-center items-center bg-economic-gradient text-white py-12 px-4">
      <img
        src="/images/BPL_Website_EconomicSystemPage.png"
        alt="Economic System"
      />
    </Section>
  );
};

export default EconomicSystem;
