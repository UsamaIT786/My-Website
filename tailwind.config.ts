import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#F8FAFC",
                    dark: "#020617",
                },
                section: {
                    light: "#F1F5F9",
                    dark: "#0B1120",
                },
                card: {
                    light: "#FFFFFF",
                    dark: "rgba(15, 23, 42, 0.65)",
                },
                primary: {
                    light: "#0F172A",
                    dark: "#FFFFFF",
                },
                secondary: {
                    light: "#475569",
                    dark: "#E5E7EB",
                },
                accent: {
                    DEFAULT: "#FF8C1A",
                    hover: "#FFA94D",
                },
            },
        },
    },
    plugins: [],
};
export default config;
