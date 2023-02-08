module.exports = {
  mode: "jit",
  important: "#__next",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#532F91",
      },
      secondary: {
        DEFAULT: "#FFFFFF",
        light: "#FFFFFF",
      },
      success: {
        DEFAULT: "#64ba2a",
        light: "#edfbd4",
      },
      warning: {
        DEFAULT: "#edca1e",
        light: "#fef9d1",
      },
      error: {
        DEFAULT: "#ff4a32",
        light: "#ffe7d6",
      },
      info: {
        DEFAULT: "#767676",
        light: "#effffe",
      },

      purple: {
        DEFAULT: "#62339e",
        light: "#f7f2fe",
      },
      pink: {
        DEFAULT: "#eb3597",
        light: "#fef1f8",
      },
      orange: {
        DEFAULT: "#e3963c",
        light: "#faf3ea",
      },
      cyan: {
        DEFAULT: "#34d9d9",
        light: "#ecfdfd",
      },
      yellow: {
        DEFAULT: "#dbde32",
        light: "#fdfdf1",
      },
      skyblue: {
        DEFAULT: "#23cafa",
      },
    },
    fontSize: {
      caption: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      "header-6": ["1.25rem", { lineHeight: "1.563rem", fontWeight: 600 }],
      "header-5": ["1.5rem", { lineHeight: "1.875rem", fontWeight: 600 }],
      "header-4": ["1.75rem", { lineHeight: "2.25rem", fontWeight: 600 }],
      "header-3": ["2rem", { lineHeight: "2.75rem", fontWeight: 600 }],
      "header-2": ["2.25rem", { lineHeight: "2.813rem", fontWeight: 600 }],
      "header-1": ["2.5rem", { lineHeight: "3.125rem", fontWeight: 600 }],
      display: ["3rem", { lineHeight: "3.5rem" }],
    },
    fontWeight: {
      normal: "400",
      bolder: "500",
      medium: "600",
      bold: "700",
      semiBold: "800",
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
