import { skills } from "../data/skills.js";

const skillsListElement = document.getElementById("skills-list");

skillsListElement.innerHTML = skills
    .map(skill => `<li>${skill}</li>`)
    .join('');
