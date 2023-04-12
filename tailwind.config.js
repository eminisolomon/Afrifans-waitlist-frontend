/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primarycolor-400": "#6149cc",
        "secondarycolor-200": "rgba(38, 34, 55, 0.5)",
        "secondarycolor-400": "#262237",
      },
      fontFamily: { "paragraph-text": "Raleway" },
      borderRadius: { xl: "20px" },
    },
    fontSize: { base: "16px", "5xl": "24px", "13xl": "32px" },
  },
  corePlugins: { preflight: false },
};
