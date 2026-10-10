import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  AirVent,
  ConciergeBell,
  Dumbbell,
  ParkingSquare,
  Plane,
  Bath,
  UtensilsCrossed,
  Waves,
  Wifi,
  Presentation,
  Coffee,
} from "lucide-react";

export const amenityIcons: Record<string, LucideIcon> = {
  wifi: Wifi,
  breakfast: Coffee,
  parking: ParkingSquare,
  pool: Waves,
  ac: AirVent,
  shuttle: Plane,
  restaurant: UtensilsCrossed,
  gym: Dumbbell,
  sauna: Bath,
  desk24: ConciergeBell,
  conference: Presentation,
  accessible: Accessibility,
};
