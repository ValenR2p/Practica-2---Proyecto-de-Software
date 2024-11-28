import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import { alert } from "../components/alert.js";
import { interactionPopUp, taskPopUp } from "../components/formPopUp.js";
import ClientData from "../components/clientDetailed.js";
import ProjectData from "../components/projectsDetailed.js";
import TasksData from "../components/task.js";
import InteractionsData from "../components/interaction.js";

import {fetchProjectDetailed, fetchUpdateTask, fetchCreateInteraction, fetchCreateTask} from "../services/projectsServices.js";
import taskStatusServices from "../services/taskStatusServices.js";
import userServices from "../services/userServices.js";
import intreactionTypeServices from "../services/interactionTypeServices.js";

const id = localStorage.getItem('projectID')
const alertSection = document.getElementById("customAlert");
const state = document.getElementById("customAlert2");

let tasks = new Map;


/*POP UP SELECTS */
async function getStatus() {
    let select = await document.getElementById("status");
    select.innerHTML = '<option value="0">Select one status</option>';
    const status = await taskStatusServices.FetchTaskStatus();

    status.forEach(statusType => {
        const option = document.createElement('option');
        option.value = statusType.id;
        option.textContent = statusType.name;
        select.appendChild(option);
    });
}

async function getUser() {
    let select = await document.getElementById("user");
    select.innerHTML = '<option value="0">Select one user</option>';
    const users = await userServices.FetchUsers();

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        select.appendChild(option);
    });
}

async function getType() {
    let select = await document.getElementById("type");
    select.innerHTML = '<option value="0">Select one type</option>';
    const types = await intreactionTypeServices.FetchInteractionType();

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.id;
        option.textContent = type.name;
        select.appendChild(option);
    });
}

/*SHOW POP UP*/
async function showUpdate(taskID) {    
    tasks.forEach(async task => {
        if(task.id == taskID){
            alertSection.innerHTML = await taskPopUp("update",task);
            alertSection.style.display = 'flex';
            await getStatus();
            await getUser();
        }
    });
}
window.showUpdate = showUpdate;

async function showCreateTask() {     
    alertSection.innerHTML = await taskPopUp("create","");
    alertSection.style.display = 'flex';
    await getStatus();
    await getUser();
}
window.showCreateTask = showCreateTask;

async function showCreateInteraction() {    
    alertSection.innerHTML = await interactionPopUp("create","");
    alertSection.style.display = 'flex';
    await getType();       
}
window.showCreateInteraction = showCreateInteraction;



/*Actions*/
async function updateTask(taskID) {
    
    let request ={
        name: document.getElementById('name').value,
        dueDate: document.getElementById('dueDate').value,
        user : document.getElementById('user').value,
        status: document.getElementById('status').value,
    };
    
    if(request.dueDate == '' || request.dueDate==null){
        state.innerHTML = await alert("error","Please choose a date");
        state.style.display = 'flex';
    }else{
        let response = await fetchUpdateTask(request,taskID);  
        let result = await response.json();
    
        if(response.status == 200){
            state.innerHTML = await alert("succes",result.message);
            state.style.display = 'flex';
        }else{
            state.innerHTML = await alert("error",result.message);
            state.style.display = 'flex';
        }
    }
}
window.updateTask = updateTask;

async function createTask() {
    let request ={
        name: document.getElementById('name').value,
        dueDate: document.getElementById('dueDate').value,
        user : document.getElementById('user').value,
        status: document.getElementById('status').value,
    };
    
    if(request.dueDate == '' || request.dueDate==null){
        state.innerHTML = await alert("error","Please choose a date");
        state.style.display = 'flex';
    }else{
        let response = await fetchCreateTask(request,id);  
        let result = await response.json();
    
        if(response.status == 200){
            state.innerHTML = await alert("succes",result.message);
            state.style.display = 'flex';
        }else{
            state.innerHTML = await alert("error",result.message);
            state.style.display = 'flex';
        }
    }
}
window.createTask = createTask;

async function createInteraction() {
    let request ={
        notes: document.getElementById('notes').value,
        date: document.getElementById('date').value,
        interactionType : document.getElementById('type').value,
    };
    
    if(request.date == '' || request.date==null){
        state.innerHTML = await alert("error","Please choose a date");
        state.style.display = 'flex';
    }else{
        let response = await fetchCreateInteraction(request,id);  
        let result = await response.json();
    
        if(response.status == 200){
            state.innerHTML = await alert("succes",result.message);
            state.style.display = 'flex';
        }else{
            state.innerHTML = await alert("error",result.message);
            state.style.display = 'flex';
        }
    }
}
window.createInteraction = createInteraction;


/*Alert*/
async function closeAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";
}
window.closeAlert = closeAlert;
async function closeAlert2() {
    const alertBox = document.getElementById("customAlert2");
    alertBox.style.display = "none";
}
window.closeAlert2 = closeAlert2;




const render = async () => {
    let nav = document.getElementById("navbar");
    nav.innerHTML = await Navbar();
    let footer = document.getElementById("footer");
    footer.innerHTML = await Footer();

    let projectClient = document.getElementById("project-client");
    let TasksInteractionList = document.getElementById("TasksInteraction-list");
    const data = await fetchProjectDetailed(id);
    tasks = data.tasks;

    projectClient.innerHTML += await ProjectData(data.data)
    projectClient.innerHTML += await ClientData(data.data.client)
    TasksInteractionList.innerHTML += await TasksData(tasks);
    TasksInteractionList.innerHTML += await InteractionsData(data.interactions);
}
window.onload = render;