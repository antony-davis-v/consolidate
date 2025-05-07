const Feature99 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex h-fit items-center gap-2.5 text-lg whitespace-nowrap">
            <span className="size-3 shrink-0 rounded-full bg-[#00b389]"></span>
            Why Valuenode?
          </div>
          <div>
            <h2 className="mb-11 text-3xl lg:text-5xl">
              Scale your team, not your overhead.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-1 border-l pr-4 pl-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-6xl">1</span>
                <h3 className="mt-2 text-xl font-medium">Cost Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Transform fixed payroll into flexible variable spend,
                  eliminating hiring, training, infrastructure, and benefit
                  expenses.
                </p>
              </div>
              <div className="flex flex-col gap-1 border-l pr-4 pl-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-6xl">2</span>
                <h3 className="mt-2 text-xl font-medium">Time Efficiency </h3>
                <p className="text-sm text-muted-foreground">
                  Offload routine tasks to offshore specialists, freeing your
                  staff to focus on strategic work that drives innovation,
                  speed, and growth.
                </p>
              </div>
              <div className="flex flex-col gap-1 border-l pr-4 pl-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-6xl">3</span>
                <h3 className="mt-2 text-xl font-medium">Scalability</h3>
                <p className="text-sm text-muted-foreground">
                  Scale talent up or down in weeks, aligning capacity to backlog
                  priorities while preserving expertise, workflow continuity,
                  and budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature99 };
