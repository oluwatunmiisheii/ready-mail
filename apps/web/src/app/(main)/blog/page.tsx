import Image from "next/image";
import { Section } from "../../components/section/section";
import { Button, Card, CardContent, Input } from "@ready-mail/ui/components";

const mockBlogPosts = [
	{
		id: "1",
		title: "5 Ways To Build a Lead List That Converts",
		excerpt:
			"A lead list contains information about the people and companies you want to reach. How you create it will determine the outcome of your entire outreach process. Learn effective strategies for building high-converting lead lists.",
		author: "Sarah Johnson",
		date: "May 15, 2023",
		readTime: "5 min read",
		category: "Outreach",
		imageUrl:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "2",
		title: "The Psychology Behind Effective Email Marketing",
		excerpt:
			"Learn the psychological principles that make recipients open, read, and act upon marketing emails. Discover how to craft messages that resonate with your audience on a deeper level.",
		author: "Michael Chen",
		date: "Apr 22, 2023",
		readTime: "7 min read",
		category: "Marketing",
		imageUrl:
			"https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "3",
		title: "How to Craft Email Templates That Convert",
		excerpt:
			"Master the art of writing emails that drive conversions with these proven templates and techniques. From subject lines to call-to-actions, every element matters.",
		author: "Emma Rodriguez",
		date: "Mar 10, 2023",
		readTime: "6 min read",
		category: "Conversion",
		imageUrl:
			"https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "4",
		title: "GDPR Compliance for Email Marketing in 2023",
		excerpt:
			"Stay on the right side of regulations with these updated guidelines for email marketing compliance. Protect your business while maintaining effective communication with your audience.",
		author: "Thomas Weber",
		date: "Feb 28, 2023",
		readTime: "8 min read",
		category: "Compliance",
		imageUrl:
			"https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "5",
		title: "Email Automation Strategies for Small Businesses",
		excerpt:
			"Discover how even small teams can leverage powerful email automation to grow their customer base. Learn practical strategies that don't require enterprise-level resources.",
		author: "Olivia Kim",
		date: "Jan 15, 2023",
		readTime: "5 min read",
		category: "Automation",
		imageUrl:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
];

export default async function Page() {
	return (
		<>
			<Section className="mx-auto text-center w-full">
				<h1 className="text-3xl md:text-[42px] font-medium text-gray-900 mb-1 tracking-tight md:leading-[48px]">
					Blog
				</h1>
				<p className="text-gray-500">
					Stay up to date with the latest news and updates
				</p>
				<div className="max-w-md mx-auto w-full relative mt-8">
					<div className="relative">
						<Input className="relative py-[22px]" />
						<div className="absolute top-0 right-1 h-full flex items-center">
							<Button size="sm" variant="black">
								Subscribe
							</Button>
						</div>
					</div>
					<p className="text-xs text-gray-500 mt-1">
						Subscribe to our newsletter to get the latest updates
					</p>
				</div>
			</Section>
			<div className="bg-gray-50">
				<Section>
					<div className="space-y-16">
						{mockBlogPosts.map((post) => (
							<Card
								className="overflow-hidden border-0 shadow-none"
								key={post.id}
							>
								<div className="flex flex-col md:flex-row items-center">
									<div className="relative w-full md:w-2/5 h-auto">
										<Image
											src="/images/bg.svg"
											alt={post.title}
											className="w-full h-full object-cover rounded-lg"
											height={300}
											width={400}
										/>
									</div>
									<CardContent className="flex-1 p-8">
										<span className="text-gray-500 text-sm mb-2 block">
											{post.category}
										</span>

										<h3 className="text-2xl text-gray-900 mb-2 leading-tight">
											{post.title}
										</h3>
										<p className="text-gray-500 mb-4 line-clamp-3">
											{post.excerpt}
										</p>
										<div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
											{post.author} • {post.date}
										</div>
									</CardContent>
								</div>
							</Card>
						))}
					</div>
				</Section>
			</div>
		</>
	);
}
