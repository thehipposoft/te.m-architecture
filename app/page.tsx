import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSort from "@/components/ProjectsSort";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Services />
        <ProjectsSort />
        <About />
        <Contact />
      </main>
    </div>
  );
}
