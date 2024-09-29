import React from "react";
import { Section } from "../../components/section/section";
import { Button } from "@ready-mail/ui/components";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/aol.png",
    alt: "AOL Logo",
    className: "absolute top-1/4 -translate-y-1/2 left-10",
    width: 64,
    height: 64,
  },
  {
    src: "/images/apple.png",
    alt: "Apple Mail Logo",
    className: "absolute top-1/2 -translate-y-1/2 left-40",
    width: 64,
    height: 64,
  },
  {
    src: "/images/gmail.png",
    alt: "Gmail Logo",
    className: "absolute top-3/4 -translate-y-1/2 left-80",
    width: 64,
    height: 64,
  },
  {
    src: "/images/outlook.png",
    alt: "Outlook Logo",
    className: "absolute top-1/4 -translate-y-1/2 right-10",
    width: 64,
    height: 64,
  },
  {
    src: "/images/yahoo.png",
    alt: "Yahoo Mail Logo",
    className: "absolute top-1/2 -translate-y-1/2 right-40",
    width: 64,
    height: 64,
  },
  {
    src: "/images/proton.svg",
    alt: "ProtonMail Logo",
    className: "absolute top-3/4 -translate-y-1/2 right-80",
    width: 64,
    height: 64,
  },
];

export const Hero = () => {
  return (
    <>
      <div className="relative">
        <Section className="text-center max-w-6xl py-24">
          <h1 className="text-neutral-900 font-bold text-2xl md:text-4xl lg:text-5xl lg:leading-[60px]">
            Elevate Your App Communication with Ready-to-Use Email Templates
          </h1>
          <p className="text-neutral-700 text-2xl font-normal mt-6 mb-12">
            Browse, preview, copy and implement professionally designed email
            templates for all your app's needs.
          </p>
          <div className="flex space-x-3 justify-center items-center">
            <Link href="/templates">
              <Button size="lg">Browse Templates</Button>
            </Link>
            <Link
              href="https://github.com/oluwatunmiisheii/ready-mail"
              target="_black"
              rel="noreferer"
            >
              <Button variant="primary-accent">
                <Github className="w-6 h-6 mr-2" />
                Star on Github
              </Button>
            </Link>
          </div>
        </Section>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.className} transition-opacity duration-300 hover:opacity-100 opacity-60 blur-sm`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="relative h-full w-full bg-white -z-10">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 -z-10 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
    </>
  );
};
