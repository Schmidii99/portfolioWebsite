export enum ImageTypes {
  COVER = "projectIcons",
  PROJECT = "projectImages",
  ICON = "icons",
}

export function getImageUrl(assetPath: string, type: ImageTypes | null = null): string {
  if (assetPath.includes("http")) {
    return assetPath;
  }
  if (!type)
    return "/" + assetPath;

  return `/${type}/${assetPath}`;
}
