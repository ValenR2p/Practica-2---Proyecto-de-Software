export default function Task(taskData) {
    return `
                <li>Task ID: ${taskData.taskID}</li>
                <li>Name: ${taskData.name}</li>
                <li>Due date: ${taskData.dueDate}</li>
                <li>Status: ${taskData.taskStatus.name}</li>
                <li>Assigned to: ${taskData.user.name}</li>
            
    `;
}