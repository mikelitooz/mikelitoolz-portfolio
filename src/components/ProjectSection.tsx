import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { automationCaseStudies, projects } from "@/constants";
import { ProjectCard } from "./project-card";

interface ProjectSectionProps {
  page: "automation" | "home";
}

const ProjectSection: FC<ProjectSectionProps> = ({ page }) => {
  const pageProjects = page === "automation" ? automationCaseStudies : projects;
  return (
    <section className="relative overflow-hidden py-16 md:py-24" id="projects">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <SectionTitle title="Real Products, Real Users, Real Results" />
          <div className="flex flex-col gap-6">
            {pageProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
