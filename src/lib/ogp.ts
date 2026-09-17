import ogs from "open-graph-scraper";

export type OgpPreview = {
  url: string;
  title: string;
  description: string;
  image?: string;
};

export const getOgpPreview = async (url: string): Promise<OgpPreview> => {
  const { result } = await ogs({ url });

  return {
    url,
    title: result.ogTitle ?? url,
    description: result.ogDescription ?? "",
    image: result.ogImage?.[0]?.url,
  };
};
