"use client";

import icon1 from '@/assets/index/icon1.png';
import icon2 from '@/assets/index/icon2.png';
import icon5 from '@/assets/index/icon5.png';
import icon6 from '@/assets/index/icon6.png';
import icon7 from '@/assets/index/icon7.png';
import icon8 from '@/assets/index/icon8.png';
import icon9 from '@/assets/index/icon9.png';
import icon10 from '@/assets/index/icon10.png';
import icon11 from '@/assets/index/icon11.png';
import icon12 from '@/assets/index/icon12.png';
import icon13 from '@/assets/index/icon13.png';
import icon14 from '@/assets/index/icon14.png';
import icon15 from '@/assets/index/icon15.png';
import icon16 from '@/assets/index/icon16.png';


const ITEMS = [
  {
    name: "Alteryx",
    src: icon1,
    width: 90,
    height: 14,
    href: "https://www.alteryx.com",
  },
  {
    name: "Apache Kafka",
    src: icon2,
    width: 90,
    height: 14,
    href: "https://kafka.apache.org",
  },
  {
    name: "Azure Data Factory",
    src: icon5,
    width: 90,
    height: 14,
    href: "https://azure.microsoft.com/services/data-factory/",
  },
  {
    name: "Cloudera",
    src: icon6,
    width: 90,
    height: 14,
    href: "https://www.cloudera.com",
  },
  {
    name: "Databricks",
    src: icon7,
    width: 90,
    height: 14,
    href: "https://www.databricks.com",
  },
  {
    name: "Docker",
    src: icon8,
    width: 90,
    height: 14,
    href: "https://www.docker.com",
  },
  {
    name: "GitHub",
    src: icon9,
    width: 90,
    height: 14,
    href: "https://github.com",
  },
  {
    name: "Google Cloud Platform",
    src: icon10,
    width: 90,
    height: 14,
    href: "https://cloud.google.com",
  },
  {
    name: "Kong Gateway",
    src: icon11,
    width: 90,
    height: 14,
    href: "https://konghq.com",
  },
  {
    name: "Kubernetes",
    src: icon12,
    width: 90,
    height: 14,
    href: "https://kubernetes.io",
  },
  {
    name: "Azure Synapse Analytics",
    src: icon13,
    width: 90,
    height: 14,
    href: "https://azure.microsoft.com/services/synapse-analytics/",
  },
  {
    name: "Snowflake",
    src: icon14,
    width: 90,
    height: 14,
    href: "https://www.snowflake.com",
  },
  {
    name: "Postman",
    src: icon15,
    width: 90,
    height: 14,
    href: "https://www.postman.com",
  },
  {
    name: "MuleSoft",
    src: icon16,
    width: 90,
    height: 14,
    href: "https://www.mulesoft.com",
  },
];

const Logos7 = () => {
  return (
    <section className="overflow-hidden bg-white pt-0 pb-40 dark:bg-muted">
      <div className="container text-center">
        <h2 className="text-xl font-semibold tracking-tight text-muted-foreground text-balance lg:text-3xl">
          The technologies that power us
        </h2>
      </div>
      <div className="relative mt-10">
        <div className="flex w-full">
          <div style={{ animationDirection: "reverse" }} className="flex shrink-0 animate-marquee items-center gap-12">
            {ITEMS.map((logo, index) => (
              <a href={logo.href} target="_blank" key={index} className="p-6">
                <img
                  src={logo.src.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
          <div style={{ animationDirection: "reverse" }} className="flex shrink-0 animate-marquee items-center gap-12">
            {ITEMS.map((logo, index) => (
              <a href={logo.href} target="_blank" key={index} className="p-6">
                <img
                  src={logo.src.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos7 };
