import dateFormat from "../config/dateFormat.js";

export default async function ProjectsList(projects) {
    return `<table class="table">
                <thead class="table-head">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        <th scope="col">Client</th>
                        <th scope="col">Campaign</th>
                        <th scope="col">Function</th>
                    </tr>
                </thead>
                <tbody>
                ${(await Promise.all(projects.map(project => ProjectDataRow(project)))).join("")}
                </tbody>
            </table>
`;
}
async function ProjectDataRow(project) {
    return `
        <tr class="table-content">
            <td>${project.name}</td>
            <td>${await dateFormat(project.start)}</td>
            <td>${await dateFormat(project.end)}</td>
            <td>${project.client.name}</td>
            <td>${project.campaignType.name}</td>
            <td><a class="button" type="submit" onclick="SetID('${project.clientID}')">Create Project</a></td>
        </tr>
    `;
}