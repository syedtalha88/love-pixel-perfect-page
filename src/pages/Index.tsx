import { useEffect, useState, type ReactNode } from "react";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-floral-bg.jpg";
import bouquet from "@/assets/bouquet.jpg";
import prayerMat from "@/assets/prayer-mat-ariba.jpg";
import HadithSection from "@/sections/HadithSection";
import DuaSection from "@/sections/DuaSection";
import MapSection from "@/sections/MapSection";
import EndingSection from "@/sections/EndingSection";

const Nav = () => (
  <header className="sticky top-0 z-40 border-b bg-background/30 backdrop-blur-md supports-[backdrop-filter]:bg-background/30">
    <div className="container mx-auto hidden md:flex items-center justify-center py-3">
      <div className="flex items-center gap-4 text-muted-foreground">
        <Heart size={16} className="opacity-70" />
        <span className="h-px w-16 bg-foreground/20 rounded-full" />
        <span className="font-display text-3xl text-accent-foreground">Marriage Ceremony</span>
        <span className="h-px w-16 bg-foreground/20 rounded-full" />
        <Heart size={16} className="opacity-70" />
      </div>
    </div>
    <div className="md:hidden container mx-auto py-3 flex items-center justify-center">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Heart size={14} className="opacity-70" />
        <span className="font-display text-3xl text-accent-foreground">Marriage Ceremony</span>
        <Heart size={14} className="opacity-70" />
      </div>
    </div>
  </header>
);

const Framed = ({ src, alt, caption }: { src: string; alt: string; caption?: ReactNode }) => (
  <figure className="bg-card border shadow-lg rounded-md p-2 sm:p-3 md:p-4">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="rounded-sm object-cover w-full h-full"
    />
    {caption && <figcaption className="mt-2 text-center space-y-1">{caption}</figcaption>}
  </figure>
);

const NamesSection = () => (
  <section className="container mx-auto py-16 md:py-24" aria-labelledby="names-title">
    <h2 id="names-title" className="sr-only">Bride and Groom</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center">
      <article className="space-y-3">
        <h3 className="font-display text-3xl text-foreground">Talha</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We are delighted to celebrate our union with family and friends.
        </p>
      </article>
      <div className="hidden md:flex items-center justify-center">
        <Heart className="text-foreground/20" size={56} />
      </div>
      <article className="space-y-3">
        <h3 className="font-display text-3xl text-foreground">Ariba</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Join us as we begin this beautiful journey together.
        </p>
      </article>
    </div>
  </section>
);

