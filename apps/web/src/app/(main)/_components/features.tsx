import { cn } from "@ready-mail/ui/lib/utils";
import { ClipboardCopy, Clock, Layout, Shield, Zap } from "lucide-react";
import { Section } from "../../components/section/section";

export function Features() {
	const features = [
		{
			title: "Copy & Paste Ready",
			description:
				"Clean HTML templates that work instantly across email clients.",
			icon: <ClipboardCopy />,
		},
		{
			title: "Responsive Design",
			description:
				"Templates that look great on all devices and screen sizes.",
			icon: <Layout />,
		},
		{
			title: "Fast Integration",
			description:
				"Easy integration with your favorite email service providers.",
			icon: <Zap />,
		},
		{
			title: "Save Time",
			description:
				"Focus on your core product instead of designing emails.",
			icon: <Clock />,
		},
		{
			title: "Tested & Reliable",
			description:
				"Templates tested across major email clients for compatibility.",
			icon: <Shield />,
		},
		{
			title: "Dark Mode Support",
			description:
				"Templates that look great in dark mode and light mode.",
			icon: <ClipboardCopy />,
		},
		{
			title: "Drag and Drop Editor",
			description:
				"Can't find a template you like? Use our drag and drop editor to create your own.",
			icon: <ClipboardCopy />,
		},
		{
			title: "Email Previews",
			description:
				"See how your email will look in different clients before sending.",
			icon: <ClipboardCopy />,
		},
	];
	return (
		<Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-0 max-w-6xl mx-auto">
			{features.map((feature, index) => (
				<FeatureCard key={feature.title} {...feature} index={index} />
			))}
		</Section>
	);
}

const FeatureCard = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature",
				(index === 0 || index === 4) && "lg:border-l",
				index < 4 && "lg:border-b"
			)}
		>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-[#5858e0]">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-[#5858e0] transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block font-medium text-gray-900">
					{title}
				</span>
			</div>
			<p className="text-gray-600 sm:text-sm max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
};
