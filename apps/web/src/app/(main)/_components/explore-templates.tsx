import React from "react";
import { Section } from "../../components/section/section";
import { Button } from "@ready-mail/ui/components";

export const ExploreTemplates = () => {
  return (
    <div className="relative h-[140vh]">
      <Section
        className="h-full bg-cover bg-no-repeat grayscale bg-bottom absolute inset-0 max-w-full"
        style={{
          backgroundImage: "url('/images/explore-templates.png')",
        }}
      ></Section>
      <div className="sticky top-20 pt-40 z-10 mx-auto flex flex-col items-center gap-2">
        <Button
          size="lg"
          variant="outline-black"
          className="bg-white lg:py-8 lg:px-8 lg:text-xl"
        >
          View Templates
        </Button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
    </div>
  );
};
