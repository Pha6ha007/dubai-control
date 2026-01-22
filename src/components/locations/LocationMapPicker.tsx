import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface LocationMapPickerProps {
  latitude: number | null;
  longitude: number | null;
  onLocationChange: (lat: number, lng: number) => void;
}

// Default to Dubai center
const DUBAI_CENTER: [number, number] = [25.2048, 55.2708];

function MapClickHandler({ onLocationChange }: { onLocationChange: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      onLocationChange(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function MapCenterUpdater({ latitude, longitude }: { latitude: number | null; longitude: number | null }) {
  const map = useMap();
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (latitude !== null && longitude !== null && !hasInitializedRef.current) {
      map.setView([latitude, longitude], 15);
      hasInitializedRef.current = true;
    }
  }, [latitude, longitude, map]);

  return null;
}

export function LocationMapPicker({ latitude, longitude, onLocationChange }: LocationMapPickerProps) {
  const hasValidCoords = latitude !== null && longitude !== null;
  const center = hasValidCoords ? [latitude, longitude] as [number, number] : DUBAI_CENTER;

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        Click on the map to set the location coordinates.
      </p>
      <div className="h-[300px] rounded-lg border border-border overflow-hidden">
        <MapContainer
          center={center}
          zoom={hasValidCoords ? 15 : 11}
          className="h-full w-full"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler onLocationChange={onLocationChange} />
          <MapCenterUpdater latitude={latitude} longitude={longitude} />
          {hasValidCoords && (
            <Marker position={[latitude!, longitude!]} />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
