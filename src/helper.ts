import type Project from '@/types/Project.ts'

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
    const response = await fetch(`/projectMarkdown/${fileName}`)
    const mdString = await response.text()
    console.log("Fetched markdown string:", mdString);
    return mdString;
  } catch (error) {
    console.error('Failed to load markdown:', error)
    return "";
  }
}

export function getProjectLink(project: Project): string {
  if (!project.markdownFile || project.markdownFile.startsWith("http")) {
    return "/project/" + project.title.replace(/[\W_]+/g,"-").toLowerCase();
  }
  return "/project/" + project.markdownFile?.substring(0, project.markdownFile.lastIndexOf('.'));
}

export function doesProjectHaveDetails(project: Project): boolean {
  return project.markdownFile !== undefined || (project.images?.length || 0) > 0;
}