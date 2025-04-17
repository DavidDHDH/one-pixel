import Marquee from "@/components/ui/marquee";
import delifood from "@/public/partners/delifood.webp";
import discover from "@/public/partners/discover.webp";
import fwi from "@/public/partners/fwi.webp";
import okleira from "@/public/partners/okleira.webp";
import rway from "@/public/partners/rway.webp";
import seabarts from "@/public/partners/seabarts.webp";
import stafflink from "@/public/partners/stafflink.webp";
import tile from "@/public/partners/tile.webp";
import villacare from "@/public/partners/villacare.webp";

import Image, { StaticImageData } from "next/image";

const partners = [
  {
    name: "Delifood",
    image: delifood,
    alt: "Delifood Island – Service de livraison de repas à Saint-Barthélemy",
  },
  {
    name: "FWI",
    image: fwi,
    alt: "FWI – Frip West Indies, boutique de prêt-à-porter à Saint-Barth - Saint Martin - Guadeloupe - Martinique",
  },
  {
    name: "Rway",
    image: rway,
    alt: "St Barth R Way – Transport privé et transferts à Saint-Barthélemy",
  },
  {
    name: "Okleira",
    image: okleira,
    alt: "Okleira – Agence digitale à Saint Barthélémy",
  },
  {
    name: "Villacare",
    image: villacare,
    alt: "Villa Care – Conciergerie et gestion de villas à Saint-Barth",
  },
  {
    name: "Seabarts",
    image: seabarts,
    alt: "Seabarts – Location de bateaux et watersports à Saint-Barth",
  },
  {
    name: "Tile",
    image: tile,
    alt: "The Tile & Design Shop – Showroom de décoration et carrelage à Saint-Barth",
  },
  {
    name: "Discover",
    image: discover,
    alt: "Discover St Barths – Conciergerie privée à Saint-Barthélemy",
  },
  {
    name: "Stafflink",
    image: stafflink,
    alt: "Stafflink – Recrutement et gestion de personnel pour l’hôtellerie",
  },
];

const firstRow = partners;
// const secondRow = partners.slice(partners.length / 2);

const PartnerCard = ({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) => {
  return (
    <Image
      alt={alt}
      src={image}
      width={100}
      height={50}
      className="col-span-2 max-h-28 w-full object-contain lg:col-span-1 px-2 opacity-75 hover:opacity-100 transition duration-300 hover:scale-105"
    />
  );
};

export function PartnersCarousel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee className="[--duration:30s]">
        {firstRow.map((partner) => (
          <PartnerCard key={partner.name} {...partner} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((partner) => (
          <PartnerCard key={partner.name} {...partner} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
