const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: c("bg"), fg: c("fg"), muted: c("muted"), accent: c("accent"), accent2: c("accent2") },
      fontFamily: { display: ["Sora", "sans-serif"], sans: ["Inter", "sans-serif"] },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } } },
      animation: { float: "float 6s ease-in-out infinite" },
    },
  },
};
