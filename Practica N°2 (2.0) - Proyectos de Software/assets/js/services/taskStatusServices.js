import { URL } from "../config/URL.js";

const fetchTaskStatus = async () => {
    const response = await fetch(URL + 'TaskStatus');
    const TaskStatus = await response.json();
    return TaskStatus;
}

const taskStatusServices = {
    FetchTaskStatus : fetchTaskStatus
}
export default taskStatusServices;