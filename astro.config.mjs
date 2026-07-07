import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://cbridges1.github.io",
  base: "/portfolio/",
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
      },
      favicon: "/favicon.svg",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/cbridges1" },
      ],
      editLink: {
        baseUrl: "https://github.com/cbridges1/portfolio/edit/main/",
      },
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
      ],
    }),
    mdx(),
  ],
});
