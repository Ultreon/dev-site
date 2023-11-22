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
    descriptionText: string;

    constructor(id: string, name: string, download: string, background: string = '#303242', description: string = "...") {
        this.id = id;
        this.name = name;
        this.download = download;
        this.background = background;
        this.summary = description
    }
}

export const PROJECTS: Array<Project> = [

]

PROJECT_JSON as ArrayLike<any>
