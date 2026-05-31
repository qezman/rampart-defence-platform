import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getVehicleBySlug,
  getAllVehicles,
  getRelatedVehicles,
} from "@/lib/mock-data/vehicles";
import VehicleHero from "@/components/vehicles/vehicle-hero";
import VehicleSubNav from "@/components/vehicles/vehicle-sub-nav";
import VehicleOverview from "@/components/vehicles/vehicle-overview";
import SpecTable from "@/components/vehicles/spec-table";
import ProtectionDiagram from "@/components/vehicles/protection-diagram";
import OptionalUpgrades from "@/components/vehicles/optional-upgrades";
import VehicleGallery from "@/components/vehicles/vehicle-gallery";
import RelatedVehicles from "@/components/vehicles/related-vehicles";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllVehicles().map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} — ${vehicle.protectionLevel} Armoured Vehicle`,
    description: vehicle.description,
  };
}

export default function VehicleDetailPage({ params }: PageProps) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) notFound();

  const related = getRelatedVehicles(params.slug);

  return (
    <>
      <VehicleHero vehicle={vehicle} />
      <VehicleSubNav />
      <VehicleOverview vehicle={vehicle} />
      <SpecTable specs={vehicle.specs} />
      <ProtectionDiagram />
      <OptionalUpgrades upgrades={vehicle.optionalUpgrades} />
      <VehicleGallery
        images={vehicle.galleryImages}
        vehicleName={vehicle.name}
      />
      <RelatedVehicles vehicles={related} />
    </>
  );
}
