"use client";
import Image from "next/image";
import { Section } from "../../../components/section/section";
import { Button } from "@ready-mail/ui/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "../../../../lib/site-config";

export const TemplateGrid = () => {
  const router = useRouter();

  return (
    <div className="bg-transparent">
      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8 relative">
          {new Array(20).fill(null).map((_, index) => (
            <Link
              className="relative border border-[rgb(5,5,5,0.2)] rounded-lg transition-all ease-in-out duration-500 h-[500px] group overflow-hidden"
              key={index}
              href={`${siteConfig.baseLinks.templates}/${index + 1}`}
            >
              <div className="relative h-full w-full p-2">
                <Image
                  src="/images/sample.webp"
                  alt={`Template ${index + 1}`}
                  width={500}
                  height={292}
                  className="w-full h-full relative rounded-lg object-cover object-top"
                />
              </div>
              <div className="absolute h-full w-full inset-0 bg-black/50 group-hover:opacity-100 opacity-0 transition-opacity duration-300 overflow-hidden hidden md:block">
                <div className="bg-white absolute bottom-0 w-full">
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Template {index + 1}
                    </h3>
                    <Button
                      className="mb-2 mt-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        router.push(
                          `${siteConfig.baseLinks.templates}/${index + 1}`,
                        );
                      }}
                    >
                      Preview
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();

                        console.log("Collection button clicked");
                      }}
                    >
                      Collection Name
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};
