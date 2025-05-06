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
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic. Having a well-structured FAQ section is important because it allows users to quickly find information they need without the hassle of contacting customer support.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience. Secondly, it reduces the number of support tickets or inquiries, freeing up time for your support team to focus on more unique or complicated issues.",
  },
  {
    question: "How should I organize my FAQ for optimal usability?",
    answer:
      'An organized FAQ is critical for user-friendliness. Start by grouping similar questions into categories, such as "Billing," "Account Setup," or "Technical Support." This way, users can quickly find the section that addresses their specific concerns.',
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
              href="#"
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
