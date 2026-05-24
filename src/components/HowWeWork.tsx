import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { automationSteps, processSteps } from "@/constants";
import { Timeline } from "./timeline";
import HorizontalProcess from "./HorizontalProcess";

interface HowWeWorkProps {
  page: "home" | "automation";
}

const HowWeWork: FC<HowWeWorkProps> = ({ page }) => {
  const pageSteps = page === "automation" ? automationSteps : processSteps;
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Container className="flex items-center justify-center">
        <div className="w-full">
          {/* <SectionTitle title="From First Call to First Launch" /> */}
          <HorizontalProcess steps={pageSteps} />
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
