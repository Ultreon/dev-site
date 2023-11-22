import React from "react";
import { Project } from "./ProjectInfo";
import './Head.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ProjectList } from "./ProjectList";

type PageType = Project | 'games' | 'mods' | 'misc' | null;

function HomePageButton(project: PageType) {
  if (project instanceof Object && project.homepage !== undefined) {
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

function DeprecatedBadge(project: PageType) {
  if (project instanceof Object && project.deprecated) {
    return (
      <span className="Badge Deprecated">
        Deprecated
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function ComingSoonBadge(project: PageType) {
  if (project instanceof Object && project.comingSoon) {
    return (
      <span className="Badge ComingSoon">
        Coming Soon
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function NewBadge(project: PageType) {
  if (project instanceof Object && project.new) {
    return (
      <span className="Badge New">
        New Project
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function SourceCodeButton(project: PageType) {
  if (project instanceof Object && project.sourceCode !== undefined) {
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

function DownloadsButton(project: PageType) {
  if (project instanceof Object && project.downloads !== undefined) {
    return (
      <a href={project.downloads} className="StartButton">
        Downloads
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function CurseForgeButton(project: PageType) {
  if (project instanceof Object && project.curseforge !== undefined) {
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

function ModrinthButton(project: PageType) {
  if (project instanceof Object && project.modrinth !== undefined) {
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

function PlanetMcButton(project: PageType) {
  if (project instanceof Object && project.planetMc !== undefined) {
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

function Description(project: PageType) {
  if (project instanceof Object && project.descriptionText !== undefined) {
    class Comp extends React.Component {
      componentDidMount() {
        if (project instanceof Object && project.descriptionText !== undefined) {
          document.getElementById("ProjectDescription").innerHTML = project.descriptionText;
        }
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

export function Head(project: PageType) {
  let style: React.CSSProperties = {} as React.CSSProperties
  style = { background: "linear-gradient(0deg, #FF4F00, #FF6F00" } as React.CSSProperties;
  let projectName = "Ultreon Team";
  let projectDescription = "Mods, games and other software";
  let projectIcon = "./data/project/ultreon.png";
  console.log(project);
  if (project instanceof Object) {
    style = {} as React.CSSProperties;
    projectIcon = './data/project/icon-' + project.id + '.png'
    if (project.background === 'image') {
      style.background = 'url("./data/project/' + project.id + '.png")';
      style.backgroundSize = "cover"
    } else {
      style.background = project.background;
    }
    projectName = project.name;
    projectDescription = project.summary;
  }
  if (project === 'games') {
    style.background = '#303242'
    projectName = "Game List"
    projectDescription = "List of all games made by Ultreon."
  }
  if (project === 'mods') {
    style.background = '#303242'
    projectName = "Mod List"
    projectDescription = "List of all mods made by Ultreon."
  }
  if (project === 'misc') {
    style.background = '#303242'
    projectName = "Other Projects List"
    projectDescription = "List of miscelaneous projects made by Ultreon."
  }
  if (project === undefined) {
    style.background = 'crimson'
    projectName = "Error"
    projectDescription = "Project not found"
  }

  function RootButtons(): React.ReactNode {
    return (
      <>
        <a href="https://discord.gg/WePT9v2CmQ" target="_blank" className="StartButton" rel="noreferrer">
          Discord Server &#20;<i className="bi bi-box-arrow-up-right"></i>
        </a>
        <a href="#games" target="_blank" className="StartButton" rel="noreferrer">
          Game List
        </a>
        <a href="#mods" target="_blank" className="StartButton" rel="noreferrer">
          Mod List
        </a>
      </>
    )
  }

  return (
    <>
      <div className='Head' id={window.location.hash.substring(1)} style={style}>
        <div id="Start" className="Section StartPage" style={style}>
          <img src="./data/img/arrow.svg" alt="" className="Arrow" />
          <div className="HeroContent">
            <span className="ProjectIcon" style={{background: "url('" + projectIcon + "')"}}></span>
            <h1 className="ProjectTitle">
              {projectName}
            </h1>
            <h3 className="StartSubHead">
              {projectDescription}
              <div className="Badges">
                {DeprecatedBadge(project)}
                {ComingSoonBadge(project)}
                {NewBadge(project)}
              </div>
            </h3>
            {project === null ? RootButtons() : <></>}
            {HomePageButton(project)}
            {SourceCodeButton(project)}
            {DownloadsButton(project)}
            {CurseForgeButton(project)}
            {ModrinthButton(project)}
            {PlanetMcButton(project)}
          </div>
        </div>
      </div>
      {Description(project)}
      {project === 'games' ? ProjectList(project) : <></>}
      {project === 'mods' ? ProjectList(project) : <></>}
      {project === 'misc' ? ProjectList(project) : <></>}
    </>
  );
}
