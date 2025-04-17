import testimonialAvatar from "@/public/testimonials/frip_app.webp";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function TesimonialHero() {
  return (
    <div className="mt-8 relative bg-white/50 backdrop-blur-sm border border-gray-100/60 rounded-lg px-4 py-3 shadow-sm max-w-md">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3 mt-1">
          <Image
            src={testimonialAvatar}
            alt="Photo de Mélina S., Frip West Indies"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-1">
            <span className="text-xs font-semibold text-gray-700">
              Mélina S.
            </span>
            <span className="mx-1.5 text-gray-300">•</span>
            <span className="text-xs text-gray-500 truncate">
              Frip West Indies
            </span>
          </div>
          <p className="text-xs/5 text-gray-600">
            Un <span className="font-bold">développeur</span> a l&apos;écoute,
            rapide et qui sait ce qu&apos;il fait. J&apos;ai développé mon{" "}
            <span className="font-bold">site</span> et{" "}
            <span className="font-bold">web app</span> avec lui, et c&apos;était{" "}
            <span className="font-bold">parfait</span> !
          </p>
          <div className="flex mt-1.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-3 w-3 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
