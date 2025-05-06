"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import img1 from "@/assets/dataandai/img1.png";
import img2 from "@/assets/dataandai/img2.png";
import img3 from "@/assets/dataandai/img3.png";
import img4 from "@/assets/dataandai/img4.png";



const sections = [
  {
    subTitle: "Data Engineering",
    title: "Elevate your data capabilities",
    description:
      "Valuenode pioneers in data engineering, crafting foundational solutions that empower data-driven enterprises to excel. Our data engineering services transcend infrastructure development, embarking on a bespoke journey to optimize and sustain a data ecosystem that ignites a spectrum of actionable insights at every organizational level. Our expertise spans from core data strategy development to the intricate aspects of data security and compliance, ensuring a robust and agile infrastructure tailored to the ever-changing demands of your industry. ",
    image: img1,
  },
  {
    subTitle: "Data Modelling",
    title: "Collaborate Seamlessly with Teams",
    description:
      "Enable smooth collaboration across your organization. Share resources efficiently with customizable access controls and permission settings.",
    image: img2,
  },
  {
    subTitle: "Data Visualization",
    title: "Flexible Configuration Options",
    description:
      "Customize your experience with advanced configuration options. Adapt the platform to your specific needs with our versatile solution.",
    image: img3,
  },
  {
    subTitle: "AI Integration",
    title: "Simplified User Experience",
    description:
      "Experience a user-friendly interface designed for efficiency. Our intuitive building blocks make complex tasks simple and accessible.",
    image: img4,
  },
];

const Timeline2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestSection = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = index;
          }
        }
      });

      setActiveIndex(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <h1 className="mb-14 max-w-2xl text-4xl font-semibold text-balance md:text-5xl">
          Pioneering your data future
        </h1>
        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-16 md:w-1/2">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="flex flex-col gap-4 md:h-[50vh]"
              >
                <div className="block rounded-2xl border bg-muted p-4 md:hidden">
                  <img
                    src={section.image.src}
                    alt={section.title}
                    className="h-full max-h-full w-full max-w-full rounded-2xl object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-muted-foreground md:text-base">
                  {section.subTitle}
                </p>
                <h1 className="text-2xl font-semibold md:text-4xl">
                  {section.title}
                </h1>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="sticky top-56 right-0 hidden h-fit w-full items-center justify-center md:flex">
            <img
              src={sections[sections.length - 1].image.src}
              alt={sections[sections.length - 1].title}
              className="invisible h-full max-h-[550px] w-full max-w-full object-cover"
            />

            {sections.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 flex h-full items-center justify-center rounded-2xl border bg-muted p-4 transition-opacity duration-200",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={item.image.src}
                  alt={item.title}
                  className="h-full max-h-full w-full max-w-full rounded-2xl border object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline2 };
