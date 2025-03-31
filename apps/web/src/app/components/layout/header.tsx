"use client";

import { siteConfig } from "../../../lib/site-config";
import { useScroll } from "../../hooks/use-scroll";
import Link from "next/link";
import React from "react";
import { Badge, Button } from "@ready-mail/ui/components";
import { cn } from "@ready-mail/ui/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(15);

	return (
		<header>
			<div
				className={cn(
					"z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden px-3 py-3 rounded-xl transition-all border border-transparent duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
					scrolled || open
						? "backdrop-blur-nav max-w-5xl border border-gray-100 bg-white/80 shadow-xl shadow-black/5 fixed inset-x-3 top-4"
						: "bg-white/0"
				)}
			>
				<div className="relative flex items-center justify-between w-full">
					<Link href={siteConfig.baseLinks.home} aria-label="Home">
						<span className="sr-only">Solar Tech Logo</span>
						Logo
						<Badge className="ml-2 px-1.5 text-[9px] absolute bottom-4">
							Open Source
						</Badge>
					</Link>
					<nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
						<div className="flex items-center gap-10 font-medium">
							<Link
								className="px-2 py-1 text-gray-900"
								href={siteConfig.baseLinks.blog}
							>
								Blog
							</Link>
							<Link
								className="px-2 py-1 text-gray-900"
								href={siteConfig.baseLinks.templates}
							>
								Templates
							</Link>
							<Link
								className="px-2 py-1 text-gray-900"
								href={siteConfig.baseLinks.collections}
							>
								Collections
							</Link>
						</div>
					</nav>
					<Link href={siteConfig.baseLinks.collections}>
						<Button
							variant="black"
							className="hidden h-10 font-semibold sm:block"
						>
							Get Started
						</Button>
					</Link>
					<Button
						onClick={() => setOpen(!open)}
						variant="outline-black"
						className="p-1.5 sm:hidden"
						aria-label={
							open
								? "Close Navigation Menu"
								: "Open Navigation Menu"
						}
					>
						{!open ? (
							<MenuIcon
								className="size-6 shrink-0 text-gray-900"
								aria-hidden
							/>
						) : (
							<XIcon
								className="size-6 shrink-0 text-gray-900"
								aria-hidden
							/>
						)}
					</Button>
				</div>
				<nav
					className={cn(
						"mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
						open ? "" : "hidden"
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
