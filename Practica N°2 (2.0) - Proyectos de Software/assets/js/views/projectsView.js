import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Projects from "../components/projects.js";
import { fetchProjectsPaginated } from "../services/projectsServices.js";
import { fetchCampaignTypes } from "../services/campaignTypeServices.js";
import clientServices from "../services/clientServices.js";

let offset = 1;
const size = 8;

$(document).ready(function() {
    $('.select-select2').select2();
});


document.getElementById('search').addEventListener('click', async function(event){
    event.preventDefault();

    const projectName = document.getElementById('name').value || '';
    const clientID = document.getElementById('client').value || '';
    const campaignType = document.getElementById('campaign').value || '';

    const queryParams = new URLSearchParams();

    if (projectName) queryParams.append('name', projectName);
    if (campaignType) queryParams.append('campaign', campaignType);
    if (clientID) queryParams.append('client', clientID);

    const paginationParams = new URLSearchParams();
    offset=1; 
    paginationParams.append('offset', offset);
    paginationParams.append('size', size);

    await fetchProjects(queryParams,paginationParams);
});

async function fetchProjects(queryParams,paginationParams) {
    let list = document.getElementById("projects");
    list.innerHTML='';
    
    console.log(paginationParams);

    let data = await fetchProjectsPaginated(queryParams,paginationParams);
    list.innerHTML += await Projects(data);
    
    const hasNextPage = data.length === size;
    await renderPaginationButtons(queryParams,hasNextPage);
}

async function renderPaginationButtons(searchParams, hasNextPage) {
    const paginationContainer = document.getElementById('paginator');
    paginationContainer.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.className = 'button';
    prevButton.innerText = 'Previous';
    prevButton.disabled = offset === 1;
    prevButton.onclick = async () => {
        if (offset > 0) {
            offset--;
            await updatePage(searchParams);
          }
    }
    paginationContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.className = 'button';
    nextButton.innerText = 'Next';
    nextButton.disabled = !hasNextPage;
    nextButton.onclick = async () => {
        if (hasNextPage) {
            offset++;
            await updatePage(searchParams);
        }
    }
    paginationContainer.appendChild(nextButton);

}


async function updatePage(searchParams) {
    const paginationParams = new URLSearchParams();
    paginationParams.append('offset', offset);
    paginationParams.append('size', size);

    await fetchProjects(searchParams,paginationParams);
}


const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML = await Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML = await Footer();
    
    let select = document.getElementById("campaign");
    select.innerHTML = '<option value="">Selecciona un tipo</option>';
    const types = await fetchCampaignTypes();

    types.forEach(campaignTypes => {
        const option = document.createElement('option');
        option.value = campaignTypes.id;
        option.textContent = campaignTypes.name;
        select.appendChild(option);
    });

    select = document.getElementById("client");
    select.innerHTML = '<option value="">Selecciona un tipo</option>';
    const clients = await clientServices.FetchClients();

    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.id;
        option.textContent = client.name;
        select.appendChild(option);
    });

    const paginationParams = '&offset=1&size=8';
    await fetchProjects(new URLSearchParams(),paginationParams);
}

window.onload = render;