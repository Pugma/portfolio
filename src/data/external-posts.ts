type externalPost = {
  publishedAt: string;
  url: string;
};

export type ExternalPosts = externalPost[];

export const externalPosts: ExternalPosts = [
  {
    url: "https://paiza.hatenablog.com/entry/2024/08/22/200539",
    publishedAt: "paiza times",
  },
];
