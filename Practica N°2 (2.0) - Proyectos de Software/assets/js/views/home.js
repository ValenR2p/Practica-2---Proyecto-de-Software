import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML = await Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML = await Footer();
}

window.onload = render;