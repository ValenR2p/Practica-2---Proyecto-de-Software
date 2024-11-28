import dateFormat from "../config/dateFormat.js";

export default async function TasksData(tasks){
    return `<div class="tasks-card" style="align-items:center;">
                    <div class="tasks-list">
                        <table class="table">
                            <thead class="table-head">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Assaigned to</th>
                                    <th scope="col">Functions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${(await Promise.all(tasks.map(task => TaskDataRow(task)))).join("")}
                            </tbody>
                        </table>
                    </div>
                    <button class="interaction-button" onclick="showCreateTask()">Add Task</button>
                </div>
            `;
}   

async function TaskDataRow(task){
    return`<tr class="table-content">
                <td>${task.name}</td>
                <td>${await dateFormat(task.dueDate)}</td>
                <td>${task.status.name}</td>
                <td>${task.userAssigned.name}</td>
                <td>
                    <a class="" type="submit" onclick="showUpdate('${task.id}')" href="#">
                        <img src="./assets/img/pencil.svg" style="width:1.5rem;height:auto;">
                    </a>
                </td>
            </tr> 
            `;
}
