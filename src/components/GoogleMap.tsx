import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 27.7172, lng: 85.3240 }, // Kathmandu coordinates
          zoom: 13,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#f8f9fa" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e3f2fd" }]
            }
          ]
        });

        // Add marker for main office
        new window.google.maps.Marker({
          position: { lat: 27.7172, lng: 85.3240 },
          map: map,
          title: "Fly High International Education Consultancy - Head Office",
          icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#10b981" stroke="white" stroke-width="4"/>
                <path d="M20 10L26 22H14L20 10Z" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 40)
          }
        });

        // Info window for the marker
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937;">Fly High International</h3>
              <p style="margin: 0; color: #6b7280;">Putalisadak, Kathmandu<br/>Nepal - 44600</p>
              <p style="margin: 8px 0 0 0; color: #10b981;">📞 +977-1-4444444</p>
            </div>
          `
        });

        // Add click listener to marker
        const marker = new window.google.maps.Marker({
          position: { lat: 27.7172, lng: 85.3240 },
          map: map,
          title: "Fly High International Education Consultancy"
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    // Cleanup
    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-card border border-border">
      <div ref={mapRef} className="w-full h-full" />
      {/* Fallback for when Google Maps API is not available */}
      <div className="w-full h-full bg-muted/30 flex items-center justify-center text-muted-foreground hidden [&:only-child]:flex">
        <div className="text-center">
          <div className="text-4xl mb-2">🗺️</div>
          <p>Map loading...</p>
          <p className="text-sm">Putalisadak, Kathmandu, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;