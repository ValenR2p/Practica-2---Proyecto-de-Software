import Task from "./task.js";
import Interaction from "./interaction.js";

export default function Cards(projectData){
    return `<div class="card">
                <h5>${projectData.data.projectName}</h5>
                <ul class="content">
                    <li>Project ID: ${projectData.data.projectID}</li>
                    <li>Client: ${projectData.data.client.name}</li>
                    <li>Campaign: ${projectData.data.campaign.name}</li>
                    <li>Start Date: ${projectData.startDate}</li>
                    <li>End Date: ${projectData.endDate}</li>
                    <li id="tasks">Tasks: 
                        <ul>${projectData.tasks.map((task) =>
                            Task(task)).join("")}
                        </ul>
                    </li>
                        <li id="interactions">Interactions: 
                            <ul>${projectData.interactions.map((interaction) =>
                                Interaction(interaction)).join("")}
                            </ul>
                    </li>
                </ul>
                <ul>
                    <a id="task" onclick="SetID('${projectData.data.projectID}')" class="button" href="./taskForm.html">Add Task</a>
                    <a id="addInteraction" onclick="SetID('${projectData.data.projectID}')" class="button" href="./interactionForm.html">Add Interaction</a>
                    <a id="updateTask" onclick="SetID('${projectData.data.projectID}')" class="button" href="./tasksCard.html">Update Task</a>
                </ul>
            </div>
            `;
}           