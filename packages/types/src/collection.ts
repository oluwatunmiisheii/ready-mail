export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string;
  createdAt: Date;
  updatedAt: Date;
}
