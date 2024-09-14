import { prisma } from "@ready-mail/database";
import { Button } from "@ready-mail/ui/components/ui/button";

export default async function IndexPage() {
  const users = await prisma.collection.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="destructive">Click me</Button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
