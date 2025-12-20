export function getImageUrl(assetPath: string): string {
  if (assetPath.includes("http")) {
    return assetPath;
  }
  return new URL(`@/assets/${assetPath}`, import.meta.url).href
}

export function getProjectImageUrl(imagePath: string): string {
  if (imagePath.includes("http")) {
    return imagePath;
  }
  return getImageUrl(`projectImages/${imagePath}`);
}