import type { ImageMetadata } from "astro";
import traQgazerIcon from "../assets/traQgazer_icon.svg";
import traQgazerLogo from "../assets/traQgazer_logo.svg";

type Link = {
  label: string;
  url: string;
  children?: Link[];
};

type NarrativeSection = {
  heading: string;
  body: string;
};

type RoleSection = {
  heading?: string;
  details: string[];
};

type ProjectImage = {
  alt: string;
  src: ImageMetadata;
  width: string;
};

type Project = {
  tag: string;
  name: string;
  overview: string[];
  roles: RoleSection[];
  narratives: NarrativeSection[];
  notes?: string;
  links: Link[];
  images?: ProjectImage[];
};

export type ProjectsData = Project[];

export const projects: ProjectsData = [
  {
    tag: "長期開発",
    name: "traPortfolio",
    overview: [
      "traP部員が部内での活動や、その制作物をを外部にアピールできるプラットフォーム",
    ],
    roles: [
      {
        details: [
          "2024年4月から フロントエンドリーダー",
          "要件定義の見直し",
          "フロントエンド実装の一部・レビュー",
          "フロントエンドリポジトリの管理",
          "開発日程・工数の管理",
          "開発環境の整備",
          "v1リリースに向けたデプロイ作業",
        ],
      },
    ],
    narratives: [
      {
        heading: "期限を切った開発",
        body: "私がこのプロジェクトに加入したのは2023年7月のことでしたが、このプロジェクトはおおよそ2020年から始まり、開発が長期化していました。この背景には、リリースまでのロードマップが定まっていなかったことが挙げられると考えました。そこで、私がフロントエンドリーダーになったときにはまずは期限を定め、それに向かって開発を行うことでリリースを確実に行えるようにしました。\n今回は「春ハッカソンで部員が開発したものを外部公開できるようにする」という明確な目標地点を定めることで、設定した期限にも意味をもたせるようにしました。",
      },
      {
        heading: "Minimum Viable Product (MVP)",
        body: "先述の通り期限を切った開発を行うようにしましたが、先に定めた目標「春ハッカソンで部員が開発したものを外部公開できるようにする」を満たすためにはどのような要件が必要かをこのとき一旦整理しました。ここで必須でないと判断したものはv2の要件とし、v1の計画を必要最低限なものに削ぎ落としました。\nまた、この要件を一度たたき台として作った後、チームメンバーに共有し、それをもとに開発を行うようにしました。",
      },
      {
        heading: "サークル内外での積極的な発信",
        body: "期限を切った開発を行うと決めた際、まずはその期限でリリースすることをサークル内で宣言をしました。これは、サークル内など比較的厳しくない環境下においても期限を形骸化させないという理由がありました。\n他にも、開発チームを活発化させる狙いもありました。私が4月にフロントエンドのリーダーを引き継いだ際、定期的にコントリビュートを行っているメンバーはフロントエンドとバックエンドをあわせても5人程度でした。ただ、リリースについての情報を部内で積極的に発信したり、開発の雰囲気について言及することによって自分たちの開発に興味を持ってもらえるようにしました。その結果、現在では5人が追加メンバーとして加入し、開発が更に活発になりました。",
      },
      {
        heading: "メンバーの育成と開発環境の積極的な整備",
        body: "大学サークルという性質上、メンバーの入れ替わりも企業よりも多く、開発体制を維持するのが大きな課題となっています。現に、現在のフロントエンド開発メンバーは自分と同じかそれよりも下の学年しかいません。そこで、メンバーの育成に積極的に取り組んでいます。具体的にはオンボーディングや、その後のペアプログラミングなどです。詳細は以下に挙げているブログ記事で書いています。\nまた、メンバーが開発に集中できるよう環境の整備も重点的に取り組んでいます。Pull Request ごとにレビューをする際、これまでは Vite をローカルで動かしていましたがこれを ArgoCD を用いてやりやすくしたり、 UI デザインのテストをしやすくするために msw を用いたモックで手元でデータを自在に書き換えられるようにしたりしました。こちらも ArgoCD についてはブログ記事を執筆しています。",
      },
    ],
    links: [
      { label: "traPortfolio", url: "https://portfolio.trap.jp" },
      {
        label: "GitHubリポジトリ",
        url: "",
        children: [
          {
            label: "フロントエンド",
            url: "",
            children: [
              {
                label: "外部向けページ",
                url: "https://github.com/traPtitech/traPortfolio-UI",
              },
              {
                label: "部員向け管理ページ",
                url: "https://github.com/traPtitech/traPortfolio-Dashboard",
              },
            ],
          },
          {
            label: "バックエンド",
            url: "https://github.com/traPtitech/traPortfolio",
          },
        ],
      },
      {
        label: "開発に関連したブログ記事",
        url: "",
        children: [
          { label: "trap.jp/post/2262", url: "https://trap.jp/post/2262/" },
          { label: "trap.jp/post/2304", url: "https://trap.jp/post/2304/" },
          { label: "trap.jp/post/2305", url: "https://trap.jp/post/2305/" },
          { label: "trap.jp/post/2367", url: "https://trap.jp/post/2367/" },
          { label: "trap.jp/post/2419", url: "https://trap.jp/post/2419/" },
        ],
      },
    ],
  },
  {
    tag: "ハッカソン",
    name: "traQ gazer",
    overview: [
      "2023年度traP部内春ハッカソンで開発",
      "traP部員向けチャットツール「traQ」で利用可能なbot",
      "直近の投稿のうち、設定した文字列を含むものを通知",
    ],
    roles: [
      {
        heading: "フロントエンドデザイン / 実装",
        details: ["Tailwind CSS 派生の headless UI を利用"],
      },
      {
        heading: "サービス名決定 / ロゴ制作",
        details: [
          "「traQ」を長時間監視する -> 凝視する -> gaze",
          "ロゴデザインのアイデア: 虫眼鏡や双眼鏡を配置",
        ],
      },
    ],
    images: [
      { alt: "traQ gazer アイコン", src: traQgazerIcon, width: "20%" },
      { alt: "traQ gazer バナー画像", src: traQgazerLogo, width: "50%" },
    ],
    narratives: [
      {
        heading: "ユーザーが利用しやすいデザインをつくること",
        body: "ユーザーが最も利用する機能は何か、ユーザーはどのような経路でページを移動したいのかということを中心に考え、フロントエンドのデザインを行いました。\nこの際、ページをどのように切り分けどのように遷移するか、またクリック数を可能な限り減らすことはできないか、など細かいところにもこだわりました。\n\nしかし、このときは初めてのWebアプリケーション開発だったため技術はほとんどなく、レスポンシブ対応は行えませんでした。",
      },
    ],
    notes:
      "開発後も様々な人に利用し続けてもらえているため、1年後の2024年にフロントエンドデザインの一新を行いました",
    links: [
      {
        label: "開発時のブログ記事",
        url: "https://trap.jp/post/1922/",
      },
      {
        label: "GitHubリポジトリ",
        url: "https://github.com/traP-jp/traQ-gazer",
      },
      {
        label:
          "フロントエンドデザインを1年後の2024年にリニューアルしたときのブログ記事",
        url: "https://trap.jp/post/2345/",
      },
    ],
  },
];
