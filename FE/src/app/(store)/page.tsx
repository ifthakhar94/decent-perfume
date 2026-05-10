import type { Metadata } from "next";
import { StoreHomeHero } from "@/components/storefront/store-home-hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Curated perfume and fragrance—shop niche and designer scents at Decent Perfume.",
};

export default function HomePage() {
  return <StoreHomeHero />;
}
