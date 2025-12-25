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

export async function getMarkdownFileContent(fileName: string): Promise<string> {
  try {
    const response = await fetch(`/projectMarkdown/floslabs.md`)
    const mdString = await response.text()
    console.log("Fetched markdown string:", mdString);
    return mdString;
  } catch (error) {
    console.error('Failed to load markdown:', error)
    return "";
  }
}