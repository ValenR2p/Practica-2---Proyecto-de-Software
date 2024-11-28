import dateFormat from "../config/dateFormat.js";

export async function taskPopUp(message,task) {
    let action;
    if(message == "update"){
        action =    `<div id="alert-info" class="alert-info">
                        <h2 class="alert-title">Update Task</h2>
                    </div>
                    <div>
                        <h3 class="popUp-action">Previous information</h3>
                        <div class="popUp-info">
                            <p>Name: ${task.name}</p>
                            <p>Due date: ${await dateFormat(task.dueDate)}</p>  
                        </div>
                        <div class="popUp-info">
                            <p>Status: ${task.status.name}</p>              
                            <p>Asaigned to: ${task.userAssigned.name}</p>                            
                        </div>
                    </div>`;
    }else if(message == "create"){
        action =    `<div id="alert-info" class="alert-info">
                        <h2 class="alert-title">Create Task</h2>
                    </div>`;
    }
    return `<div class="alert-box">
                    ${action}
                    <form class="popUp-form">
                        <div>
                            <label class="form-label" for="name">Name</label>
                            <input type="text" class="popUp-input" placeholder="Name" id="name">
                        </div>    
                        <div>
                            <label class="form-label" for="dueDate">Due Date</label>
                            <input type="date" class="popUp-input" placeholder="Date" id="dueDate">
                        </div>     
                        <div>                  
                            <select class="popUp-select" id="user">
                            </select>
                        </div>
                        <div>
                            <select class="popUp-select" id="status">
                            </select>                               
                        </div>
                    </form>
                    <div>
                        <button class="alert-button" onclick="closeAlert()">Cancel</button>
                        <button type="submit" class="button" onclick="createTask()">Submit</button>
                    <div>
                </div>
    `;
}
export async function interactionPopUp(message,interaction) {
    return `<div class="alert-box">
                    <div id="alert-info" class="alert-info">
                        <h2 class="alert-title">Create Interaction</h2>
                    </div>
                    <form class="popUp-form">
                        <div>
                            <label class="form-label" for="notes">Notes</label>
                            <input type="text" class="popUp-input" placeholder="Notes" id="notes">
                        </div>    
                        <div>
                            <label class="form-label" for="date">Date</label>
                            <input type="date" class="popUp-input" placeholder="Date" id="date">
                        </div>     
                        <div>                  
                            <select class="popUp-select" id="type">
                            </select>
                        </div>
                    </form>
                    <div>
                        <button class="alert-button" onclick="closeAlert()">Cancel</button>
                        <button type="submit" class="button" onclick="createInteraction()">Update</button>
                    <div>
                </div>
    `;
}
