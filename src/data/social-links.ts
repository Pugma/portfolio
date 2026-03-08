import type { ImageMetadata } from "astro";
import AtCoder from "../assets/atcoder.png";
import mixi from "../assets/mixi2.png";

type SocialLink = {
  platform: string;
  accountId: string;
  url: string;
  icon: string | ImageMetadata;
  color?: string;
};

export type SocialLinksData = SocialLink[];

export const socialLinks: SocialLinksData = [
  {
    platform: "GitHub",
    accountId: "@Pugma",
    icon: "simple-icons:github",
    url: "https://github.com/Pugma",
    color: "#000000",
  },
  {
    platform: "X (旧Twitter)",
    accountId: "@Pugma_Tech",
    icon: "simple-icons:x",
    url: "https://x.com/Pugma_Tech",
    color: "#000000",
  },
  {
    platform: "bluesky",
    accountId: "@pugma.tech",
    icon: "simple-icons:bluesky",
    url: "https://bsky.app/profile/pugma.tech",
    color: "#0085FF",
  },
  {
    platform: "サークルブログ記事",
    accountId: "@Pugma",
    icon: "traP",
    url: "https://trap.jp/author/Pugma",
    color: "#005BAC",
  },
  {
    platform: "AtCoder",
    accountId: "@Pugma",
    icon: AtCoder,
    url: "https://atcoder.jp/users/Pugma",
    color: "#000000",
  },
  {
    platform: "mixi2",
    accountId: "@Pugma",
    icon: mixi,
    url: "https://mixi.social/@Pugma",
    color: "#FF9A00",
  },
];
