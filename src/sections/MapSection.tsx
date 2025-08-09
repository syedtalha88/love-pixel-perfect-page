import Map from '@/components/Map';

const MapSection = () => {
  // Update these details as needed
  const venueName = '[Venue name]';
  const address = '[Full address, City]';
  const description = 'Parking available, close to [Landmark].';
  // Default center (example coords) — replace with actual venue coordinates
  const center: [number, number] = [72.8777, 19.076];

  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto py-16 md:py-24">
      <div className="text-center animate-fade-in">
        <h2 id="map-title" className="font-amiri text-4xl md:text-5xl text-accent-foreground tracking-wide">
          Venue Location
        </h2>
        <div className="mt-6 flex items-center justify-center gap-3 text-accent-foreground/70">
          <span className="h-px w-16 bg-accent/50" />
          <span className="w-2 h-2 rounded-full bg-accent/70" />
          <span className="h-px w-16 bg-accent/50" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="order-2 md:order-1 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg shadow-md p-6 animate-fade-in">
          <h3 className="sr-only">Venue Details</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm uppercase tracking-wide text-muted-foreground">Venue</dt>
              <dd className="text-foreground font-medium">{venueName}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-muted-foreground">Address</dt>
              <dd className="text-foreground font-medium">{address}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-muted-foreground">Notes</dt>
              <dd className="text-muted-foreground">{description}</dd>
            </div>
          </dl>
          <div className="mt-4 flex gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${center[1]},${center[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline story-link text-accent-foreground"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 animate-fade-in">
          <div className="p-2 bg-card border rounded-lg shadow-lg">
            <Map center={center} zoom={12} className="rounded-md" />
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
