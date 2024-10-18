import Tasks from "../components/tasksList.js";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

const render = async () => {
    let id = await localStorage.getItem('Id');
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
    
    let tasksList = document.getElementById("tasksList");
    const response = await fetch('https://localhost:7162/api/v1/Project/' + id);
    const TaskData = await response.json();

    tasksList.innerHTML= Tasks(TaskData);
}

window.onload = render;