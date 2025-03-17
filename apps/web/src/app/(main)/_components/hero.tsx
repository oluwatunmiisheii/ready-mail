"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Button } from "@ready-mail/ui/components";
import { ArrowRight, Github } from "lucide-react";
import NotionMagicLinkEmail from "./email-template";

export function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const emailServices = [
    { name: "Gmail", logo: "/images/email-services/gmail.svg" },
    { name: "Outlook", logo: "/images/email-services/outlook.svg" },
    { name: "Yahoo", logo: "/images/email-services/yahoo.svg" },
    { name: "Apple Mail", logo: "/images/email-services/apple-mail.svg" },
    { name: "Superhuman", logo: "/images/email-services/superhuman.svg" },
    { name: "Hey", logo: "/images/email-services/hey.svg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-3 py-1 text-xs font-medium bg-gray-200/50 text-gray-800 rounded-full mb-3"
        >
          Email Templates <ArrowRight className="w-4 h-4 inline-block" />
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-3xl md:text-[42px] font-medium text-gray-900 mb-4 tracking-tight md:leading-[48px]"
        >
          Build Faster with Ready To Use <br /> Email Templates 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-600"
        >
          Spend less time designing email templates and more time coding. Copy,
          tweak, and send production ready templates instantly.
        </motion.p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-10"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {emailServices.map((service) => (
            <motion.div
              key={service.name}
              variants={fadeInUp}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white text-gray-900 border border-gray-200"
            >
              <Image
                src={service.logo}
                alt={service.name}
                width={24}
                height={24}
                className="w-6 h-6 mr-2 inline-block"
              />
              {service.name}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mb-12">
          <motion.div variants={fadeInUp}>
            <Button variant="black">View Templates</Button>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button variant="outline-black">
              <Github className="w-6 h-6 mr-2" />
              Star on Github
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="bg-white rounded-xl shadow-xl overflow-hidden max-w-3xl mx-auto border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
          <div className="mx-auto text-xs text-gray-500 font-medium">
            Email Preview
          </div>
        </div>
        <div className="bg-gray-50 p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key="email-template"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInUp}
              className="transform-gpu"
            >
              <NotionMagicLinkEmail />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <div
        className="absolute inset-x-0 bottom-0 -mx-10 h-[180px] bg-gradient-to-t from-white via-white to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  );
}
