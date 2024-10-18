import Navbar from "../components/navbar.js";
import Cards from "../components/projectsCards.js";
import Footer from "../components/footer.js";

document.getElementById('Search').addEventListener('click', function(event) {
    const projectName = document.getElementById('name').value || '';
    const clientID = document.getElementById('client').value || '';
    const campaignType = document.getElementById('campaign').value || '';
    
    const queryParams = new URLSearchParams();
    
    if (projectName) queryParams.append('projectName', projectName);
    if (clientID) queryParams.append('clientID', clientID);
    if (campaignType) queryParams.append('campaignTypeId', campaignType);

    const paginationParams = new URLSearchParams(); 
    paginationParams.append('pageNumber', 0);
    paginationParams.append('pageSize', pageSize);
    
    fetchProjects(queryParams,paginationParams);
});

async function fetchProjects(queryParams,paginationParams) {
    let cards = document.getElementById("cards");
    cards.innerHTML='';

    
    const response = await fetch('https://localhost:7162/api/v1/Project?' + queryParams + '&' + paginationParams);
    const ProjectsData = await response.json();
    
    for(let project of ProjectsData){
        let id = project.projectID;
        
        let completeProject = await fetch('https://localhost:7162/api/v1/Project/' + id);
        const jsonProject = await completeProject.json();

        cards.innerHTML += await Cards(jsonProject);
    }
    
    console.log(queryParams.toString());
    renderPaginationButtons(ProjectsData.length, queryParams);
}



let currentPage = 0;
const pageSize = 6;
function renderPaginationButtons(totalElements, queryParams) {
    const paginationContainer = document.getElementById('paginator');
    paginationContainer.innerHTML = '';
    let totalPages = totalElements;

    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.disabled = currentPage === 0;
    prevButton.onclick = () => {
      if (currentPage > 0) {
        currentPage--;
        updatePage(queryParams);
      }
    };
    paginationContainer.appendChild(prevButton);

    for (let i = 0; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        
        
        if (currentPage === i) {
            pageButton.classList.add('active');
        }
    
        pageButton.onclick = () => {
            currentPage = i;
            updatePage(queryParams);
        };
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePage(queryParams);
      }
    };
    paginationContainer.appendChild(nextButton);
}
function updatePage(queryParams) {
    const paginationParams = new URLSearchParams();
    paginationParams.append('pageNumber', currentPage);
    paginationParams.append('pageSize', pageSize);

    fetchProjects(queryParams,paginationParams);
}

const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML += Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML += Footer();
    
    const paginationParams = '&pageNumber=0&pageSize=6';
    
    await fetchProjects(new URLSearchParams(),paginationParams);
}

window.onload = render;