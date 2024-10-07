import Projects from "../components/projects.js";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

document.getElementById('Search').addEventListener('click', function(event) {
    const projectName = document.getElementById('name').value || '';
    const clientID = document.getElementById('client').value || '';
    const campaignType = document.getElementById('campaign').value || '';

    const queryParams = new URLSearchParams();
    
    if (projectName) queryParams.append('projectName', projectName);
    if (clientID) queryParams.append('clientID', clientID);
    if (campaignType) queryParams.append('campaignTypeId', campaignType);

    fetchProjects(queryParams);
});

async function fetchProjects(queryParams) {
    let projectsList = document.getElementById("projectsList");

    const response = await fetch('https://localhost:7162/api/v1/Project?' + queryParams);
    const ProjectsData = await response.json();

    projectsList.innerHTML = Projects(ProjectsData);
}

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
    
    fetchProjects(new URLSearchParams());
}

window.onload = render;