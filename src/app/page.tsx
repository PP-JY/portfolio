import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Architecture } from "@/components/architecture";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Architecture />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
