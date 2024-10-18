export default function CreateProject(){  
    const formData = {
        projectName: document.getElementById('name').value,
        endDate: document.getElementById('endDate').value,
        clientID: localStorage.getItem('Id'),
        campaignType: document.getElementById('campaign').value,
    };

    fetch('https://localhost:7162/api/v1/Project', {
        method: 'POST', 
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