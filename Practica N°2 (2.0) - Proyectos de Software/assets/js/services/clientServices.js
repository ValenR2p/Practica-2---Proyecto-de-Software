import { URL } from "../config/URL.js";

const fetchClients = async () => {
    const response = await fetch(URL + 'Client');
    const Clients = await response.json();
    return Clients;
}

const clientServices = {
    FetchClients : fetchClients
}
export default clientServices;