import { URL } from "../config/URL.js";

const fetchInteractionType = async () => {
    const response = await fetch(URL + 'InteractionTypes');
    const TaskStatus = await response.json();
    return TaskStatus;
}

const intreactionTypeServices = {
    FetchInteractionType : fetchInteractionType
}
export default intreactionTypeServices;