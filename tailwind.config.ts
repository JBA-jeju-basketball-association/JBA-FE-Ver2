const config: {
  mode: string;
  plugins: any[];
  theme: {
    extend: {
      keyframes: {
        rightSlide: {
          "100%": { transform: string; opacity: string };
          "0%": { transform: string; opacity: string };
        };
      };
      colors: { borderColor: string };
      backgroundImage: { mainAnnouncement: string; banner: string };
    };
  };
  content: string[];
} = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/image/mainPage/banner.jpeg')",
        mainAnnouncement: "url('/image/mainPage/announcementImage.png')",
      },
      colors: {
        borderColor: "rgba(115,115,115,0.2)",
      },
      keyframes: {
        rightSlide: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
