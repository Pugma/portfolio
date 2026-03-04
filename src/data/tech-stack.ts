type TechItem = {
  name: string;
  description: string;
};

type TechTier = {
  label: string;
  items: TechItem[];
};

export type TechStackData = TechTier[];

export const techStack: TechStackData = [
  {
    label: "よく使うもの ⭐️⭐️⭐️",
    items: [
      {
        name: "Vue3 + Vite + TypeScript + HTML + CSS",
        description: "Webアプリケーション フロントエンド開発",
      },
      {
        name: "Go言語 + echo + sqlx",
        description: "Webアプリケーション バックエンド開発",
      },
      {
        name: "Docker / Docker Compose",
        description: "上記制作物のデプロイ",
      },
      {
        name: "GitHub (GitHub Actions) / Gitea (Gitea Actions) / GitLab",
        description: "集団開発時のコード管理 / CI",
      },
    ],
  },
  {
    label: "たまに使うもの / 最近使い始めたもの ⭐️⭐️",
    items: [
      {
        name: "Terraform / ansible",
        description: "インフラ構築",
      },
      {
        name: "Kubernetes + traefik",
        description: "サークル内インフラ管理",
      },
      {
        name: "Rust + Tokio + axum",
        description: "Webアプリケーション バックエンド開発",
      },
      {
        name: "Python (+ TensorFlow)",
        description: "競技プログラミング / 機械学習",
      },
    ],
  },
  {
    label: "使ったことがあるもの ⭐️",
    items: [
      {
        name: "C++",
        description: "競技プログラミング",
      },
      {
        name: "Unity + C#",
        description: "ゲーム開発",
      },
    ],
  },
];
