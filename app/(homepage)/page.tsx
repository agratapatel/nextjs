import ImageGallery from "./_components/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import SmoothReveal from "./_components/SmoothReveal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const AboutAgrata = () => {
  return (
    <div className="flex flex-col gap-4 items-start max-w-lg text-lg">
      <ShineBorder className="p-1 rounded-xl">
        <Image
          src="/profile.JPG"
          alt="Agrata"
          width={120}
          height={120}
          className="rounded-xl"
        />
      </ShineBorder>
      <p>Hey I&apos;m Agrata</p>
      <p>
        Founder of{" "}
        <Link
          href="https://ghareasy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ghareasy.com
        </Link>{" "}
        - easier way to find your next rental apartments in India.
      </p>
      <p>
        Previously I was{" "}
        <Link
          href="https://atlassian.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Product designer at Atlassian.
        </Link>{" "}
        I&apos;ve also worked with Samsung, Reliance Jio, Able, and more. Design
        graduate from {" "}
        <Link
          href="https://iitg.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          IIT Guwahati 2020.
        </Link>
      </p>
      </div>  
  );
};

export default function Home() {
  return (
    <SmoothReveal>
      <div className="flex flex-col gap-4 items-center py-16">
        
        <div className="flex flex-col gap-8 items-start max-w-lg">
        <AboutAgrata />
          <RainbowButton>
            <Link href="mailto:agratapatel@gmail.com">Contact</Link>
          </RainbowButton>
        </div>
        <div className="overflow-hidden relative group w-full">
          <ImageGallery />
        </div>
        <p className="text-center text-sm text-gray-500">©️ 2025</p>
      </div>
    </SmoothReveal>
  );
}
