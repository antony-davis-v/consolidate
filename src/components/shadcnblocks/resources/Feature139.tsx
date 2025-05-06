"use client";

const Feature139 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="rounded-lg border bg-card p-10 shadow-sm">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full max-w-md">
              <h1 className="my-5 text-3xl font-semibold tracking-tight leading-normal md:text-4xl lg:text-5xl">
                In the works
              </h1>
              <p className="text-lg text-muted-foreground">
                Curated resources are on the horizon.
              </p>
            </div>
            <div className="w-full max-w-lg">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder"
                className="max-h-[420px] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature139 };
