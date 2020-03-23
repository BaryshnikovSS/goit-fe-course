'use strict';

const getFetch = async () => {
    try {
        const responce = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then(resp => resp.json());
        return responce;
    } catch (error) {
        console.error(error);
    }
}; 

const listElem = document.getElementById('main_list');

const getResultMyTemplate = async () => {

    const users = await getFetch().then(data => data);

    const template = users.reduce((acc, user) => {

        const refs = {
            name: user.name,
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
        }

        acc += `
            <li class="main_list_elem">
                <h2>${refs.name}</h2>
                <p>address:</p>
                <ul class="list">
                    <li class="list_item">street: ${refs.street}</li>
                    <li class="list_item">suite: ${refs.suite}</li>
                    <li class="list_item">city: ${refs.city}</li>
                    <li class="list_item">zipcode: ${refs.zipcode}</li>
                </ul>
            </li>`
        return acc;
    }, '')


    listElem.insertAdjacentHTML('afterbegin', template);

}

getResultMyTemplate()