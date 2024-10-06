export default function Interaction(interactionData) {
    return `
            <li>Interaction ID: ${interactionData.interactionID}</li>
            <li>Type of interaction: ${interactionData.interaction.name}</li>
            <li>Notes: ${interactionData.notes}</li>
            <li>Date: ${interactionData.dueDate}</li>
            `;
}