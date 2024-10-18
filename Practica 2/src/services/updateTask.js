export default function UpdateTask(url){  
    const formData = {
        name: document.getElementById('name').value,
        dueDate: document.getElementById('dueDate').value,
        assignedTo: document.getElementById('user').value,
        status: document.getElementById('status').value,
    };
    
    console.log(url);
    console.log(formData);

    fetch('https://localhost:7162/api/v1/Tasks/' + url, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}