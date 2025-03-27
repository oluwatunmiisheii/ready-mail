"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@ready-mail/ui/components";
import Link from "next/link";

const collections = [
	{
		id: 1,
		name: "Rose",
		templates: [
			"Welcome email",
			"Order confirmation",
			"Password reset",
			"Email Verification",
			"Magic Link",
		],
	},
	{
		id: 2,
		name: "Lily",
		templates: [
			"Welcome email",
			"Order confirmation",
			"Password reset",
			"Account Setup",
			"Invite Friends",
		],
	},
	{
		id: 3,
		name: "Tulip",
		templates: [
			"Welcome email",
			"Order confirmation",
			"Password reset",
			"Receipt",
			"Invoice",
		],
	},
	{
		id: 4,
		name: "Daisy",
		templates: [
			"Welcome email",
			"Order confirmation",
			"Password reset",
			"Usage Report",
			"Milestone Celebration",
		],
	},
	{
		id: 5,
		name: "Orchid",
		templates: [
			"Welcome email",
			"Order confirmation",
			"Password reset",
			"New Device Login",
			"Two-Factor Authentication",
		],
	},
	{
		id: 6,
		name: "Sunflower",
		templates: [
			"Welcome email",
			"Order confirmation",
			"Password reset",
			"Feedback Request",
			"Review Request",
		],
	},
];

export const CollectionGrid = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};
	const templatesShown = 3;

	return (
		<motion.div
			variants={containerVariants}
			className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-3 md:grid-rows-1 mt-8"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
		>
			{collections.map((collection) => {
				const remainingCount =
					collection.templates.length - templatesShown;
				return (
					<motion.div
						className="relative"
						variants={itemVariant}
						key={collection.id}
					>
						<div className="relative z-10 mt-0 block h-full w-full overflow-hidden transition-all duration-[180ms] ease-in-out rounded-lg bg-white px-4 pt-5 pb-[18px] shadow-[inset_0_0_0_1px] shadow-gray-200">
							<div className="relative">
								<div className="absolute -left-4 h-5 w-[3px] rounded-r-sm bg-primary-500"></div>
								<h3 className="font-medium text-gray-900">
									{collection.name}
								</h3>
								<ul className="space-y-2 mt-4">
									{collection.templates
										.slice(0, templatesShown)
										.map((template) => (
											<li key={template}>
												<Link
													href="/templates"
													className="inline-flex items-center gap-2 mt-2 group transition-colors duration-200 ease-in-out text-gray-500 hover:text-gray-900 first:mt-0"
												>
													<Check className="size-4 " />
													<span className="sm:text-sm group-hover:underline">
														{template}
													</span>
												</Link>
											</li>
										))}
									{remainingCount > 0 && (
										<li className="text-sm text-gray-500 pl-6">
											+{remainingCount} more templates
										</li>
									)}
								</ul>
								<Button
									className="mt-4 w-full justify-between"
									variant="outline-black"
									size="sm"
								>
									View Collection
									<ArrowRight className="w-4 h-4 inline-block" />
								</Button>
							</div>
						</div>
					</motion.div>
				);
			})}
		</motion.div>
	);
};
