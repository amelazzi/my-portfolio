import { projects } from "@/app/components/projects/data";
import Details from "@/app/components/projects/details/details";

type Props = {
  params: {
    projectName: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects[params.projectName];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <Details projectDetails={project} />;
}
