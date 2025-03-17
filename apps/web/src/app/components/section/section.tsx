import { cn } from "@ready-mail/ui/lib/utils";
import React from "react";

type SectionProps = JSX.IntrinsicElements["section"];

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "px-8 lg:px-16 min-[1440px]:px-[110px] w-full max-w-7xl mx-auto py-[80px]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
