"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { LayoutTemplateIcon, MoveUpRightIcon } from "lucide-react";
import { Button } from "@ready-mail/ui/components";

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

	return (
		<motion.div
			variants={containerVariants}
			className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-3 md:grid-rows-1 mt-8 relative "
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
		>
			{collections.map((collection) => (
				<motion.div
					className="relative border border-[rgb(5,5,5,0.2)] rounded-[10px] bg-white transition-all ease-in-out duration-500 h-[428px] group"
					variants={itemVariant}
					whileHover={{ scale: 0.98 }}
					key={collection.id}
				>
					<Link className="block h-full" href="/">
						<div className="bg-[#e4bdfd]/10 rounded-tl-lg rounded-tr-lg p-[18px] pb-0 transition-all ease-in-out box-border">
							<div
								className="relative overflow-y-visible"
								style={{
									clipPath: "inset(-10px 0 0 -25px)",
								}}
							>
								<Image
									src="/images/sample.webp"
									alt={collection.name}
									width={500}
									height={292}
									className="w-[90%] h-[292px] relative z-[144] rounded-tl-md rounded-tr-md object-cover object-center"
								/>
								<div
									className="rounded-md border border-opacity-5 border-black bg-white absolute bottom-0 z-0 overflow-hidden"
									style={{
										width: "90%",
										height: "262px",
										top: "30px",
										right: "0.5%",
										boxShadow:
											"0 0.175px 1.041px 0 rgba(0, 0, 0, 0.01), 0 0.8px 2.925px 0 rgba(0, 0, 0, 0.02), 0 2.025px 7.847px 0 rgba(0, 0, 0, 0.03), 0 4px 18px 0 rgba(0, 0, 0, 0.04)",
									}}
								/>
								<div
									className="rounded-md border border-opacity-5 border-black bg-white absolute bottom-0 z-0 overflow-hidden"
									style={{
										width: "90%",
										height: "277px",
										top: "16px",
										right: "6%",
										boxShadow:
											"0 0.175px 1.041px 0 rgba(0, 0, 0, 0.01), 0 0.8px 2.925px 0 rgba(0, 0, 0, 0.02), 0 2.025px 7.847px 0 rgba(0, 0, 0, 0.03), 0 4px 18px 0 rgba(0, 0, 0, 0.04)",
										transition: "all 0.5s ease-in-out",
									}}
								/>
							</div>
						</div>
						<div className="py-4 px-5">
							<p className="text-gray-900 text-lg font-semibold leading-6 tracking-[-.48px] mb-2">
								{collection.name}
							</p>
							<div className="flex gap-2">
								<LayoutTemplateIcon className="w-5 h-5 text-gray-500" />
								<p className="text-sm">
									{collection.templates.length} templates
								</p>
							</div>
						</div>
						<div className="hidden lg:block py-4 px-5 absolute bottom-4 w-full transition-all duration-500 delay-0 ease-in-out bg-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 group-hover:bottom-[20px]">
							<p className="text-gray-900 text-lg font-semibold leading-6 tracking-[-.48px] mb-2">
								{collection.name}
							</p>
							<Button
								variant="outline-black"
								className="rounded-2xl w-full"
							>
								View Collection
								<MoveUpRightIcon className="w-4 h-4 ml-2" />
							</Button>
						</div>
					</Link>
				</motion.div>
			))}
		</motion.div>
	);
};
