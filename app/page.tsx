import getAllProjects from "@/api/getAllProjects";
import { getInstagramToken } from "@/api/Index";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSort from "@/components/ProjectsSort";
import Services from "@/components/Services";
import SocialMedia from "@/components/SocialMedia";
import { Proyecto } from "@/src/types";

export default async function Home() {
    const instagramToken = await getInstagramToken();
    const projectsData: Proyecto[] = await getAllProjects();

    return (
        <main>
            <Hero proyectosData={projectsData} />
            <Services />
            <ProjectsSort />
            <About />
            <Contact />
            <SocialMedia instagramToken={instagramToken} />
        </main>
    );
}
