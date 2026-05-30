import { projects } from "../data/projects.js";

export function renderProjects() {
  const projectsContainerElement = document.getElementById("projects-list");

  if (!projectsContainerElement) return;

  projectsContainerElement.innerHTML = projects
    .map(
      (project) => `
        <div class="card">
          <a class="card-link" href="${project.href}" target="_blank" rel="noopener">
            <h3>${project.title}</h3>
            <p class="summary">${project.summary}</p>
            <p class="stack">Tech: ${project.stack}</p>
            <p class="impact">${project.impact}</p>
          </a>
        </div>
      `
    )
    .join("");
}
