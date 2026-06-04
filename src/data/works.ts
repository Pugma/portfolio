import Pugma from "../assets/Pugma.png";
import traP2024 from "../assets/traP_welcome_2024.jpeg";
import traQ from "../assets/traQ.png";
import traQgazerIcon from "../assets/traQgazer_icon.svg";
import traQgazerLogo from "../assets/traQgazer_logo.svg";

type Work = {
  title: string;
  description: string;
  thumbnail: ImageMetadata | undefined;
  image: Array<{
    alt: string;
    src: ImageMetadata;
  }>;
  tags: WorkTags;
  roles: WorkRoles;
  links: WorkLinks;
};

export type WorkRoles = {
  current: string[];
  past: string[];
};

type LinkItem = {
  subLabel: string | undefined;
  url: string;
};

export type WorkLinks = {
  product: LinkItem[];
  blog: LinkItem[];
  source: LinkItem[];
  others: LinkItem[];
};

export type WorkTags = {
  duration: "long-term" | "hackathon";
  teamSize: "team" | "solo";
  techStack: string[];
};

export const works = {
  traportfolio: {
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
    roles: {
      current: ["要件定義", "フロントエンド実装・レビュー", "開発環境整備"],
      past: [
        "全体リーダー",
        "フロントエンドリーダー",
        "開発日程・工数管理",
        "フロントエンドリポジトリの管理",
        "v1リリースに向けたデプロイ作業",
      ],
    },
    links: {
      product: [{ subLabel: undefined, url: "https://portfolio.trap.jp" }],
      source: [
        {
          subLabel: "外部向け公開ページリポジトリ",
          url: "https://github.com/traPtitech/traPortfolio-UI",
        },
        {
          subLabel: "内部向け管理ページリポジトリ",
          url: "https://github.com/traPtitech/traPortfolio-Dashboard",
        },
        {
          subLabel: "バックエンドリポジトリ",
          url: "https://github.com/traPtitech/traPortfolio",
        },
      ],
      blog: [
        { subLabel: "リリース記事", url: "https://trap.jp/post/2262/" },
        { subLabel: undefined, url: "https://trap.jp/post/2304/" },
        {
          subLabel: "リリース裏話 (意識したこと)",
          url: "https://trap.jp/post/2305/",
        },
        { subLabel: undefined, url: "https://trap.jp/post/2367/" },
        { subLabel: undefined, url: "https://trap.jp/post/2419/" },
      ],
      others: [],
    },
  },
  "traq-gazer": {
    title: "traQ gazer",
    description: "直近の投稿のうち、設定した文字列を含むものを通知するtraQ bot",
    thumbnail: traQgazerIcon,
    image: [
      { alt: "traQ gazer アイコン", src: traQgazerIcon },
      { alt: "traQ gazer バナー画像", src: traQgazerLogo },
    ],
    tags: {
      duration: "hackathon",
      teamSize: "team",
      techStack: ["Tailwind CSS", "headless UI"],
    },
    roles: {
      current: ["フロントエンドデザイン / 実装"],
      past: ["サービス名決定", "ロゴ制作"],
    },
    links: {
      product: [],
      source: [
        { subLabel: undefined, url: "https://github.com/traP-jp/traQ-gazer" },
      ],
      blog: [
        { subLabel: "開発時", url: "https://trap.jp/post/1922/" },
        { subLabel: "リニューアル時", url: "https://trap.jp/post/2345/" },
      ],
      others: [],
    },
  },
  "traportal-v2": {
    title: "traPortal v2",
    description:
      "部員管理システム。新たにOIDCのIdPとしても機能するように開発中",
    thumbnail: undefined,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["Vue", "TypeScript", "Go", "OAuth 2.1", "OIDC 1.0"],
    },
    roles: {
      current: [
        "バックエンド実装",
        "開発環境整備",
        "IdP実装",
        "コードレビュー",
      ],
      past: [],
    },
    links: {
      product: [],
      source: [
        {
          subLabel: "OIDC IdP基盤",
          url: "https://github.com/traPtitech/portal-oidc",
        },
      ],
      blog: [],
      others: [],
    },
  },
  "pugma-portfolio": {
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
    roles: { current: ["デザイン", "実装", "デプロイ"], past: [] },
    links: {
      product: [{ subLabel: undefined, url: "https://pugma.tech" }],
      source: [
        { subLabel: undefined, url: "https://github.com/Pugma/portfolio" },
      ],
      blog: [],
      others: [],
    },
  },
  traq: {
    title: "traQ",
    description: "サークル内製チャットアプリ",
    thumbnail: traQ,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["Vue", "TypeScript", "Go", "echo"],
    },
    roles: { current: [], past: [] },
    links: {
      product: [],
      source: [
        {
          subLabel: "バックエンドリポジトリ",
          url: "https://github.com/traPtitech/traQ",
        },
        {
          subLabel: "フロントエンドリポジトリ",
          url: "https://github.com/traPtitech/traQ_S-UI",
        },
      ],
      blog: [],
      others: [],
    },
  },
  "k8s-manifest": {
    title: "traP kubernetes manifest",
    description: "traP部内で運用しているKubernetes Clusterのmanifest",
    thumbnail: undefined,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["k3s", "Argo CD", "helm", "traefik"],
    },
    roles: {
      current: ["一部サービスのサーバー移行", "依存関係更新", "PRレビュー"],
      past: ["Argo CD Pull Request Generator利用リポジトリの拡大"],
    },
    links: {
      product: [],
      source: [
        {
          subLabel: undefined,
          url: "https://github.com/traPtitech/manifest",
        },
      ],
      blog: [
        {
          subLabel:
            "Argo CD Pull Request Generatorを用いたpreview環境作成について",
          url: "https://trap.jp/post/2419/",
        },
      ],
      others: [],
    },
  },
  "trap-welcome-line": {
    title: "2024年度 traP新歓LINEアカウント Bot",
    description:
      "2024年度traP新歓LINEアカウント。受信したメッセージをtraQへ転送する機能や、特定のメッセージを部員だけに送り分ける機能をもつ",
    thumbnail: traP2024,
    image: [],
    tags: {
      duration: "long-term",
      teamSize: "team",
      techStack: ["Vue", "TypeScript", "Go", "echo"],
    },
    roles: {
      current: [],
      past: [
        "要件定義",
        "受信メッセージのtraQへの転送機能実装",
        "メッセージの送り先を分けるための部員認証機能実装",
        "簡易的な管理画面・メトリクスの実装",
      ],
    },
    links: {
      product: [],
      source: [],
      blog: [],
      others: [
        {
          subLabel: "当時利用したアカウント",
          url: "https://page.line.me/012hpjhf",
        },
      ],
    },
  },
} satisfies Record<string, Work>;

export type WorkKey = keyof typeof works;
