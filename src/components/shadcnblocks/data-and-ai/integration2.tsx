"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import logo1 from "@/assets/dataandai/logo1.png";
import logo2 from "@/assets/dataandai/logo2.png";
import logo3 from "@/assets/dataandai/logo3.png";
import logo4 from "@/assets/dataandai/logo4.png";
import logo5 from "@/assets/dataandai/logo5.png";
import logo6 from "@/assets/dataandai/logo6.png";
import logo7 from "@/assets/dataandai/logo7.png";
import logo8 from "@/assets/dataandai/logo8.png";
import logo9 from "@/assets/dataandai/logo9.png";
import logo10 from "@/assets/dataandai/logo10.png";
import logo11 from "@/assets/dataandai/logo11.png";

interface DataItem {
  key: number;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

const DATA: DataItem[] = [
  {
    key: 1,
    src: logo1.src,
    alt: "Astro",
    href: "https://astro.build",
    width: 64,
    height: 64,
  },
  {
    key: 2,
    src: logo2.src,
    alt: "GitHub",
    href: "https://github.com",
    width: 64,
    height: 64,
  },
  {
    key: 3,
    src: logo3.src,
    alt: "Google",
    href: "https://google.com",
    width: 64,
    height: 64,
  },
  {
    key: 4,
    src: logo4.src,
    alt: "Notion",
    href: "https://notion.so",
    width: 64,
    height: 64,
  },
  {
    key: 5,
    src: logo5.src,
    alt: "Slack",
    href: "https://slack.com",
    width: 64,
    height: 64,
  },
  {
    key: 6,
    src: logo6.src,
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com",
    width: 64,
    height: 64,
  },
  {
    key: 8,
    src: logo7.src,
    alt: "VS Code",
    href: "https://code.visualstudio.com",
    width: 64,
    height: 64,
  },
  {
    key: 12,
    src: logo8.src,
    alt: "React",
    href: "https://reactjs.org",
    width: 64,
    height: 64,
  },
  {
    key: 13,
    src: logo9.src,
    alt: "Vue.js",
    href: "https://vuejs.org",
    width: 64,
    height: 64,
  },
  {
    key: 15,
    src: logo10.src,
    alt: "Spotify",
    href: "https://spotify.com",
    width: 64,
    height: 64,
  },
  {
    key: 16,
    src: logo11.src,
    alt: "Dropbox",
    href: "https://dropbox.com",
    width: 64,
    height: 64,
  },
];

const Integration2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="text-3xl font-medium lg:text-4xl">
            Powering the world's best product teams
          </h4>
          <p className="text-xl text-muted-foreground lg:-mt-1">
            From next-gen startups to established enterprises
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative my-20 overflow-hidden">
          <div className="flex w-full">
            {/* First marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={logo.key}
                  className="p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
            {/* Second marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={logo.key}
                  className="p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 flex justify-center">
          <Button className="rounded-full">
            Discover all tools
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Integration2 };
