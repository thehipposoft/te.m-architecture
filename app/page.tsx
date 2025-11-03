import getAllProjects from "@/api/getAllProjects";
import getFeed from "@/api/getFeed";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSort from "@/components/ProjectsSort";
import Services from "@/components/Services";
import SocialMedia from "@/components/SocialMedia";
import { Post, Proyecto } from "@/src/types";

export default async function Home() {
    const instagramFeed: Post[] = await getFeed();
    const projectsData: Proyecto[] = await getAllProjects();

    return (
        <main className="">
            <Hero proyectosData={projectsData} />
            <Services />
            <ProjectsSort />
            <About />
            <Contact />
            <SocialMedia feedData={instagramFeed} />
        </main>
    );
}
