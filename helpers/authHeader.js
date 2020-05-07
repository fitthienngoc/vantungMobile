export default function authHeader() {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users && users.dataUser && users.dataUser.authenticate) {
        return { 
            'Authorization': users.dataUser.authenticate,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}