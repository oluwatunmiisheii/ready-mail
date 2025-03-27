import { Section } from "../../components/section/section";
import { CollectionGrid } from "./_components/collection-grid";
import { Button, Input } from "@ready-mail/ui/components";

export default async function Page() {
	return (
		<>
			<Section className="mx-auto text-center w-full">
				<h1 className="text-3xl md:text-[42px] font-medium text-gray-900 mb-1 tracking-tight md:leading-[48px]">
					Collections
				</h1>
				<p className="text-gray-500">
					Explore our latest collections of email templates
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
						Subscribe to get notified when a new collection is
						released
					</p>
				</div>
			</Section>
			<div className="bg-gray-50">
				<Section>
					<CollectionGrid />
				</Section>
			</div>
		</>
	);
}
