import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SobreMi from "@/components/sections/About";
import Stack from "@/components/sections/Stacks";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";


export default function Home() {
  return (

    <main>
      <Hero />
      <SobreMi />
      <Stack />
      <Projects />
      <Services />
    </main>


  );
}
