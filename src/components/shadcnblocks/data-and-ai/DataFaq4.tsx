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
    question: "What makes Valuenode’s Data & AI consulting different?",
    answer:
      "We blend deep industry know‑how with expert data scientists and engineers, using a value‑mapping framework and pre‑built AI accelerators to deliver measurable results—fast.",
  },
  {
    question: "How do you keep AI projects aligned with our business goals?",
    answer:
      "Every engagement starts with a discovery workshop where we rank use‑cases by impact and co‑set success metrics. We then deliver in agile sprints, proving value at each step. ",
  },
  {
    question: " Can you handle enterprise scale and legacy systems?",
    answer:
      "Yes. Our cloud‑agnostic reference architecture supports on‑prem, hybrid, and multicloud setups, and our integration patterns let new AI services plug smoothly into existing ERP, CRM, and data‑warehouse environments.",
  },
  {
    question: "How do you address security, compliance, and responsible AI?",
    answer:
      "We build privacy‑by‑design solutions, align controls with ISO 27001, and monitor models for drift and bias—ensuring compliance with regulations such as GDPR and CCPA.",
  },
  {
    question: "What support and knowledge transfer do you provide after launch?",
    answer:
      'We offer 24×7 monitoring, automated model retraining, and periodic health checks. Hands‑on workshops and playbooks equip your team to run and scale the platform independently.',
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
