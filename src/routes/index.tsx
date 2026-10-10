import { createFileRoute } from "@tanstack/react-router";
import { HotelHome } from "@/components/hotel/HotelHome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <HotelHome />;
}
