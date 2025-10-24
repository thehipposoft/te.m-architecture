import getProject from "@/api/getProject";
import ProjectLayout from "@/components/ProjectLayout";
import { ResolvingMetadata, Metadata } from "next";

type Params = {
    params: Promise<{
      id: number;
  }>;
}

export async function generateMetadata({
  params
}: Params, parent: ResolvingMetadata): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.id).then((res:any) => res);

  if (project) {
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: `Te.M Architecture | ${project.nombre} `,
      openGraph: {
        images: [
          project.imagen_principal_banner,
          ...previousImages,
        ],
      },
      description: project.leyenda,
    };
  }

  return {
    title: "Te.M Architecture | Specific Project",
  };
}

export default async function ProjectPage({ params }: Params) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.id);

  return(
    <div>
      {
        project && <ProjectLayout project={project} />
      }
    </div>
  )
}



