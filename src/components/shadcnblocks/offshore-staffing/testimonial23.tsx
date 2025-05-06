"use client";

import {
  BadgeCheck,
  ChevronRight,
  Clock,
  MessageSquareCode,
} from "lucide-react";

// Remove any react-responsive-masonry imports
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

/** Same data as before */
interface DataItem {
  id: string;
  name: string;
  username: string;
  date: string;
  avatar: string;
  content: string;
}

const DATA: DataItem[] = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    date: "2023-10-05",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
    content:
      "This platform has completely transformed the way I manage my projects. The tools are not only intuitive but also incredibly powerful, allowing me to streamline my workflow like never before. It's a game-changer for productivity!",
  },
  {
    id: "2",
    name: "Jane Smith",
    username: "janesmith",
    date: "2023-09-30",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
    content:
      "The collaboration features are truly outstanding, allowing my team and I to work together seamlessly no matter where we are, which has made remote work significantly easier. The real-time editing and intuitive sharing options have transformed how we operate, eliminating the headaches of version control and endless email chains.",
  },
  {
    id: "3",
    name: "Alice Johnson",
    username: "alicej",
    date: "2023-09-25",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
    content: "The analytics are a game-changer!",
  },
  {
    id: "4",
    name: "Bob Brown",
    username: "bobbrown",
    date: "2023-09-20",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
    content:
      "I love how easy it is to integrate this platform with my existing tools. It has streamlined my workflow significantly, saving me hours every week.",
  },
  {
    id: "5",
    name: "Charlie Davis",
    username: "charlied",
    date: "2023-09-15",
    avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
    content:
      "The design templates are fantastic. They've helped me deliver projects faster without compromising on quality. Highly recommend!",
  },
  {
    id: "6",
    name: "Eva Wilson",
    username: "evawilson",
    date: "2023-09-10",
    avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
    content:
      "This platform has made project management so much easier. It's intuitive, efficient, and keeps everyone on the same page.",
  },
  {
    id: "7",
    name: "Frank Miller",
    username: "frankm",
    date: "2023-09-05",
    avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
    content:
      "The branding tools are amazing. They've helped us maintain consistency across all our campaigns, which has been a huge win for our team.",
  },
  {
    id: "8",
    name: "Grace Lee",
    username: "gracelee",
    date: "2023-08-30",
    avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
    content:
      "The vector editing tools are fantastic. They've made my creative process so much smoother and more enjoyable.",
  },
  {
    id: "9",
    name: "Henry Garcia",
    username: "henryg",
    date: "2023-08-25",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
    content:
      "The animation features are incredible. They've taken my projects to the next level, and I couldn't be happier with the results.",
  },
];

export function Testimonial23() {
  return (
    <section className="py-32">
      <div className="container">
        {/* Title / Badge */}
        <div className="my-4 flex justify-center">
          <Badge variant="outline" className="rounded-sm py-2 shadow-md">
            <MessageSquareCode className="mr-2 size-4 text-muted-foreground" />
            <span>Customer Feedback</span>
          </Badge>
        </div>

        <div className="flex flex-col items-center gap-6 px-4 sm:px-8">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Hear what our customers <br /> are saying
          </h2>

          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <span>
              Discover how <b>Shadcnblocks</b> is transforming workflows across
              industries.
            </span>
          </div>
        </div>

        {/* Masonry-like columns */}
        <div className="relative mt-14 w-full px-4 sm:px-8 md:px-16 lg:px-32">
          {/* Optional gradient overlay if you want the same style as your previous code */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-96 bg-gradient-to-t from-background" />

          {/* 
            Tailwind approach for masonry-like layout:
              - "columns-1" on mobile
              - "sm:columns-2" on small screens
              - "lg:columns-3" on large screens
              - "gap-5" sets the space between columns
              - Each child needs "break-inside-avoid" so it doesn't break across columns
          */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {DATA.map((testimonial) => (
              <div
                key={testimonial.id}
                className="mb-5 break-inside-avoid"
              >
                <Card className="relative rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 rounded-full ring-1 ring-muted">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">
                          {testimonial.name}
                        </p>
                        <BadgeCheck className="h-4 w-4 fill-cyan-400 stroke-white" />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        @{testimonial.username}
                      </p>
                    </div>
                    <div className="ml-auto hover:cursor-pointer">
                      <img
                        src="https://shadcnblocks.com/images/block/logos/x.svg"
                        alt="X logo"
                        className="h-4 w-4"
                      />
                    </div>
                  </div>

                  <div className="my-4 border-t border-dashed border-border" />

                  <div className="text-sm text-foreground">
                    <q>{testimonial.content}</q>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{testimonial.date}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Button at bottom */}
        <div className="flex justify-center">
          <Button className="mt-8 gap-2 rounded-lg px-5 py-3 text-sm shadow-sm transition-colors hover:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <span className="flex items-center gap-1">
              <span>See More</span>
              <span className="text-muted/80">-</span>
              <span className="text-muted/80">Feedback</span>
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground/80" />
          </Button>
        </div>
      </div>
    </section>
  );
}
