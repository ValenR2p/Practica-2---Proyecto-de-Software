import dateFormat from "../config/dateFormat.js";

export default async function InteractionsData(interactions){
    return `<div class="tasks-card" style="align-items:center;">
                    <div class="tasks-list">
                        <table class="table">
                            <thead class="table-head">
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Functions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${(await Promise.all(interactions.map(interaction => InteractionDataRow(interaction)))).join("")}
                            </tbody>
                        </table>
                    </div>
                    <button class="interaction-button" onclick="showCreateInteraction()">Add Interaction</button>
                </div>
            `;
}   

async function InteractionDataRow(interaction){
    return`<tr class="table-content">
                <td>${interaction.interactionType.name}</td>
                <td>${await dateFormat(interaction.date)}</td>
                <td>${interaction.notes}</td>
                <td>
                    <a class="" type="submit" onclick="" href="#">
                        <img src="./assets/img/pencil.svg" style="width:1.5rem;height:auto;">
                    </a>
                </td>
            </tr> 
            `;
}
