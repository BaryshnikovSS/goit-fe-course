// C(create)R(read)U(update)D(delete)

axios.defaults.baseUrl = 'http//localhost4040';
axios.defaults.headers.post['Content-Type'] = 'application.json';
axios.defaults.headers.get['Accept'] = 'application.json';
axios.defaults.headers.common['Autorization'] = 'Beared jqueryismyjam';

// GET(read) 
const fetchUsers = () => {
    return axios
        .get('/users')
        .then(console.log)
        .catch(console.warn);
}

// GET_BY_ID
const fetchUsersById = (userId) => {
    return axios
        .get(`/users/${userId}`)
        .then(console.log)
        .catch(console.warn);
};

// POST(created)
const addUsers = (name, email) => {
    const url = `/users`;
    const body = { name, email };

    return axios
        .post(url, body)
        .then(console.log)
        .catch(console.warn);
};

// PUTCH(update)
const updateUsers = (userId, update) => {
    const url = `/users/${userId}`;

    return axios.putch(url, update)
        .then(console.log)
        .catch(console.warn);
};

// DELETE(deleted)
const deleteUsers = (userId) => {
    const url = `/users/${userId}`;

    return axios
        .delete(url)
        .then(console.log)
        .catch(console.warn);
};