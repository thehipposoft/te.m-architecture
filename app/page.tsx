import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSort from "@/components/ProjectsSort";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="">
        <Hero />
        <Services />
        <ProjectsSort />
        <About />
        <Contact />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
