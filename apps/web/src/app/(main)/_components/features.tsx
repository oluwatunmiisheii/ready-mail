"use client";
import {
  ClipboardCopy,
  Clock,
  Layout,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Section } from "../../components/section/section";
import { motion } from "motion/react";

const features = [
  {
    title: "Copy & Paste Ready",
    description:
      "Clean HTML templates that work instantly across email clients.",
    icon: <ClipboardCopy className="size-5 text-gray-900" />,
  },
  {
    title: "Responsive Design",
    description: "Templates that look great on all devices and screen sizes.",
    icon: <Layout className="size-5 text-gray-900" />,
  },
  {
    title: "Fast Integration",
    description: "Easy integration with your favorite email service providers.",
    icon: <Zap className="size-5 text-gray-900" />,
  },
  {
    title: "Save Time",
    description: "Focus on your core product instead of designing emails.",
    icon: <Clock className="size-5 text-gray-900" />,
  },
  {
    title: "Tested & Reliable",
    description:
      "Templates tested across major email clients for compatibility.",
    icon: <Shield className="size-5 text-gray-900" />,
  },
  {
    title: "Customizable",
    description: "Easy to customize with clearly marked variable placeholders.",
    icon: <Sparkles className="size-5 text-gray-900" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const Features = () => {
  return (
    <Section className="pt-0 max-w-4xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-3 md:grid-rows-1"
      >
        {features.map((feature) => (
          <motion.div
            variants={featureVariants}
            className="relative"
            key={feature.title}
          >
            <div className="relative z-10 mt-0 block h-full w-full overflow-hidden transition-all duration-[180ms] ease-in-out rounded-lg rounded-tr-[26px] bg-white px-4 pt-5 pb-[18px] shadow-[inset_0_0_0_1px] shadow-gray-200 before:absolute before:top-0 before:right-0 before:z-3 before:h-[30px] before:w-[30px] before:-translate-y-1/2 before:translate-x-1/2 before:rotate-45 before:bg-gray-50 before:shadow-[0_1px_0_0_] before:shadow-gray-200 before:transition-all before:duration-[180ms] before:ease-in-out before:content-[''] after:absolute after:top-0 after:right-0 after:z-2 after:size-7 after:-translate-y-2 after:translate-x-2 after:rounded-bl-lg after:border after:bg-gray-50 after:shadow-xs after:transition-all after:duration-[180ms] after:ease-in-out after:content-[''] hover:rounded-tr-[45px] hover:before:h-[50px] hover:before:w-[50px] hover:after:h-[42px] hover:after:w-[42px] hover:after:shadow-lg hover:after:shadow-black/5">
              <div>
                <div className="relative flex items-center gap-2">
                  <div className="absolute -left-4 h-5 w-[3px] rounded-r-sm bg-gray-500"></div>
                  {feature.icon}
                  <h3 className="font-medium text-gray-900">{feature.title}</h3>
                </div>
                <p className="mt-2 text-gray-600 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
