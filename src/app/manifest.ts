import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reputation Unit",
    short_name: "Reputation Unit",
    description:
      "Reputation Unit is a partner-led web development studio building modern websites, web apps, AI tools, dashboards, and business systems for small businesses and startups.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080f",
    theme_color: "#08080f",
    icons: [
      {
        src: "/icon", // Matches dynamically generated icon route
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
