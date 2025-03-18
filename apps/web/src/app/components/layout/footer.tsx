import React from "react";
import { Section } from "../section/section";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 py-12">
			<Section className="py-0">
				<nav className="flex justify-between items-center text-neutral-400 text-sm">
					<h1>logo</h1>
					<ul className="flex space-x-8">
						<li>
							<Link href="/">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/">Terms of Use</Link>
						</li>
					</ul>
				</nav>
			</Section>
			<hr className="my-6 border-t border-gray-800 h-px" />
			<div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
				<div
					className="flex flex-row items-center justify-center gap-1 
                text-slate-400"
				>
					<span> © </span>
					<span>{new Date().getFullYear()}</span>
					<span>Made with</span>
					❤️
					<span> by </span>
					<span className="cursor-pointer text-white">
						<Link
							aria-label="Logo"
							className="font-bold"
							href="https://github.com/oluwatunmiisheii"
							target="_blank"
						>
							Wilson Adenuga {""}
						</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};
