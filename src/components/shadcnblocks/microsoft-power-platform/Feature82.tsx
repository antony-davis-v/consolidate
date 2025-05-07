import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import auto1 from "@/assets/mspp/auto1.png";
import auto2 from "@/assets/mspp/auto2.png";
import auto3 from "@/assets/mspp/auto3.png";
import auto4 from "@/assets/mspp/auto4.png";

const integrartions = [
  {
    title: "Discover & Assess",
    description:
      "Leverage advanced task and process mining to map your existing workflows, identify bottlenecks, and prioritize the automation opportunities that will deliver the highest ROI.",
    image: auto1,
  },
  {
    title: "Automate End‑to‑End",
    description:
      "Eliminate manual handoffs by automating across virtually any system—web, desktop, legacy or cloud—using a blend of AI‑powered connectors and Robotic Process Automation (RPA).",
    image: auto2,
  },
  {
    title: "Orchestrate at Scale",
    description:
      "Centralize control of your automation estate with built‑in security, governance policies, and 360° monitoring. Maintain compliance and visibility as you roll out new flows across teams and geographies.",
    image: auto3,
  },
  {
    title: "Extend & Integrate",
    description:
      "MEmbed automation into your apps, portals, and generative‑AI agents on the Power Platform. Create seamless, personalized experiences that drive continuous digital transformation.",
    image: auto4,
  },
];

const Feature82 = () => {
  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="grid place-items-center items-center gap-4 lg:grid-cols-5 lg:gap-16">
          <h1 className="text-center text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl text-balance lg:col-span-2 lg:text-left">
            End‑to‑End Workflow Automation
          </h1>
          <p className="text-center text-base text-muted-foreground lg:col-span-2 lg:text-left">
            Our Power Automate specialists guide you from initial process mining
            through end‑to‑end deployment and enterprise governance. We uncover
            high‑value automation opportunities, build resilient digital
            workflows, and scale controls across your organization—delivering
            measurable efficiency gains, error reduction, and accelerated
            business impact.
          </p>
          <a href="./contact" className="hover:text-accent-foreground">
          <Button className="mx-auto w-fit lg:mx-0 lg:ml-auto">Explore</Button>
          </a>
        </div>
        <Separator className="mt-8 mb-12" />
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          {integrartions.map((integration, i) => (
            <li key={i}>
              <div>
                <img
                  src={integration.image.src}
                  alt={integration.title}
                  className="h-auto w-16"
                />
                <h3 className="my-2 text-2xl font-semibold">
                  {integration.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Feature82 };
