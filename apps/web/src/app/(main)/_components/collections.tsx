"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { Section } from "../../components/section/section";
import { ArrowRight } from "lucide-react";
import { CollectionGrid } from "../collections/_components/collection-grid";
import { Button } from "@ready-mail/ui/components";
import Link from "next/link";

export const Collections = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className="bg-gray-50 w-full"
		>
			<Section>
				<div className="text-center">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="inline-block px-3 py-1 text-xs font-medium bg-gray-200/50 text-gray-800 rounded-full mb-3"
					>
						Collections{" "}
						<ArrowRight className="w-4 h-4 inline-block" />
					</motion.span>
					<h2 className="mt-2 text-2xl font-medium tracking-tight text-balance text-gray-900 md:text-3xl">
						Explore our collections of ready to use templates
					</h2>
				</div>
				<CollectionGrid />
				<AnimatePresence mode="wait">
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1],
								},
							},
						}}
						className="flex justify-center mt-8"
					>
						<Link href="/collections">
							<Button variant="black">
								View All Collections
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						</Link>
					</motion.div>
				</AnimatePresence>
			</Section>
		</motion.div>
	);
};
