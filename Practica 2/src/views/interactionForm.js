import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import CreateInteraction from "../services/createInteraction.js";


document.getElementById('button').addEventListener('click', function() {
    let url = localStorage.getItem('Id');
    CreateInteraction(url);
});

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
}
window.onload = render;