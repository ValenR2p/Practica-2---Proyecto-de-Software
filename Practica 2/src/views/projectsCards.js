import Navbar from "../components/navbar.js";
import Cards from "../components/cards.js";
import Footer from "../components/footer.js";
const render = async () => {

    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
    let cards = document.getElementById("cards");

    const response = await fetch('https://localhost:7162/api/v1/Project');
    const ProjectsData = await response.json();

    ProjectsData.forEach(async project =>  {
        let id = project.projectID
        let completeProject = await fetch('https://localhost:7162/api/v1/Project/' + id);
        const kkk = await completeProject.json();
        cards.innerHTML += Cards(kkk);
    });
    

    //cards.innerHTML += Cards(ProjectsData);

    
}

window.onload = render;