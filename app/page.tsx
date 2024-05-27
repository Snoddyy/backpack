import { Battle } from "./_components/Battle";
import Challenge from "./_components/Challenge";
import ClassSelector from "./_components/ClassSelector";
import EconomicSystem from "./_components/EconomicSystem";
import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import StyleSelector from "./_components/StyleSelector";
import { Trailer } from "./_components/Trailer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Trailer />
      <ClassSelector />
      <Challenge />
      <StyleSelector />
      <EconomicSystem />
      <Battle />
      <Footer />
    </main>
  );
}
