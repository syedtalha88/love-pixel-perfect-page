import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-floral-bg.jpg";
import groom from "@/assets/groom-portrait.jpg";
import bride from "@/assets/bride-portrait.jpg";
import bouquet from "@/assets/bouquet.jpg";
import prayerMat from "@/assets/prayer-mat-ariba.jpg";

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

const Framed = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="bg-card border shadow-lg rounded-md p-2 sm:p-3 md:p-4">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="rounded-sm object-cover w-full h-full"
    />
  </figure>
);

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
                Muhammad & Amatullah
              </h2>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                We Are Getting Married Nov 15, 2022
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto -mt-16 md:-mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Framed src={prayerMat} alt="Prayer mat with Ariba embroidery" />
            <Framed src={bouquet} alt="White roses and blush buds bouquet" />
            <Framed src={bride} alt="Bride portrait in beige hijab" />
          </div>
        </section>

        {/* Spacer to balance the hero overlap */}
        <section className="py-16 md:py-24" />
      </main>
    </>
  );
};

export default Index;
