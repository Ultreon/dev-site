const PROJECT_JSON = await (await window.fetch("projects.json")).json();

export class Project {
    id: string;
    name: string;
    summary: string;
    background: string;
    description: boolean;
    homepage: string;
    sourceCode: string;
    curseforge: string;
    downloads: string;
    modrinth: string;
    planetMc: string;
    deprecated: boolean = false;
    comingSoon: boolean = false;
    new: boolean = false;
    descriptionText: string;
}

export class ProjectRef {
    id: string;
    name: string;
    summary: string;
    category: string;
    icon: string;
}

export const PROJECTS: Array<ProjectRef> = PROJECT_JSON
