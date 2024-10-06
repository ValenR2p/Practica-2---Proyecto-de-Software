import Projects from "../components/projects.js";
import Navbar from "../components/navbar.js";

const render = async () => {
    let projectsList = document.getElementById("projectsList");
    const response = await fetch('https://localhost:7162/api/v1/Project');
    
    const ProjectsData = await response.json();
    projectsList.innerHTML += Projects(ProjectsData);

    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
}

window.onload = render;