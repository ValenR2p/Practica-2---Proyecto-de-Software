import dateFormat from "../config/dateFormat.js";

export default async function Projects(projects) {
    return `${(await Promise.all(projects.map(project => ProjectsData(project)))).join("")}`;
}

async function ProjectsData(projectData){
    return `<div class="project-card">
                    <h1 class="project-card-title">${projectData.name}</h1>
                    <div class="project-card-content">
                        <div
                            style="display: flex;justify-content: center; padding-bottom: 1rem;font-size: 16px;gap: 5px;">
                            <p style="font-weight: bolder;">Client:</p>
                            <p>${projectData.client.name}</p>
                        </div>
                        <div
                            style="display: flex;justify-content: center; padding-bottom: 1rem;font-size: 16px;gap: 5px;">
                            <p style="font-weight: bolder;">Campaign:</p>
                            <p>${projectData.campaignType.name}</p>
                        </div>
                        <div
                            style="display: flex;justify-content: center; padding-bottom: 1rem;font-size: 16px;gap: 5px;">
                            <p style="font-weight: bolder;">Start:</p>
                            <p>${await dateFormat(projectData.start)}</p>
                        </div>
                        <div
                            style="display: flex;justify-content: center; padding-bottom: 1rem;font-size: 16px;gap: 5px;">
                            <p style="font-weight: bolder;">Project ID:</p>
                            <p>${await dateFormat(projectData.end)}</p>
                        </div>
                    </div>
                    <a class="button" onclick="localStorage.setItem('projectID','${projectData.id}')" href="./projectDetail.html" style="padding: 15px;border: 0;margin-top: 1rem;">Ver Detalle</a>
                </div>
            `;
}           

