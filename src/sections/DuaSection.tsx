import heroBg from "@/assets/hero-floral-bg.jpg";

const DuaSection = () => {
  return (
    <section
      id="dua"
      aria-labelledby="dua-title"
      className="relative"
      style={{
        // backgroundImage: `url(${heroBg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="bg-background/85 ">
        <div className="container mx-auto py-16 md:py-24">
          <div className="text-center animate-fade-in">
            <h2 id="dua-title" className="font-amiri text-4xl md:text-5xl text-accent-foreground tracking-wide">
              Wedding Dua
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3 text-accent-foreground/70">
              <span className="h-px w-16 bg-accent/50" />
              <span className="w-2 h-2 rounded-full bg-accent/70" />
              <span className="h-px w-16 bg-accent/50" />
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative bg-card/80 backdrop-blur-sm border border-accent/40 rounded-xl shadow-lg p-8 md:p-10 animate-fade-in">
              <div className="text-center space-y-4">
                <p className="font-amiri text-2xl md:text-3xl leading-relaxed text-foreground">
                  “May Allah bless this marriage, grant it barakah, fill it with love, mercy, and understanding, and unite our hearts in obedience to Him.”
                </p>
                <p className="text-sm text-muted-foreground">
                  Aameen.
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuaSection;
