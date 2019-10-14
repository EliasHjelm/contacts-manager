import state from '../application-state';

function deleteContact(id) {

    state.contacts = state.contacts.filter(contact => contact.id !== id);

    state.view = 'startPage';

}

export { deleteContact };