"use client";

import Image from "next/image";
import { Section } from "../../components/section/section";
import { Card } from "@ready-mail/ui/components";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I'm blown away by the versatility of the components in this library. They make UI development a breeze!",
    name: "Alice Johnson",
    username: "@alicejohnson",
    social: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Using this component library has significantly speed up our development process. The quality and ease of integration are remarkable!",
    name: "David Smith",
    username: "@davidsmith",
    social: "#",
  },
  {
    image: "https://i.imgur.com/kaDy9hV.jpeg",
    text: "The components in this library are not just well-designed but also highly customizable. It's a developer's dream!",
    name: "Emma Brown",
    username: "@emmabrown",
    social: "#",
  },
  {
    image: "https://i.imgur.com/cRwFxtE.png",
    text: "I love  how intuitive and well-documented this component library is. It has significantly improved our UI consistency across projects.",
    name: "James Wilson",
    username: "@jameswilson",
    social: "#",
  },
  {
    image: "https://i.imgur.com/TQIqsob.png",
    text: "Implementing this component library was a game-changer for our team. It has elevated our product's UI to a whole new level!",
    name: "Sophia Lee",
    username: "@sophialee",
    social: "#",
  },
  {
    image: "https://i.imgur.com/3ROmJ0S.png",
    text: "Using this library has been a game-changer for our product development.",
    name: "Michael Davis",
    username: "@michaeldavis",
    social: "#",
  },
];

export function WallOfLove() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-4xl font-medium">
            Wall of Love{" "}
            <HeartIcon className="inline-block size-8 text-[#e4bdfd]" />
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-80 h-auto p-5 relative bg-card border-gray-200"
            >
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-4">
                  <span className="font-semibold text-base">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {testimonial.username}
                  </span>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <p className="text-gray-600 font-medium">{testimonial.text}</p>
              </div>
              <Link
                href={testimonial.social}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
              >
                <svg
                  height="23"
                  viewBox="0 0 1200 1227"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
