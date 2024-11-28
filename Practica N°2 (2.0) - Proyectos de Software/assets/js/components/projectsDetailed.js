import dateFormat from "../config/dateFormat.js";

export default async function ProjectData(project){
    return `<div class="detail-presentation">
                <h2 class="detail-title">Project: ${project.name}</h2>
                <div class="detail-grid">

                    <div class="detail-item">
                        <p class="detail-label">Campaign:</p>
                        <p class="detail-value">${project.campaignType.name}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-label">Start:</p>
                        <p class="detail-value">${await dateFormat(project.start)}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-label">End:</p>
                        <p class="detail-value">${await dateFormat(project.end)}</p>
                    </div>
                </div>
            </div>
            `;
}