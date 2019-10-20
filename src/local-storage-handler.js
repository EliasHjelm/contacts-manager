import state from './application-state';
import { createContact } from './contact-model';

const { localStorage } = window;


function readDataFromLocalStorage() {

    const contacts = localStorage.getItem('contacts');

    if (contacts) {

        const parsedContacts = JSON.parse(contacts);

        const contactObjects = parsedContacts.map(contact => createContact(contact));

        state.contacts = contactObjects;

    }

}

function saveContactsToLocalStorage(contacts) {

    // ditch all methods, convert maps to array of arrays before stringifying
    const strippedContacts = contacts.map(({ revisions, activeIndex, id }) => ({
        activeIndex,
        id,
        revisions: revisions.map(revision => {
            return {
                date: revision.date,
                name: revision.name,
                diff: revision.diff,
                emails: Array.from(revision.emails),
                numbers: Array.from(revision.numbers),
            }
        }),
    }));

    localStorage.setItem('contacts', JSON.stringify(strippedContacts));

}

export { readDataFromLocalStorage, saveContactsToLocalStorage };