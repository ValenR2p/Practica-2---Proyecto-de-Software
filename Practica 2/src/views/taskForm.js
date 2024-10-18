import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import CreateTask from "../services/createTask.js";

document.getElementById('button').addEventListener('click', function() {
    let url = localStorage.getItem('Id');
    CreateTask(url);
});

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
}
window.onload = render;