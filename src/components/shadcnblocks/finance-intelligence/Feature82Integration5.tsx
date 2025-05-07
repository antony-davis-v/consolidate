"use client";

import type { ImageMetadata } from 'astro';
import { ArrowRight } from 'lucide-react';

import tools2 from '@/assets/fanda/tools2.png';
import tools3 from '@/assets/fanda/tools3.png';
import tools4 from '@/assets/fanda/tools4.png';
import tools5 from '@/assets/fanda/tools5.png';
import tools6 from '@/assets/fanda/tools6.png';
import tools7 from '@/assets/fanda/tools7.png';
import tools8 from '@/assets/fanda/tools8.png';
import tools9 from '@/assets/fanda/tools9.png';
import tools10 from '@/assets/fanda/tools10.png';   
import tools11 from '@/assets/fanda/tools11.png';
import tools12 from '@/assets/fanda/tools12.png';

const images: ImageMetadata[] = [

  tools2,
  tools3,
  tools4,
  tools5,
  tools6,
  tools7,
  tools8,
  tools9,
  tools10,
  tools11,
  tools12,

];

const Integration5 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative w-20 h-20">
            <svg
              viewBox="0 0 80 80"
              className="w-full h-full text-muted-foreground/40"
            >
              <path
                fill="currentColor"
                d="M75.43,79.22H4.57c-2.09,0-3.79-1.7-3.79-3.79V12.9c0-1,.4-1.98,1.11-2.68L10.22,1.89c.71-.71,1.68-1.11,2.68-1.11h62.54c2.09,0,3.79,1.7,3.79,3.79v70.87c0,2.09-1.7,3.79-3.79,3.79ZM12.9,1.78c-.73,0-1.45.3-1.97.82L2.59,10.92c-.52.52-.82,1.24-.82,1.97v62.54c0,1.54,1.25,2.79,2.79,2.79h70.87c1.54,0,2.79-1.25,2.79-2.79V4.57c0-1.54-1.25-2.79-2.79-2.79H12.9Z"
              />
            </svg>
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={`Integration logo ${index + 1}`}
              className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Feature82Integration5 = () => {
  return (
    <section className="pt-0 pb-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-24 md:grid-cols-2 md:gap-x-24">
          <div className="flex flex-col">
            <h1 className="mb-12 text-3xl font-semibold md:text-4xl">
              Harness the power of unified data
            </h1>
            <p className="mb-4 text-base text-muted-foreground">
              We build custom data models that unify information from multiple
              platforms into a single source of truth. Through AI-driven
              automation, advanced modeling, and interactive dashboards, we
              streamline everything from forecasting and budgeting to financial
              close and reporting—eliminating silos and empowering business
              leaders to make real-time, high-impact decisions with speed and
              precision.
            </p>
            <div className="mt-0">
              <a
                href="./contact"
                className="inline-flex items-center gap-1 text-muted-foreground font-medium hover:underline"
              >
                Explore integrations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <Integration5 />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature82Integration5 };
