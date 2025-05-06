const Footer6 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-16">
      <div className="container">
        <footer>
          <div className="flex flex-col items-baseline justify-between gap-8 border-t border-border pt-8 md:flex-row md:gap-16">
            <div className="text-xs text-muted-foreground sm:text-sm">
              &copy; Valuenode Private Limited {currentYear}
            </div>
            <div className="flex flex-col items-start gap-4 text-xs text-muted-foreground sm:text-sm md:flex-row lg:items-center">
              <a href="#" className="hover:text-accent-foreground">
                Careers
              </a>
              <a href="#" className="hover:text-accent-foreground">
                Legal
              </a>
              <a href="#" className="hover:text-accent-foreground">
                Resources
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer6 };
