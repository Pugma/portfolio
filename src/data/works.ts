import Pugma from "../assets/Pugma.png";
import traQ from "../assets/traQ.png";
import traQgazerIcon from "../assets/traQgazer_icon.svg";

type Work = {
  title: string;
  description: string;
  thumbnail: ImageMetadata | undefined;
  image: Array<{
    alt: string;
    src: ImageMetadata;
  }>;
  tags: WorkTags;
};

export type WorkTags = {
  duration: "long-term" | "hackathon";
  teamSize: "team" | "solo";
  techStack: string[];
};

export const works: Work[] = [
  {
    title: "traPortfolio",
    description:
      "traP部員が部内での活動や、その制作物を外部にアピールできるプラットフォーム",
    thumbnail: undefined,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["Vue", "TypeScript", "Go"],
    },
  },
  {
    title: "traQ gazer",
    description:
      "直近の投稿のうち、設定した文字列を含むものを通知する traQ bot",
    thumbnail: traQgazerIcon,
    image: [],
    tags: {
      duration: "hackathon",
      teamSize: "team",
      techStack: ["Tailwind CSS", "headless UI"],
    },
  },
  {
    title: "traPortal v2",
    description:
      "部員管理システム。新たに OIDC の IdP としても機能するように開発中",
    thumbnail: undefined,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["Vue", "TypeScript", "Go", "OAuth 2.1", "OIDC 1.0"],
    },
  },
  {
    title: "ぷぐま Portfolio",
    description: "このサイト",
    thumbnail: Pugma,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "solo",
      techStack: [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "mise",
        "Cloudflare Workers (Pages)",
      ],
    },
  },
  {
    title: "traQ",
    description: "サークル内製チャットアプリ",
    thumbnail: traQ,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["Vue", "TypeScript", "Go", "echo"],
    },
  },
];
