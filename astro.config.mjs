import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import AstroPWA from "@vite-pwa/astro";

const base = "/portfolio/";

export default defineConfig({
  site: "https://cbridges1.github.io",
  base,
  integrations: [
    starlight({
      title: "Jalen Bridges",
      tagline: "Software Engineer at Guidewire Software",
      description:
        "Software engineer at Guidewire Software. Builder of open-source tools, CLIs, and developer infrastructure.",
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
        alt: "Jalen Bridges",
      },
      favicon: "/favicon.svg",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/cbridges1" },
      ],
      editLink: {
        baseUrl: "https://github.com/cbridges1/portfolio/edit/main/",
      },
      head: [
        {
          tag: "link",
          attrs: { rel: "manifest", href: `${base}manifest.webmanifest` },
        },
        {
          tag: "link",
          attrs: { rel: "apple-touch-icon", href: `${base}pwa/apple-touch-icon.png` },
        },
        { tag: "meta", attrs: { name: "theme-color", content: "#0f0f0f" } },
      ],
      components: {
        Footer: "./src/components/SiteFooter.astro",
        Header: "./src/components/Header.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "About", link: "/about/" },
        {
          label: "Projects",
          items: [
            { label: "Acsys", link: "/projects/acsys/" },
            { label: "Hyve", link: "/projects/hyve/" },
            { label: "Krawlpass", link: "/projects/krawlpass/" },
            { label: "Portainer CLI", link: "/projects/portainer-cli/" },
            { label: "React Native AdMob", link: "/projects/react-native-admob/" },
          ],
        },
        { label: "Skills", link: "/skills/" },
        { label: "Resume", link: "/resume/" },
        { label: "QR Code", link: "/qr/" },
      ],
    }),
    mdx(),
    AstroPWA({
      registerType: "prompt",
      injectRegister: false,
      base,
      scope: base,
      includeAssets: ["favicon.ico", "favicon.svg"],
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      manifest: {
        name: "Jalen Bridges — Portfolio & Resume",
        short_name: "Jalen Bridges",
        description:
          "Platform engineer portfolio and resume — Kubernetes infrastructure, developer tooling, and open-source projects.",
        theme_color: "#0f0f0f",
        background_color: "#0f0f0f",
        display: "standalone",
        start_url: base,
        scope: base,
        icons: [
          { src: "pwa/pwa-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "pwa/pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "pwa/maskable-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
          { src: "pwa/maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{html,css,js,svg,png,ico,woff2,txt,xml,json}"],
      },
    }),
  ],
});
