import { prisma } from "@ready-mail/database";
import { Hero } from "./_components/hero";
import { Section } from "../components/section/section";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@ready-mail/ui/components";
import { Collections } from "./_components/collections/collections";

export default async function IndexPage() {
  const collections = await prisma.collection.findMany();

  return (
    <div>
      <Hero />
      <Section className="hidden">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12">
          Email Templates
        </h2>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="inline-flex justify-start w-full p-3 py-0 px-0 h-auto rounded-lg">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <div className="flex items-center justify-center mt-12">
          <Button>View All Templates</Button>
        </div>
      </Section>
      <Section>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900">
            Explore Collections
          </h2>
          <Button size="sm" variant="outline-primary">
            View All Collections
          </Button>
        </div>
        <Collections collections={collections} />
      </Section>
    </div>
  );
}
