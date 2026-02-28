import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phan Hong Quan Portfolio",
    short_name: "Quan Portfolio",
    description:
      "Portfolio case study React Native và Next.js, gom nhóm dự án theo công ty với gallery chi tiết.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f2efe7",
    theme_color: "#132531",
    categories: ["portfolio", "business", "productivity"],
    icons: [
      {
        src: "/pwa/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/pwa/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
