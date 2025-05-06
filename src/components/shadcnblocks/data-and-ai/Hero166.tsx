import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import wal1 from "@/assets/dataandai/wal1.png";
import wal2 from "@/assets/dataandai/wal2.png";
import wal3 from "@/assets/dataandai/wal3.png";
import wal4 from "@/assets/dataandai/wal4.png";
import wal5 from "@/assets/dataandai/wal5.png";
import wal6 from "@/assets/dataandai/wal6.png";


const Hero166 = () => (
  <section className="bg-background py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12">
        <div className="flex max-w-[31.25rem] flex-col gap-8 md:gap-14 lg:col-span-4 lg:self-start">
          <h1 className="text-4xl font-semibold leading-none tracking-tight md:text-5xl lg:text-6xl">
            <span className="mb-2 block text-primary">Data driven.</span>
            <span className="mb-2 block text-muted-foreground">AI enhanced.</span>
          </h1>
          <Button className="w-fit" aria-label="Get started">
            Explore our services
          </Button>
        </div>

        <div className="mx-auto w-full max-w-[52.875rem] lg:col-span-8 lg:mx-0">
          <AspectRatio ratio={1.049627792 / 1}>
            <div className="grid w-full grid-cols-2 gap-4">
              <div className="flex flex-col items-end gap-4">
                <div className="relative overflow-hidden rounded-lg animate-[transform1_15s_ease-in-out_infinite]">
                  <img
                    src={wal1.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image1_15s_ease-in-out_infinite]"
                  />
                  <img
                    src={wal2.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image2_15s_ease-in-out_infinite]"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg animate-[transform2_15s_ease-in-out_infinite]">
                  <img
                    src={wal3.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image1_15s_ease-in-out_infinite]"
                  />
                  <img
                    src={wal4.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image2_15s_ease-in-out_infinite]"
                  />
                  <img
                    src={wal5.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image3_15s_ease-in-out_infinite]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="relative overflow-hidden rounded-lg animate-[transform4_15s_ease-in-out_infinite]">
                  <img
                    src={wal6.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image3_15s_ease-in-out_infinite]"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg animate-[transform3_15s_ease-in-out_infinite]">
                  <img
                    src={wal2.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image1_15s_ease-in-out_infinite]"
                  />
                  <img
                    src={wal1.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image2_15s_ease-in-out_infinite]"
                  />
                  <img
                    src={wal3.src}
                    alt=""
                    className="absolute h-full w-full object-cover object-center animate-[image3_15s_ease-in-out_infinite]"
                  />
                </div>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  </section>
);

export { Hero166 };
