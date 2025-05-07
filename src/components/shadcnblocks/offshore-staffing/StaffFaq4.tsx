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
    question: "How does Valuenode’s offshore staffing model work if you don’t have an entity in India?",
    answer:
      "We act as your Employer of Record in India—handling recruitment, payroll, benefits, and statutory compliance—so you can bring on vetted talent fast while keeping full, day‑to‑day control over their tasks and priorities.",
  },
  {
    question: "What’s the process for getting our offshore team up and running?",
    answer:
      "It starts with a discovery call to nail down skills, headcount, hours, and engagement style. We then design the solution, agree on role specs and SLAs, and deliver a shortlist within five business days for your interviews. Once you choose candidates, we provide secure equipment, finalize contracts, and integrate the team—often in as little as two to four weeks.",
  },
  {
    question: "What kinds of talent can you supply, and how soon can they start?",
    answer:
      "We focus on two specialisms: technology—developers, data engineers, QA, project managers—and finance & accounting—accountants, analysts, controllers. Shortlists land in your inbox within five days, and most hires are ready to begin within the following two to four weeks.",
  },
  {
    question: "How is pricing structured, and how much can we save?",
    answer:
      "You pay one all‑inclusive monthly rate per person that covers salary, statutory benefits, workspace, IT, and admin. Most clients cut labour costs by 50–70 percent compared with on‑shore hiring—and there are no extra recruitment fees.",
  },
  {
    question: "Can we scale the team or change engagement models later?",
    answer:
      'Absolutely. Add or release team members with just 30 days’ notice, shift from part‑time to full‑time, or switch to a managed‑project model whenever your priorities change, keeping capacity perfectly in sync with demand.',
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
