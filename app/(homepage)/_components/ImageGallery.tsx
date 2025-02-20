import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageComponent from "./ImageComponent";

const images = [
  { src: "/iPhone 13 mini - 36.png", alt: "Ghareasy", title: "Ghareasy" },
  { src: "/Billing profile.png", alt: "Billing profile", title: "Atlassian" },
  { src: "/Shortlisted without login.png", alt: "Ghareasy", title: "Ghareasy" },
  {
    src: "/Confirmbillingdetails.png",
    alt: "Payment details",
    title: "Atlassian",
  },
  { src: "/iPhone 16 Pro - 3.png", alt: "Ghareasy", title: "Ghareasy" },
  {
    src: "/Subscription summary.png",
    alt: "Billing profile",
    title: "Atlassian",
  },
  { src: "/Select your role.png", alt: "Ghareasy", title: "Ghareasy" },
];

export default function ImageGallery() {
  return (
    <div className="flex shrink-0 gap-4 md:gap-5 overflow-x-scroll p-6 no-scrollbar">
      <button
        type="button"
        className="hidden lg:flex absolute items-center justify-center left-4 top-1/2 -translate-y-1/2 z-10 bg-[rgba(200,200,200,0.6)] backdrop-blur-md h-9 w-9 rounded-full"
      >
        <ChevronLeft className="-ml-[2px]" width={20} height={20} />
      </button>
      <button
        type="button"
        className="hidden lg:flex absolute items-center justify-center right-4 top-1/2 -translate-y-1/2 z-10 bg-[rgba(200,200,200,0.6)] backdrop-blur-md h-9 w-9 rounded-full"
      >
        <ChevronRight className="-mr-[1px]" width={20} height={20} />
      </button>
      {images.map((image, index) => (
        <ImageComponent
          key={index}
          src={image.src}
          alt={image.alt}
          title={image.title}
        />
      ))}
    </div>
  );
}
