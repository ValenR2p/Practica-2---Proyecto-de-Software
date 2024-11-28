import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import { alert } from "../components/alert.js";
import { fetchCreateProject } from "../services/projectsServices.js";
import clientServices from "../services/clientServices.js";
import { fetchCampaignTypes } from "../services/campaignTypeServices.js";

const alertSection = document.getElementById("customAlert");

$(document).ready(function () {
    $('.select-select2').select2();
});

async function createProject() {
    let request = {
        name: document.getElementById('name').value,
        start: document.getElementById('start').value,
        end: document.getElementById('end').value,
        client: document.getElementById('client').value,
        campaignType: document.getElementById('type').value,
    };

    const response = await fetchCreateProject(request);
    const result = await response.json();
    if (request.start == '' || request.start == null) {
        alertSection.innerHTML = await alert("error", "Please choose a start date");
        alertSection.style.display = 'flex';
    }else if(request.end == '' || request.end == null){
        alertSection.innerHTML = await alert("error", "Please choose a end date");
        alertSection.style.display = 'flex';
    } 
    else {
        if (response.status == 201) {
            alertSection.innerHTML = await alert("succes", result.message);
            alertSection.style.display = 'flex';
            localStorage.setItem('projectID', result.data.id)
        } else {
            alertSection.innerHTML = await alert("error", result.message);
            alertSection.style.display = 'flex';
        }
    }
}
window.createProject = createProject;

/*Alert*/
async function closeAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";
    window.location.href = './projectDetail.html'
}
window.closeAlert = closeAlert;

window.closeAlert2 = closeAlert2;
async function closeAlert2() {
    const alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";
}

window.closeAlert2 = closeAlert2;

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML = await Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML = await Footer();

    let select = document.getElementById("client");

    select.innerHTML = '<option value="0">Select client</option>';
    const clients = await clientServices.FetchClients();

    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.id;
        option.textContent = client.name;
        select.appendChild(option);
    });

    select = document.getElementById("type");

    select.innerHTML = '<option value="0">Select Campaign Type</option>';
    const types = await fetchCampaignTypes();

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.id;
        option.textContent = type.name;
        select.appendChild(option);
    });
}
window.onload = render;