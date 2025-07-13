"use client";

import { siteConfig } from "../../../lib/site-config";
import { useScroll } from "../../hooks/use-scroll";
import Link from "next/link";
import React from "react";
import { Badge, Button } from "@ready-mail/ui/components";
import { cn } from "@ready-mail/ui/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Blog", href: siteConfig.baseLinks.blog },
  { name: "Templates", href: siteConfig.baseLinks.templates },
  { name: "Collections", href: siteConfig.baseLinks.collections },
  { name: "Design", href: siteConfig.baseLinks.design },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(15);

  return (
    <header>
      <div
        className={cn(
          "z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden px-3 py-3 rounded-lg transition-all border border-transparent duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
          scrolled || open
            ? "backdrop-blur-nav max-w-5xl border border-gray-100 bg-white/80 shadow-xl shadow-black/5 fixed inset-x-3 top-4"
            : "bg-white/0",
        )}
      >
        <div className="relative flex items-center justify-between w-full">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Solar Tech Logo</span>
            Logo
            <Badge className="ml-2 px-1.5 text-[9px] absolute bottom-4 bg-[#e4bdfd] text-gray-800">
              Open Source
            </Badge>
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    className={cn(
                      "px-2 py-1 text-gray-900 relative",
                      isActive &&
                        "font-semibold text-[#5858e0] before:content-[''] before:block before:h-[5px] before:w-[5px] before:bg-[#5858e0] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:-bottom-[2px] before:left-1/2",
                    )}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
          <Link href={siteConfig.baseLinks.collections}>
            <Button
              variant="ghost"
              className="hidden h-10 font-semibold sm:flex gap-1 sm:items-center"
            >
              <svg
                className="size-6 mr-1"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="text-gray-900 font-normal">Star</span>
            </Button>
          </Link>
          <Button
            onClick={() => setOpen(!open)}
            variant="outline-black"
            className="p-1.5 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <MenuIcon className="size-6 shrink-0 text-gray-900" aria-hidden />
            ) : (
              <XIcon className="size-6 shrink-0 text-gray-900" aria-hidden />
            )}
          </Button>
        </div>
        <nav
          className={cn(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "hidden" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="#solutions">Blog</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#farm-management">Templates</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#solar-analytics">Collection</Link>
            </li>
          </ul>
          <Button variant="black">Get Started</Button>
        </nav>
      </div>
    </header>
  );
}
