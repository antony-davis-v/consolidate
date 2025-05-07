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
    question: "Which finance‑intelligence domains do you cover?",
    answer:
      "Forecasting & budgeting, financial‑close automation, working‑capital analytics, profitability & cost insights, operational KPIs, solvency stress‑testing, and capital‑investment appraisal.",
  },
  {
    question: "How quickly will we see value?",
    answer:
      "From discovery to a live dashboard or automated workflow typically takes 6–10 weeks, delivering early wins while the broader program rolls out. ",
  },
  {
    question: "How do you integrate data from our ERP, CRM, and spreadsheets?",
    answer:
      "A cloud‑agnostic data hub with 200 + connectors unifies ledgers and operational data into one “source of truth” without disrupting existing workflows.",
  },
  {
    question: "What safeguards ensure security, compliance, and audit readiness?",
    answer:
      "Solutions are built on ISO 27001‑aligned controls—role‑based access, encryption, immutable audit trails, and automated reconciliations—meeting SOX, IFRS, and local regulations.",
  },
  {
    question: " How is ROI measured and costs kept in check?",
    answer:
      'We set hard KPIs, track them in real‑time, and continuously optimize licenses and infrastructure, often reducing total ownership costs.',
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
