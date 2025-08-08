import { Facebook, Twitter, Linkedin, Instagram, Search, ShoppingCart } from "lucide-react";
import heroBg from "@/assets/hero-floral-bg.jpg";
import groom from "@/assets/groom-portrait.jpg";
import bride from "@/assets/bride-portrait.jpg";
import bouquet from "@/assets/bouquet.jpg";

const Nav = () => (
  <header className="sticky top-0 z-40 bg-card/90 backdrop-blur border-b">
    <div className="container mx-auto hidden md:flex items-center justify-between py-3">
      <div className="flex items-center gap-4 text-accent-foreground/80">
        <a aria-label="Facebook" href="#" className="hover:text-foreground transition-colors"><Facebook size={16} /></a>
        <a aria-label="Twitter" href="#" className="hover:text-foreground transition-colors"><Twitter size={16} /></a>
        <a aria-label="LinkedIn" href="#" className="hover:text-foreground transition-colors"><Linkedin size={16} /></a>
        <a aria-label="Instagram" href="#" className="hover:text-foreground transition-colors"><Instagram size={16} /></a>
      </div>
      <nav className="flex items-center gap-8 text-sm uppercase tracking-wide text-muted-foreground">
        <a href="#home" className="hover:text-foreground transition-colors">Home</a>
        <a href="#pages" className="hover:text-foreground transition-colors">Pages</a>
        <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
        <span className="font-display text-2xl text-accent-foreground">Love Love</span>
        <a href="#blog" className="hover:text-foreground transition-colors">Blog</a>
        <a href="#shop" className="hover:text-foreground transition-colors">Shop</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <div className="flex items-center gap-4 text-accent-foreground/80">
        <button aria-label="Search" className="hover:text-foreground transition-colors"><Search size={18} /></button>
        <button aria-label="Cart" className="hover:text-foreground transition-colors relative">
          <ShoppingCart size={18} />
          <span className="absolute -top-2 -right-2 text-xs bg-accent text-accent-foreground rounded-full w-5 h-5 grid place-items-center">2</span>
        </button>
      </div>
    </div>
    {/* Mobile simplified nav */}
    <div className="md:hidden container mx-auto py-3 flex items-center justify-center">
      <span className="font-display text-3xl text-accent-foreground">Love Love</span>
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
            <Framed src={groom} alt="Groom portrait in blush shirt" />
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
