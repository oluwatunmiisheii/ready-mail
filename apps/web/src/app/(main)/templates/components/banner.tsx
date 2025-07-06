import { cn } from "@ready-mail/ui/lib/utils";
import { Section } from "../../../components/section/section";
import Link from "next/link";
import { siteConfig } from "../../../../lib/site-config";
import { Badge, Button, Input } from "@ready-mail/ui/components";

export const Banner = () => {
  const isActive = true;
  return (
    <div className="relative">
      <Section className="mx-auto text-center w-full pb-6">
        <h1 className="text-3xl md:text-[42px] font-medium text-gray-900 mb-1 tracking-tight md:leading-[48px]">
          Free Email Templates <br /> For All Use Cases
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Spend less time designing email templates and more time coding. Copy,
          tweak, and send professional emails instantly.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-8 gap-3">
          <Link href={siteConfig.baseLinks.templates}>
            <Badge
              className={cn(
                "px-3 py-1 rounded-full text-[12.5px] font-medium transition-all duration-300 text-gray-900 border border-gray-200",
                isActive &&
                  "bg-[#efeffd] hover:bg-[#efeffd] border-[#5858e0] text-[#5858e0]",
              )}
              variant="outline"
            >
              All
            </Badge>
          </Link>
          {[
            "Marketing",
            "Transactional",
            "Newsletters",
            "E-commerce",
            "Promotions",
            "Templates",
          ].map((tag) => (
            <Link key={tag} href={`/templates/${tag.toLowerCase()}`}>
              <Badge
                key={tag}
                className={cn(
                  "px-3 py-1 rounded-full text-[12.5px] font-medium transition-all duration-300 text-gray-900 border border-gray-200",
                )}
                variant="outline"
              >
                {tag}
              </Badge>
            </Link>
          ))}
          <Link href={siteConfig.baseLinks.templates}>
            <Badge
              className="px-3 py-1 rounded-full text-[12.5px] font-medium transition-all duration-300 bg-[#efeffd] text-gray-800 border border-[#dedef4] hover:bg-[#efeffd] hover:border-[#5858e0] hover:text-[#5858e0"
              variant="outline"
            >
              More Collections
            </Badge>
          </Link>
        </div>
        <div className="max-w-md mx-auto w-full relative mt-8">
          <div className="relative">
            <Input className="relative py-[22px]" placeholder="Search..." />
            <div className="absolute top-0 right-1 h-full flex items-center">
              <Button size="sm" variant="black">
                Search
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f9fafb_1px,transparent_1px),linear-gradient(to_bottom,#f9fafb_1px,transparent_1px)] bg-[size:6rem_4rem]" />
    </div>
  );
};
