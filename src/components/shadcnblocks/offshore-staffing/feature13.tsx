
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import headshot1 from '@/assets/staffing/headshot1.png';
import headshot2 from '@/assets/staffing/headshot2.png';


interface Feature {
  id: string;
  title: React.ReactNode; 
  subtitle: string;
  description: string;
  image: string ;
}

interface Feature13Props {
  heading?: string;
  features?: Feature[];
}

const Feature13 = ({
  heading = "Hire talent by category",
  features = [
    {
      id: "feature-1",
      title: (
        <>
          Technology <br /> Talent
        </>
      ),
      subtitle: "For Tech & Product Teams",
      description:
        "Solution Architects, Cloud & DevOps Engineers, Full-stack Developers, Mobile App Developers, Data Engineers, Data Scientists, Database Administrators, UI/UX Designers, QA Engineers, Cybersecurity Specialists",
      image: headshot1.src,
    },
    {
      id: "feature-2",
      title: "Accounting & Finance Talent",
      subtitle: "For Accounting & Finance Teams",
      description:
        "Finance Managers, Controllers, Accountants, Cost Accountants, Auditors, Tax Consultants, AP/AR Specialists, Payroll Specialists, Financial Analysts, Treasury Analysts, Credit Analysts, Investment Analysts, Risk Managers",
      image: headshot2.src,
    },
  ],
}: Feature13Props) => {
  return (
    <section className="py-6 lg:py-12">
      <div className="container">
        <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2>
        <div className="mt-20 grid gap-9 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-between rounded-lg bg-white border border-gray-200"
            >
              <div className="flex justify-between gap-10 border-b border-gray-200">
                <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                  <p className="text-xs text-muted-foreground">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                </div>
                <div className="w-2/5 shrink-0 rounded-r-lg border-l border-gray-200">
                  <img
                    src={feature.image}
                    alt={typeof feature.title === "string" ? feature.title : ""}
                    className="h-full w-full object-cover rounded-r-lg"
                  />
                </div>
              </div>
              <div className="p-4 text-sm text-muted-foreground md:p-8">
                {feature.description}
              </div>
              <a href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2" className="hover:text-accent-foreground">
              <div className="flex items-center text-sm text-muted-foreground p-4 md:ml-5">
                    Book a call{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature13 };
