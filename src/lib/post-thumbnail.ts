const thumbnails = import.meta.glob<ImageMetadata>(
  "/src/content/posts/**/thumbnail.{jpg,jpeg,png,svg}",
  { eager: true, import: "default" },
);

export const getPostThumbnail = (postId: string) => {
  const thumbnailPrefix = `/src/content/posts/${postId}/thumbnail.`;

  return Object.entries(thumbnails)
    .filter(([path]) => path.startsWith(thumbnailPrefix))
    .sort(([a], [b]) => a.localeCompare(b))[0]?.[1];
};
