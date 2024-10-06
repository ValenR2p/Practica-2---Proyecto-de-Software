export default function Projects(projectData) {
    console.log(projectData);
    
    return `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Star Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Client</th>
                <th scope="col">Campaign</th>
            </tr>
        </thead>
        <tbody>
        ${projectData.map(project => ProjectsDataRow(project)).join("")}
        </tbody>
    </table>
`;
}

function ProjectsDataRow(project) {
    return `
        <tr>
            <th scope="row">${project.projectID}</th>
            <td>${project.projectName}</td>
            <td>${project.startDate}</td>
            <td>${project.endDate}</td>
            <td>${project.client.name}</td>
            <td>${project.campaign.name}</td>
        </tr>
    `;
}

