export default {
   "*.{js,jsx,ts,tsx}": () => "pnpm lint --cwd .",
    "*.json": ["pnpm run format"]
}