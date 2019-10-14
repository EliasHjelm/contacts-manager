import state from '../application-state';
import { navigate } from '../helpers/navigation-helper';

function addContact(contact) {

    state.contacts = [ ...state.contacts, contact ];

    navigate('/');

}

export { addContact };