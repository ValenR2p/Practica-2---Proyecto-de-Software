import Section from "../components/section.js";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

const sectionsData = [
    {
        image: './img/mujer-ilustrada-siendo-pasante-empresa_23-2148726151.avif',
        title: "List of Projects",
        text:"A simplified list that contains all the projects in development",
        link:"./projectsList.html",
        operation:"Show List",
    },
    {
        image: './img/mujer-ilustrada-siendo-pasante-empresa_23-2148726151.avif',
        title: "Projects",
        text:"Presentation with detailed information about the projects and the tasks and interactions assigned to them ",
        link:"./projectsCards.html",
        operation:"Show Projects",
    },
    {
        image: './img/mujer-ilustrada-siendo-pasante-empresa_23-2148726151.avif',
        title: "EndPointPorJS",
        text:"La tengo re grande",
        link:"./projectsList.html",
        operation:"MiEndpointEnJS",
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

