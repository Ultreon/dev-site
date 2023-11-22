import React from "react";
import { PROJECTS } from "./ProjectInfo";

import './ProjectList.css'

export function ProjectList(project: string) {
  return (
    <div className="ProjectList">
      {PROJECTS.filter(p => p.category === project).map(project => {
        return (
          <a href={"?id=" + project.id + "#project"} className="ProjectEntry" key={project.id} data-project-id={project.id}>
            <span className="Icon" style={{background: 'url("./data/project/icon-' + project.id + '.png")'}}></span>
            <div className="Details">
              <p className="Title">{project.name}</p>
              <p className="Summary">{project.summary}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
