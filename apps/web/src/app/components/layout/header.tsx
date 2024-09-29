"use client";
import { Section } from "../section/section";
import React, { useEffect } from "react";
import { cn } from "@ready-mail/ui/lib/utils";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // on scroll add some classes to the header

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn("h-[70px] sticky top-0 z-50", {
        "bg-white backdrop-blur-[60px]": isScrolled,
      })}
    >
      <Section className="py-0 h-full">
        <nav className="flex justify-between items-center h-full">
          <h1>logo</h1>
          <ul className="flex space-x-8">
            <li>
              <Link href="/templates">Templates</Link>
            </li>
            <li>
              <Link href="/collections">Collections</Link>
            </li>
          </ul>
        </nav>
      </Section>
    </header>
  );
};
