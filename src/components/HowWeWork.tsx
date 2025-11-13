import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { automationSteps, processSteps } from "@/constants";
import { Timeline } from "./timeline";

interface HowWeWorkProps {
  page: "home" | "automation";
}

const HowWeWork: FC<HowWeWorkProps> = ({ page }) => {
  const pageSteps = page === "automation" ? automationSteps : processSteps;
  return (
    <section className="relative overflow-hidden">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full py-8">
          <SectionTitle title="How We Work Together" />
          <Timeline steps={pageSteps} />
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
