import Image from "next/image";
import { Section } from "../../components/section/section";
import { Button, Card, CardContent, Input } from "@ready-mail/ui/components";

const mockBlogPosts = [
	{
		id: "1",
		title: "How to send emails in Node.js",
		excerpt:
			"Learn how to send emails using Node.js with this comprehensive guide. We'll cover everything from setting up your environment to sending your first email.",
		author: "Wilson Adenuga",
		date: "May 15, 2023",
		readTime: "5 min read",
		category: "Development",
		imageUrl:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "2",
		title: "10 Essential Email Design Principles",
		excerpt:
			"Master the fundamentals of email design with these proven principles. From layout to typography, learn what makes emails both beautiful and effective.",
		author: "Wilson Adenuga",
		date: "Apr 22, 2023",
		readTime: "7 min read",
		category: "Design",
		imageUrl:
			"https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "3",
		title: "Boost Email Open Rates with Better Subject Lines",
		excerpt:
			"Discover proven strategies to craft compelling subject lines that get your emails opened. Learn what works and what to avoid in email marketing.",
		date: "Mar 10, 2023",
		author: "Wilson Adenuga",
		readTime: "6 min read",
		category: "Marketing",
		imageUrl:
			"https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "4",
		title: "Streamline Your Email Workflow with Templates",
		excerpt:
			"Save hours every week by building a library of reusable email templates. Learn how to create, organize, and optimize your email workflow.",
		author: "Wilson Adenuga",
		date: "Feb 28, 2023",
		readTime: "8 min read",
		category: "Productivity",
		imageUrl:
			"https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		id: "5",
		title: "The Future of Transactional Email Design",
		excerpt:
			"Explore emerging trends in transactional email design and technology. From AI-powered personalization to advanced interactivity.",
		author: "Wilson Adenuga",
		date: "Jan 15, 2023",
		readTime: "5 min read",
		category: "Technology",
		imageUrl:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
];

export default async function Page() {
	return (
		<>
			<div className="relative">
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
							Subscribe to our newsletter to get the latest
							updates
						</p>
					</div>
				</Section>
				<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f9fafb_1px,transparent_1px),linear-gradient(to_bottom,#f9fafb_1px,transparent_1px)] bg-[size:6rem_4rem]" />
			</div>
			<Section className="pt-2">
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
		</>
	);
}
