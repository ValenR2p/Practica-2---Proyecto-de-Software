import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Clients from "../components/clientsList.js";

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
    
    let clientsList = document.getElementById("clientsList");
    const response = await fetch('https://localhost:7162/api/v1/Client');
    const ClientsData = await response.json();

    clientsList.innerHTML= Clients(ClientsData);
}

window.onload = render;