import { Explore } from "./_components/explore";
import { Collections } from "./_components/collections";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { WallOfLove } from "./_components/wall-of-love";
import { DesignVideo } from "./_components/design-video";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Collections />
      <DesignVideo />
      <WallOfLove />
      <Explore />
    </>
  );
}
