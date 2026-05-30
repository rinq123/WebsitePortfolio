import { renderSkills } from "./renderSkills.js";
import { renderProjects } from "./renderProjects.js";
import { initNav } from "./nav.js";
import { initReveal } from "./reveal.js";
import { initTheme } from "./theme.js";


document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  initNav();
  initTheme();
  initReveal();
});
