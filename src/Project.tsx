import React from 'react';
import './App.css';
import { Head } from './Head';
import { Project } from './ProjectInfo';

import './ProjectStyles.css';

let ProjectPage: () => React.ReactElement;

function Error(title: string, description: string) {
  return (
    <div className='Error'>
      <h1 className='Title'>{title}</h1><p className='Description'>{description}</p>
      <p className='Credit'><a href="https://www.freepik.com/free-photo/abstract-geometric-background-shapes-texture_20386203.htm#query=dark%20space%20wallpaper&position=10&from_view=search&track=ais&uuid=bb490396-0945-4bf2-9ac7-165d49e455d1">Image by kues1</a> on Freepik</p>
    </div>
  )
}

const query: Map<string, string> = new Map(window.location.search.substring(1).split('&').map(it => it.split("=")).map(val => {
  const a: readonly [string, string] = [val[0], val[1]];
  return a;
}));

const projectId = query.get("id");

try {
  let project: Project | null = null;
  if (projectId !== undefined) {
    project = await (await fetch("./data/project/" + projectId + ".json")).json() as Project;
    project.id = projectId;
    if (project.description !== undefined && project.description) {
      project.descriptionText = await (await fetch("./data/project/" + projectId + ".html")).text();
    }
  }

  ProjectPage = function () {
    return (
      <div className="ProjectPage">
        {projectId !== undefined ? Head(project) : Error("Unspecified Project", "No project ID specifified in URL query.")}
      </div>
    );
  }
} catch (error) {
  console.error("Error occurred", error)
  if (error.toString() === 'SyntaxError: Unexpected token \'<\', "<!DOCTYPE "... is not valid JSON') {
    ProjectPage = function () {
      return (
        <div className="ProjectPage">
          {Error("Project not Found!", "Project '" + projectId + "' wasn't found!")}
        </div>
      );
    }
  } else {
    ProjectPage = function () {
      return (
        <div className="ProjectPage">
          {Error("An Error Occurred", error.toString())}
        </div>
      );
    }
  }
}

export default ProjectPage;
