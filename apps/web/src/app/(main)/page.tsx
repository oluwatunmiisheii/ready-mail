import { CTA } from "./_components/call-to-check-templates";
import { Collections } from "./_components/collections";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { WallOfLove } from "./_components/wall-of-love";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Collections />
      <WallOfLove />
      <CTA />
    </>
  );
}
