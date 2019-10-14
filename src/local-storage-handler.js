import state from './application-state';
import { createContact } from './contact-model';

const { localStorage } = window;


function readDataFromLocalStorage() {

    const contacts = localStorage.getItem('contacts');

    if (contacts) {

        const json = JSON.parse(contacts);

        const contactObjects = json.map(json => createContact(json));

        state.contacts = contactObjects;
    }

}

function saveContactsToLocalStorage(contacts) {

    // ditch all methods
    const strippedContacts = contacts.map(({ revisions }) => ({ revisions }));

    localStorage.setItem('contacts', JSON.stringify(strippedContacts));

}

export { readDataFromLocalStorage, saveContactsToLocalStorage };