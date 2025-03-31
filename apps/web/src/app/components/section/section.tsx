import { cn } from "@ready-mail/ui/lib/utils";
import React from "react";

type SectionProps = JSX.IntrinsicElements["section"];

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "w-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
