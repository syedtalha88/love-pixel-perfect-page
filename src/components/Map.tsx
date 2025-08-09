import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  accessToken?: string;
  center?: [number, number];
  zoom?: number;
  marker?: { lngLat: [number, number]; label?: string };
  className?: string;
}

const Map = ({ accessToken, center = [72.8777, 19.076], zoom = 11, marker, className }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>(
    accessToken || localStorage.getItem('mapbox_public_token') || ''
  );

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      center,
      zoom,
      pitch: 35,
    });

    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255,255,255)',
        'high-color': 'rgb(200,200,225)',
        'horizon-blend': 0.2,
      } as any);
    });

    if (marker) {
      const el = document.createElement('div');
      el.className = 'rounded-full bg-accent w-3 h-3 ring-2 ring-background shadow';
      new mapboxgl.Marker({ element: el })
        .setLngLat(marker.lngLat)
        .setPopup(marker.label ? new mapboxgl.Popup().setText(marker.label) : undefined)
        .addTo(map.current);
    }

    return () => {
      map.current?.remove();
    };
  }, [token, center.toString(), zoom]);

  const handleSave = () => {
    if (token) localStorage.setItem('mapbox_public_token', token);
  };

  return (
    <div className={className}>
      <div className="relative w-full h-80 md:h-[420px] border border-accent/30 rounded-lg shadow-lg overflow-hidden">
        {token ? (
          <div ref={mapContainer} className="absolute inset-0" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/80">
            <p className="text-sm text-muted-foreground px-6 text-center">
              Add your Mapbox public token to preview the interactive map locally.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="pk.YourMapboxPublicToken"
                className="px-3 py-2 rounded-md border bg-background text-foreground w-72"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <button
                className="px-3 py-2 rounded-md border bg-accent text-accent-foreground"
                onClick={handleSave}
              >
                Save Token
              </button>
            </div>
            <p className="text-xs text-muted-foreground px-6 text-center">
              Tip: Store as local key “mapbox_public_token”. In production, set it via Supabase Edge Function secrets.
            </p>
          </div>
        )}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
      </div>
    </div>
  );
};

export default Map;
