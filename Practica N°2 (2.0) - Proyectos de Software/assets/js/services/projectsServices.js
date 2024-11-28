import { URL } from "../config/URL.js";

export async function fetchCreateProject(request) {
    console.log(request);
    const response = await fetch(URL + 'Project', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    return response;
}

export async function fetchProjectsPaginated(queryParams,paginationParams) {
    const response = await fetch(URL + 'Project?' + queryParams + '&'+ paginationParams);
    const ProjectsData = await response.json();
    return ProjectsData;
}

export async function fetchProjectDetailed(id) {
    const response = await fetch(URL + 'Project/' + id);
    const ProjectData = await response.json();
    return ProjectData;
}

export async function fetchCreateTask(request, id) {
    const response = await fetch(URL + 'Project/' + id + '/tasks', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    return response;
}
export async function fetchCreateInteraction(request, id) {
    const response = await fetch(URL + 'Project/' + id + '/interactions', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });
    return response;
}

export async function fetchUpdateTask(request,taskID) {
    try{
        const response = await fetch(URL + 'Tasks/' + taskID,{
            method: 'PUT',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(request)
        });
        return response;
    }catch(error){
        console.error("Hubo un problema: ", error);
    }
}