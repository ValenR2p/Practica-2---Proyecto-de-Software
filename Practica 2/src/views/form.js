import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import CreateProject from "../services/createProject.js";


document.getElementById('button').addEventListener('click', function(event) {
    CreateProject();
});

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
}
window.onload = render;