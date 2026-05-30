import { skills } from "../data/skills.js";


export function renderSkills(){
    const skillsListElement = document.getElementById("skills-list");

    if(!skillsListElement) return;

    skillsListElement.innerHTML = skills
    .map(skill => `<li>${skill}</li>`)
    .join('');
}


