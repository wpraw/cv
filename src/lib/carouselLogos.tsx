import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMui,
  SiChakraui,
  SiStyledcomponents,
  SiVite,
  SiNpm,
  SiFigma,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import ShadcnLogo from "@assets/shadcn-logo.svg";

export const carouselLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiHtml5 />,
    title: "HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    src: ShadcnLogo,
    alt: "Shadcn/UI",
    href: "https://ui.shadcn.com",
  },
//   {
//     node: <SiBootstrap color="#722df9" />,
//     title: "Bootstrap",
//     href: "https://getbootstrap.com",
//   },
  {
    node: <SiMui />,
    title: "Material UI",
    href: "https://material-ui.com",
  },
  {
    node: <SiChakraui />,
    title: "Chakra UI",
    href: "https://chakra-ui.com",
  },
  {
    node: <SiStyledcomponents className="w-[100px] h-[100px]"/>,
    title: "Styled Components",
    href: "https://styled-components.com",
  },
  {
    node: <SiVite />,
    title: "Vite",
    href: "https://vitejs.dev",
  },
  {
    node: <SiNpm />,
    title: "npm",
    href: "https://www.npmjs.com",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <VscGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
];
