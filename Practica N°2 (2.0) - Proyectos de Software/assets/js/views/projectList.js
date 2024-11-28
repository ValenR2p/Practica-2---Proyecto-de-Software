import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ProjectsList from "../components/projectsList.js";
import {fetchProjectsPaginated} from "../services/projectsServices.js";

document.getElementById('search').addEventListener('click', function(event){
    const projectName = document.getElementById('name').value || '';
    const clientID = document.getElementById('client').value || '';
    const campaignType = document.getElementById('campaign').value || '';

    const queryParams = new URLSearchParams();

    if (projectName) queryParams.append('projectName', projectName);
    if (clientID) queryParams.append('clientID', clientID);
    if (campaignType) queryParams.append('campaignTypeId', campaignType);

    const paginationParams = new URLSearchParams(); 
    paginationParams.append('offset', 0);
    paginationParams.append('size', 6);
}); 

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML = await Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML = await Footer();
    let list = document.getElementById("projectsList");

    const projects = await fetchProjectsPaginated(new URLSearchParams(),'&offset=0&size=6'); 
    console.log(list);
    
    list.innerHTML = await ProjectsList(projects);
}

window.onload = render;