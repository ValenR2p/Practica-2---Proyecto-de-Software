export default function Clients(clientData) {
    return `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Company</th>
                <th scope="col">Address</th>
                <th scope="col">Function</th>
            </tr>
        </thead>
        <tbody>
        ${clientData.map(client => ClientDataRow(client)).join("")}
        </tbody>
    </table>
`;
}
function ClientDataRow(client) {
    return `
        <tr>
            <th scope="row">${client.clientID}</th>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.company}</td>
            <td>${client.address}</td>
            <td><a class="button" type="submit" onclick="SetID('${client.clientID}')" href="./createProjectForm.html">Create Project</a></td>
        </tr>
    `;
}