const Countdown = ({ daysFromNow = 36 }: { daysFromNow?: number }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = Date.now() + daysFromNow * 86_400_000; // ms in a day
    const tick = () => {
      const delta = Math.max(0, target - Date.now());
      const days = Math.floor(delta / 86_400_000);
      const hours = Math.floor((delta % 86_400_000) / 3_600_000);
      const minutes = Math.floor((delta % 3_600_000) / 60_000);
      const seconds = Math.floor((delta % 60_000) / 1_000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [daysFromNow]);

  return (
    <section className="container mx-auto py-12 md:py-20" aria-labelledby="countdown-title">
      <h2 id="countdown-title" className="sr-only">Wedding Countdown</h2>
      <div className="grid grid-cols-4 max-w-xl mx-auto gap-6 text-center">
        <div className="space-y-1">
          <div className="font-display text-4xl md:text-5xl text-accent-foreground">{timeLeft.days}</div>
          <div className="text-sm uppercase tracking-wide text-muted-foreground">Days</div>
        </div>
        <div className="space-y-1">
          <div className="font-display text-4xl md:text-5xl text-accent-foreground">{timeLeft.hours}</div>
          <div className="text-sm uppercase tracking-wide text-muted-foreground">Hours</div>
        </div>
        <div className="space-y-1">
          <div className="font-display text-4xl md:text-5xl text-accent-foreground">{timeLeft.minutes}</div>
          <div className="text-sm uppercase tracking-wide text-muted-foreground">Mins</div>
        </div>
        <div className="space-y-1">
          <div className="font-display text-4xl md:text-5xl text-accent-foreground">{timeLeft.seconds}</div>
          <div className="text-sm uppercase tracking-wide text-muted-foreground">Secs</div>
        </div>
      </div>
    </section>
  );
};

const NikahSection = () => {
  return (
    <section className="container mx-auto py-16 md:py-24" aria-labelledby="nikah-title">
      <div className="text-center mb-8 md:mb-10">
        <h2 id="nikah-title" className="font-amiri text-4xl md:text-5xl text-accent-foreground tracking-wide">
          Nikah
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto italic">
          "And He placed between you affection and mercy." — Surah Ar-Rum 30:21
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 text-accent-foreground/70">
          <span className="h-px w-16 bg-accent/50" />
          <span className="w-2 h-2 rounded-full bg-accent/70" />
          <span className="h-px w-16 bg-accent/50" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="animate-fade-in">
          <div className="p-3 bg-card border rounded-lg shadow-lg">
            <div className="overflow-hidden rounded-t-[120px] border border-accent/30 shadow-md">
              <img src={heroBg} alt="Nikah venue" loading="lazy" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>

        <article className="animate-fade-in">
          <div className="bg-background/70 backdrop-blur-sm border rounded-lg p-6 md:p-8 shadow-md">
            <h3 className="sr-only">Nikah Details</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm uppercase tracking-wide text-muted-foreground">Venue</dt>
                <dd className="text-foreground font-medium">[Venue name], [Location]</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide text-muted-foreground">Date & Time</dt>
                <dd className="text-foreground font-medium">[Date], [Time]</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide text-muted-foreground">About the Ceremony</dt>
                <dd className="text-muted-foreground">
                  A brief description of the Nikah ceremony and customs observed. You can include details
                  about the khutbah, proposal and acceptance (ijab and qabul), and the signing of the Nikah
                  contract.
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide text-muted-foreground">Family Traditions</dt>
                <dd className="text-muted-foreground">
                  Any special family traditions or notes you would like guests to know.
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>

      <div className="mt-12 flex items-center gap-4 text-accent-foreground/70">
        <span className="h-px w-full bg-accent/40" />
        <span className="w-3 h-3 rounded-full border border-accent/70" />
        <span className="h-px w-full bg-accent/40" />
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      {/* SEO H1 must exist and match intent */}
      <h1 className="sr-only">Muhammad & Amatullah Wedding</h1>
      <Nav />
      <main>
        <section
          id="home"
          className="relative"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-background/60">
            <div className="container mx-auto py-20 md:py-28 text-center">
              <h2 className="font-display text-5xl md:text-7xl text-foreground">
                Talha & Ariba
              </h2>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                We Are Getting Married Nov 15, 2022
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto -mt-16 md:-mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Framed src="/lovable-uploads/e35634f9-05a8-45c1-b5eb-179f3943e0eb.png" alt="Groom portrait in cream sherwani with turban" caption={
              <>
                <div className="font-display text-xl text-foreground">Talha</div>
                <div className="text-sm text-muted-foreground">S/O</div>
                <div className="text-sm text-muted-foreground">Software Developer, B.Tech</div>
              </>
            } />
            <Framed src={bouquet} alt="White roses and blush buds bouquet" caption={
              <>
                <div className="font-display text-xl text-foreground">Ariba</div>
                <div className="text-sm text-muted-foreground">D/O</div>
                <div className="text-sm text-muted-foreground">Aalima</div>
              </>
            } />
            <Framed src={prayerMat} alt="Beautiful prayer mat with 'Ariba' written on it and flowers" />
          </div>
        </section>

        {/* Countdown Section - 36 days from now */}
        <Countdown daysFromNow={36} />

        {/* Nikah Section */}
        <NikahSection />

        {/* Hadith Section */}
        <HadithSection />

        {/* Dua Section */}
        <DuaSection />

        {/* Map Section */}
        <MapSection />

        {/* Ending Section */}
        <EndingSection />
      </main>
    </>
  );
};

export default Index;
