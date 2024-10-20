export default function CreateInteraction(url){  
    const formData = {
        interactionType: document.getElementById('interactionType').value,
        date: document.getElementById('date').value,
        notes: document.getElementById('notes').value,
    };
    
    console.log(url);
    console.log(formData);

    fetch('https://localhost:7162/api/v1/Project/' + url + '/interactions', {
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