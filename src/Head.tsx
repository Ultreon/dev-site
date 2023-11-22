import React from "react";
import { Project } from "./ProjectInfo";
import './Head.css'
import { isNullOrUndefined } from "util";

function HomePageButton(project: Project | null) {
  if (project !== null && project.homepage !== undefined) {
    return (
      <a href={project.homepage} className="StartButton">
        Homepage
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function SourceCodeButton(project: Project | null) {
  if (project !== null && project.sourceCode !== undefined) {
    return (
      <a href={project.sourceCode} className="StartButton">
        Source Code
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function CurseForgeButton(project: Project | null) {
  if (project !== null && project.curseforge !== undefined) {
    return (
      <a href={project.curseforge} className="StartButton">
        CurseForge
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function ModrinthButton(project: Project | null) {
  if (project !== null && project.modrinth !== undefined) {
    return (
      <a href={project.modrinth} className="StartButton">
        Modrinth
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function PlanetMcButton(project: Project | null) {
  if (project !== null && project.planetMc !== undefined) {
    return (
      <a href={project.planetMc} className="StartButton">
        Planet Minecraft
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function Description(project: Project | null) {
  if (project !== null && project.descriptionText !== undefined) {
    class Comp extends React.Component {
      componentDidMount() {
        document.getElementById("ProjectDescription").innerHTML = project.descriptionText;
      }
      render(): React.ReactNode {
        return <div id="ProjectDescription"></div>
      }
    }

    const b = (
      <Comp />
    )
    return b;
  } else {
    return (
      <></>
    )
  }
}

function DiscordServerButton(project: Project | null) {
  if (project === null) {
    return (
      <a href="https://discord.gg/WePT9v2CmQ" target="_blank" className="StartButton" rel="noreferrer">
        Discord Server
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

export function Head(project: Project | null) {
  let style: React.CSSProperties = {} as React.CSSProperties
  style = { backgroundColor: "#ff6600" } as React.CSSProperties;
  let projectName = "Ultreon Team";
  let projectDescription = "Mods, games and other software";
  if (project !== null) {
    style = {} as React.CSSProperties;
    if (project.background === 'image') {
      style.background = 'url("/data/project/' + project.id + '.png")';
      style.backgroundSize = "cover"
    } else {
      style.backgroundColor = project.background;
    }
    projectName = project.name;
    projectDescription = project.summary;
  }

  return (
    <>
      <div className='Head' style={style}>
        <div id="Start" className="Section StartPage" style={style}>
          <img src="data/img/arrow.svg" alt="" className="Arrow" />
          <div data-w-id="6b220cb1-4b9c-7fb0-75b9-53ff4a6c35a2" className="HeroContent">
            <img src="data/img/project/empty/ultreon-v4.0.png" className="ProjectIcon" alt="" />
            <h1 className="ProjectTitle">
              {projectName}
            </h1>
            <h3 className="StartSubHead">
              {projectDescription}
            </h3>
            {HomePageButton(project)}
            {SourceCodeButton(project)}
            {CurseForgeButton(project)}
            {ModrinthButton(project)}
            {PlanetMcButton(project)}
            {DiscordServerButton(project)}
          </div>
        </div>
      </div>
      {Description(project)}
    </>
  );
}
