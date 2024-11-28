export default async function ClientData(client){
    return `<div class="detail-presentation">
                <h2 class="detail-title">Client: ${client.name}</h2>
                <div class="detail-grid">
                    <div class="detail-item">
                        <p class="detail-label">Email:</p>
                        <p class="detail-value">${client.email}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-label">Company:</p>
                        <p class="detail-value">${client.company}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-label">Phone:</p>
                        <p class="detail-value">${client.phone}</p>
                    </div>
                    <div class="detail-item">
                        <p class="detail-label">Address:</p>
                        <p class="detail-value">${client.address}</p>
                    </div>
                </div>
            </div>
            `;
}  
