const PROJECT_JSON = await (await window.fetch("projects.json")).json();

export class Project {
    id: string;
    name: string;
    summary: string;
    download: string;
    background: string;
    description: boolean;
    homepage: string;
    sourceCode: string;
    curseforge: string;
    modrinth: string;
    planetMc: string;
    deprecated: boolean = false;
    comingSoon: boolean = false;
    new: boolean = false;
    descriptionText: string;

    constructor(id: string, name: string, download: string, background: string = '#303242', description: string = "...") {
        this.id = id;
        this.name = name;
        this.download = download;
        this.background = background;
        this.summary = description
    }
}

export class ProjectRef {
    id: string;
    name: string;
    summary: string;
    category: string;
    icon: string;
}

export const PROJECTS: Array<ProjectRef> = PROJECT_JSON
