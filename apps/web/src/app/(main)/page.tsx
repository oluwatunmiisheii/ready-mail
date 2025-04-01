import { Collections } from "./_components/collections";
import { ExploreTemplates } from "./_components/explore-templates";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<Collections />
			<ExploreTemplates />
		</>
	);
}
