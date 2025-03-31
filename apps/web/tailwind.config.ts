import type { Config } from "tailwindcss";
import baseConfig from "@ready-mail/ui/tailwind.config";

const config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)"],
        sora: ["var(--font-sora)"],
      },
      keyframes: {
        "slide-up-fade": {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "slide-down-fade": {
          from: {
            opacity: "0",
            transform: "translateY(-26px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "slide-down-fade": "slide-down-fade ease-in-out",
        "slide-up-fade": "slide-up-fade ease-in-out",
      },
    },
  },
} satisfies Config;

export default config;
