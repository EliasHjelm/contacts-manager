import state from '../application-state';

function addContact(contact) {

    state.contacts = [ ...state.contacts, contact ];

    state.view = 'startPage';

}

export { addContact };