import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const jobs = [
  {
    category: "Technology",
    openings: [
      {
        title: "Cloud Engineer - Azure Logic Apps",
        location: "Hyderabad, India or Remote",
        link: "https://www.valuenode.com/",
      },
      {
        title: "Full Stack Developer (Ruby on Rails & React)",
        location: "Hyderabad, India or Remote",
        link: "https://www.valuenode.com/",
      },
      {
        title: "Data Engineer",
        location: "Hyderabad, India or Remote",
        link: "https://www.valuenode.com/",
      },
    ],
  },
  {
    category: "Accounting & Finance",
    openings: [
      {
        title: "Senior Accountant",
        location: "Hyderabad, India or Remote",
        link: "https://www.valuenode.com/",
      },
      {
        title: "Financial Analyst",
        location: "Hyderabad, India or Remote",
        link: "https://www.valuenode.com/",
      },
    ],
  },
];

export const Careers3 = () => (
  <section className="py-40">
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-semibold tracking-tight leading-normal md:text-4xl lg:text-5xl">
        Join us
      </h1>
      <div className="mt-12 flex flex-col gap-12">
        {jobs.map(({ category, openings }) => (
          <div key={category}>
            <Badge>{category}</Badge>
            {openings.map(({ title, location, link }) => (
              <a key={title} href={link} className="group block border-b py-7">
                <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
                <div className="mt-4 flex justify-between gap-4 text-muted-foreground">
                  <div className="flex gap-2 text-sm md:text-base">
                    <MapPin className="h-auto w-4 shrink-0" />
                    <p>{location}</p>
                  </div>
                  <ArrowRight className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);
