import { MoonStar } from 'lucide-react';
import heroBg from '@/assets/hero-floral-bg.jpg';

const EndingSection = () => {
  return (
    <section
      id="blessing"
      aria-labelledby="ending-title"
      className="relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-background/85">
        <div className="container mx-auto py-16 md:py-24 text-center">
          <div className="flex items-center justify-center gap-3 text-accent-foreground/80 animate-fade-in">
            <span className="h-px w-16 bg-accent/60" />
            <MoonStar size={18} />
            <span className="h-px w-16 bg-accent/60" />
          </div>

          <h2 id="ending-title" className="sr-only">Closing Blessing</h2>

          <p className="mt-6 font-amiri text-3xl md:text-5xl text-accent-foreground tracking-wide animate-fade-in">
            Barakallahu lakuma wa baraka ‘alaykuma wa jama‘a baynakuma fee khayr
          </p>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            “And He placed between you affection and mercy.” — Surah Ar-Rum 30:21
          </p>
        </div>
      </div>
    </section>
  );
};

export default EndingSection;
