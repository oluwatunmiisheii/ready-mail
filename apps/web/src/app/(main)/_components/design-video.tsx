"use client";
import { motion } from "motion/react";
import { Section } from "../../components/section/section";
import { ArrowRight, Play } from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@ready-mail/ui/components";
import Link from "next/link";
import { siteConfig } from "../../../lib/site-config";
import Image from "next/image";
import { useState } from "react";

export const DesignVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          Design beautiful emails effortlessly.
        </h2>
        <p className="text-lg text-gray-800 tracking-tighter mt-6 max-w-2xl mx-auto">
          Incase you cannot find a template that works for you. Our
          drag-and-drop editor allows you to create a custom design from
          scratch.
        </p>
      </div>
      <div className="relative mt-12">
        <div className="relative bg-white rounded-lg shadow overflow-hidden transform transition-transform duration-300 group">
          <Image
            src="/images/bg.jpg"
            alt="Application dashboard mockup"
            width={1152}
            height={1000}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 px-12">
            <Image
              src="/images/builder.png"
              alt="Design video thumbnail"
              width={1152}
              height={1000}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-30">
              <button
                className="relative bg-white/95 group-hover:bg-white rounded-full p-3 group-hover:scale-110 transition-all duration-300 shadow-2xl backdrop-blur-sm border-2 border-white/20 group-hover:border-white/40"
                onClick={() => {
                  alert("Design video is coming soon!"); // Placeholder for video functionality
                  // setIsOpen(true);
                }}
              >
                <Play
                  className="size-8 text-gray-800 ml-1 group-hover:text-black transition-colors duration-300"
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-white">
          <DialogHeader className="sr-only">
            <DialogTitle>11 New Rules for Learning to Code in 2025</DialogTitle>
          </DialogHeader>
          <div className="relative w-full">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/K9cvbXccxSo?si=USu6sWAChI5_eQdQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
};
