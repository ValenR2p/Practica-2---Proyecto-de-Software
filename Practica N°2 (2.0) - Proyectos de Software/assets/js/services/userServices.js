import { URL } from "../config/URL.js";

const fetchUsers = async () => {
    const response = await fetch(URL + 'User');
    const Users = await response.json();
    return Users;
}

const userServices = {
    FetchUsers : fetchUsers
}
export default userServices;