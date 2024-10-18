import Section from "../components/homeSection.js";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

const sectionsData = [
    {
        image: './img/mujer-ilustrada-siendo-pasante-empresa_23-2148726151.avif',
        title: "List of Clients",
        text:"A list that contains all of the current clients, with the ability to create a new Project for each client",
        link:"./clientsList.html",
        operation:"Show List",
    },
    {
        image: './img/mujer-ilustrada-siendo-pasante-empresa_23-2148726151.avif',
        title: "Projects",
        text:"Presentation with detailed information about the projects and the tasks and interactions assigned to them ",
        link:"./projectsCards.html",
        operation:"Show Projects",
    },
]
const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();

    let main = document.getElementById("main");

    sectionsData.forEach(sectionData =>{ 
        main.innerHTML += Section(sectionData);
    }) 
    
}
window.onload = render;