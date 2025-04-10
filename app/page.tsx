import getFeed from "@/api/getFeed";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSort from "@/components/ProjectsSort";
import Services from "@/components/Services";
import SocialMedia from "@/components/SocialMedia";
import { Post } from "@/src/types";

export default async function Home() {

  const instagramFeed: Post[] = await getFeed();

  return (
    <div className="">
      <main className="">
        <Hero />
        <Services />
        <ProjectsSort />
        <About />
        <Contact />
        <SocialMedia feedData={instagramFeed} />
      </main>
    </div>
  );
}
