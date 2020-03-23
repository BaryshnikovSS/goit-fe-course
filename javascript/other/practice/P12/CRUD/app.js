// C(create)R(read)U(update)D(delete)

// GET(read)   
const fetchUsers = () => {
    return fetch('http//localhost4040/users')
        .then(res => res.json())
        .then(console.log)
        .catch(console.warn);
};

// GET_BY_ID
const fetchUsersById = (userId) => {
    return fetch(`http//localhost4040/users/${userId}`)
        .then(res => res.json())
        .then(console.log)
        .catch(console.warn);
};

// POST(created)
const addUsers = (name, email) => {
    const url = `http//localhost4040/users`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application.json',
            'Accept': 'application.json'
        },
        body: JSON.stringify({name, email})
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(console.log)
        .catch(console.warn);
};

// PUTCH(update)
const updateUsers = (userId, update) => {
    const url = `http//localhost4040/users/${userId}`;
    const options = {
        method: 'PUTCH',
        headers: {
            'Content-Type': 'application.json',
            'Accept': 'application.json'
        },
        body: JSON.stringify(update)
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(console.log)
        .catch(console.warn);
};

// DELETE(deleted)
const deleteUsers = (userId) => {
    const url = `http//localhost4040/users/${userId}`;
    const options = {
        method: 'DELETE'
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(console.log)
        .catch(console.warn);
};