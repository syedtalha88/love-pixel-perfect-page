import { Quote } from "lucide-react";
import heroBg from "@/assets/hero-floral-bg.jpg";

const HadithSection = () => {
  return (
    <section
      id="hadith"
      aria-labelledby="hadith-title"
      className="relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-background/80">
        <div className="container mx-auto py-16 md:py-24">
          <div className="text-center animate-fade-in">
            <h2
              id="hadith-title"
              className="font-amiri text-4xl md:text-5xl text-accent-foreground tracking-wide"
            >
              Hadith on Marriage
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto italic">
              “And He placed between you affection and mercy.” — Surah Ar-Rum 30:21
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-accent-foreground/70">
              <span className="h-px w-16 bg-accent/50" />
              <span className="w-2 h-2 rounded-full bg-accent/70" />
              <span className="h-px w-16 bg-accent/50" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className="animate-fade-in bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-3">
                <Quote className="text-accent-foreground/70 shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-foreground font-medium">
                    “Marriage is my Sunnah; whoever turns away from it is not of me.”
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our beloved Prophet ﷺ, teaching encouraging the blessing and responsibility of marriage.
                  </p>
                </div>
              </div>
            </article>

            <article className="animate-fade-in bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-3">
                <Quote className="text-accent-foreground/70 shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-foreground font-medium">
                    “And of His signs is that He created for you spouses from among yourselves so that you may find comfort in them; and He placed between you affection and mercy.”
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Surah Ar-Rum 30:21</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HadithSection;
