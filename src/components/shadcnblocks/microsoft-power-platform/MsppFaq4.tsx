import { ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const faqs = [
  {
    question: "Which Microsoft Power Platform products do you support, and how do they integrate?",
    answer:
    "We implement the full suite—Power BI (analytics), Power Apps (low‑code apps), Power Automate (workflows), Power Pages (portals), and Copilot Studio (agentic AI). Shared connectors, Dataverse, and Azure‑native security let us weave these tools into seamless, end‑to‑end solutions without heavy custom code."},
  {
    question: "What does a typical engagement look like from kickoff to go‑live?",
    answer:
      "A discovery workshop defines use‑cases and success metrics. We then produce a blueprint and rapid proof‑of‑concept, followed by agile sprints that refine and deploy the solution. Most clients move from kickoff to production in six to eight weeks. ",
  },
  {
    question: "How do you ensure governance, security, and compliance?",
    answer:
      "We follow Microsoft’s best‑practice playbook: dedicated environments, Data‑Loss‑Prevention policies, Entra ID conditional access, and the CoE Starter Kit for monitoring. These controls keep data safe and meet enterprise governance standards.",
  },
  {
    question: " Can you help us choose the right licenses and control costs?",
    answer:
      "Yes. We run a licensing assessment, compare per‑user and per‑app models, and benchmark costs against industry norms—typically trimming 20–30 percent from initial budgets while preventing over‑provisioning.",
  },
  {
    question: "What support is available after launch?",
    answer:
      'Valuenode provides 24 × 7 monitoring, automated regression testing, and quarterly health checks. We also hand over a Center‑of‑Excellence playbook that trains your citizen developers and tracks adoption through built‑in telemetry dashboards, ensuring long‑term success under your own control.',
  },
];

const Faq4 = () => {
  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div>
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Common Questions & Answers
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-0"
              >
                <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Separator className="my-12" />
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="lg:col-span-2">
            <h1 className="mt-4 text-2xl text-muted-foreground font-semibold">
              Still have questions?
            </h1>
            <p className="mt-6 font-medium text-muted-foreground">
              We&apos;re here to provide clarity and assist with any queries you
              may have.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="./contact"
              className="text-muted-foreground flex items-center gap-2 hover:underline"
            >
              Contact Support
              <ChevronRight className="h-auto w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq4 };
