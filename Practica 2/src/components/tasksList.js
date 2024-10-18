export default function Tasks(projectData) {
    return `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Due Date</th>
                <th scope="col">Status</th>
                <th scope="col">User</th>
                <th scope="col">Function</th>
            </tr>
        </thead>
        <tbody>
        ${projectData.tasks.map(task => TaskDataRow(task)).join("")}
        </tbody>
    </table>
`;
}
function TaskDataRow(task) {
    return `
        <tr>
            <th scope="row">${task.taskID}</th>
            <td>${task.name}</td>
            <td>${task.dueDate}</td>
            <td>${task.taskStatus.name}</td>
            <td>${task.user.name}</td>
            <td><a class="button" type="submit" onclick="SetTaskID('${task.taskID}')" href="./updateTaskForm.html">Update</a></td>
        </tr>
    `;
}