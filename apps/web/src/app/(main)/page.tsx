import { Collections } from "./_components/collections";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";

export default function HomePage() {
	return (
		<div className="pt-16">
			<Hero />
			<Features />
			<Collections />
		</div>
	);
}
