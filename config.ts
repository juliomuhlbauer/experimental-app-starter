import { Config } from "next-manifest-cli/types";

const config: Config = {
  name: "app-starter-kit",
  description: "A starter kit for creating Vue.js applications with Valtio",
  icons: {
    web: {
      src: "/pilot-icon.svg",
      sizes: "512x512",
      type: "image/svg",
    },
    app: {
      src: "/pilot-icon.svg",
      sizes: "512x512",
      type: "image/svg",
    },
  },
};

export default config;
