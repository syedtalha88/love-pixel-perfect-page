const MapSection = () => {
  const venueName = "Haji Ali Function Hall";
  const address = "Roshan Gate, Aurangabad";
  const description = "Parking available, near Haji ali Hall";

  const plusCode = "V8PW+W7 Chhatrapati Sambhajinagar, Maharashtra";

  return (
    <section
      id="map"
      aria-labelledby="map-title"
      className="container mx-auto py-16 md:py-24"
    >
      <div className="text-center animate-fade-in">
        <h2
          id="map-title"
          className="font-amiri text-4xl md:text-5xl text-accent-foreground tracking-wide"
        >
          Venue Location
        </h2>
        <div className="mt-6 flex items-center justify-center gap-3 text-accent-foreground/70">
          <span className="h-px w-16 bg-accent/50" />
          <span className="w-2 h-2 rounded-full bg-accent/70" />
          <span className="h-px w-16 bg-accent/50" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Venue Details */}
        <div className="order-2 md:order-1 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg shadow-md p-6 animate-fade-in">
          <dl className="space-y-3">
            <div>
              <dt className="text-sm uppercase tracking-wide text-muted-foreground">
                Venue
              </dt>
              <dd className="text-foreground font-medium">{venueName}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-muted-foreground">
                Address
              </dt>
              <dd className="text-foreground font-medium">{address}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-muted-foreground">
                Notes
              </dt>
              <dd className="text-muted-foreground">{description}</dd>
            </div>
          </dl>
          <div className="mt-4 flex gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline story-link text-accent-foreground"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="order-1 md:order-2 animate-fade-in">
          <div className="p-2 bg-card border rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.78024074914714!2d75.34542892941192!3d19.88720747727635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2a173213e65%3A0xd89b51d1db2dae4d!2sHaji%20Ali%20Function%20Hall!5e1!3m2!1sen!2sin!4v1754749046946!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-4 text-accent-foreground/70">
        <span className="h-px w-full bg-accent/40" />
        <span className="w-3 h-3 rounded-full border border-accent/70" />
        <span className="h-px w-full bg-accent/40" />
      </div>
    </section>
  );
};

export default MapSection;
