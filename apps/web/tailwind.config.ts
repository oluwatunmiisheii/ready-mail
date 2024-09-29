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
    },
  },
} satisfies Config;

export default config;
