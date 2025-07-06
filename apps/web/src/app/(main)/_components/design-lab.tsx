"use client";
import { motion } from "motion/react";
import { Section } from "../../components/section/section";
import { ArrowRight, Globe } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@ready-mail/ui/components";
import Link from "next/link";
import { siteConfig } from "../../../lib/site-config";
import Image from "next/image";

export const DesignLab = () => {
  return (
    <Section>
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-3 py-1 text-xs font-medium bg-gray-200/50 text-gray-800 rounded-full mb-3"
        >
          Design
          <ArrowRight className="w-4 h-4 inline-block" />
        </motion.span>
        <h2 className="mt-2 text-2xl font-medium tracking-tight text-balance text-gray-900 md:text-3xl">
          Design your emails effortlessly
        </h2>
      </div>
      <div className="mx-auto max-w-5xl px-6 mt-12">
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium">Advanced tracking system</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Quick AI lives a single hotkey away - ready to quickly appear
                  as a floating window above your other apps..
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>

              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                <Image
                  src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                  className="hidden dark:block"
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                  className="shadow dark:hidden"
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
              Advanced UX, Instantly locate all your assets.
            </p>

            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                  <Image
                    src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                    className="hidden dark:block"
                    alt="payments illustration dark"
                    width={1207}
                    height={929}
                  />
                  <Image
                    src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                    className="shadow dark:hidden"
                    alt="payments illustration light"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group p-6 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
              Advanced UX, Instantly locate all your assets.
            </p>

            <div className="flex justify-center gap-6">
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                <span className="absolute right-2 top-1 block text-sm">fn</span>
                <Globe className="mt-auto size-4" />
              </div>
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                <span>K</span>
              </div>
            </div>
          </Card>
          <Card className="group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium">Advanced tracking system</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Quick AI lives a single hotkey away apps..
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Image
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/linear.svg"
                    alt="Linear logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Image
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                    alt="Netlify logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Image
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/github.svg"
                    alt="github logo"
                    width="32"
                    height="32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="flex justify-center mt-8"
      >
        <Link href={siteConfig.baseLinks.design}>
          <Button>
            Get started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
};
