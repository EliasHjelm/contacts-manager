import state from '../application-state';
import { navigate } from '../helpers/navigation-helper';

function addContact(contact) {

    state.contacts = [ ...state.contacts, contact ];

    // go back to start page after adding a contact
    navigate('/');

}

export { addContact };