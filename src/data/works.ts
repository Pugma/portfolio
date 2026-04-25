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

export const works: Work[] = [];
