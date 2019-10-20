import state from '../application-state';
import { createElement, appendNode, prependNode } from '../helpers/create-element';
import { appendNodeWithText } from '../helpers/create-text-node';
import { appendInputGroup, readFormData } from '../helpers/input-helpers';
import updateContact from '../actions/update-contact';
import { renderContactBasicView } from '../helpers/contact-helpers';

// ------ "TEMPLATE" --------
const editContactPage = () => {

    const { pathname } = window.location;

    let id = pathname.match(/\d+/);

    id = id ? id[0] : null;

    const contact = state.contacts.find(contact => contact.id === Number(id));

    if (!contact) {

        return document.createTextNode('Den kontakt du söker finns ej');

    } else {

        const { name, numbers, emails } = contact.current;

        const editContactForm = createElement('form');

        appendNodeWithText(editContactForm, 'a', 'Tillbaka', {
            href: '/',
            className: 'back-link',
            id: 'back-link',
            handlers: {
                click: (event) => {
                    event.preventDefault();
                    window.history.back();
                },
            },
        });

        editContactForm.onsubmit = (event) => {
            event.preventDefault();
            readAndUpdateContact(contact);
        };

        appendNodeWithText(editContactForm, 'h1', 'Redigera kontakt');

        appendNodeWithText(editContactForm, 'h3', 'Namn:', {
            for: 'contact-name-input',
        });

        appendNode(editContactForm, 'input', {
            value: name,
            type: 'text',
            id: 'contact-name-input',
            required: true,
            minlength: 1,
            maxlength: 30,
        });

        // edit emails
        const emailsContainer = appendNode(editContactForm, 'div');

        appendNodeWithText(emailsContainer, 'h3', 'E-post:');

        let safeEmailId = emails.size ? Math.max( ...emails.keys() ) + 1 : 1;

        for (let [id, email] of emails) {

            appendInputGroup(emailsContainer, 'email', email, id);

        }

        appendNodeWithText(emailsContainer, 'button', '+', {
            id: 'add-contact-email',
            type: 'button',
            class: [ 'button-green', 'button-small' ],
            handlers: {
                click: event => appendInputGroup(emailsContainer, 'email', null, safeEmailId++, event.target),
            },
        });


        // edit numbers
        const numbersContainer = appendNode(editContactForm, 'div');

        appendNodeWithText(numbersContainer, 'h3', 'Nummer:');

        let safeNumberId = numbers.size ? Math.max( ...numbers.keys() ) + 1 : 1;

        for (let [id, number] of numbers) {

            appendInputGroup(numbersContainer, 'number', number, id);

        }

        appendNodeWithText(numbersContainer, 'button', '+', {
            id: 'add-contact-numer',
            class: [ 'button-green', 'button-small' ],
            type: 'button',
            handlers: {
                click: event => appendInputGroup(numbersContainer, 'number', null, safeNumberId++, event.target),
            },
        });

        // save changes button
        appendNodeWithText(editContactForm, 'button', 'Spara ändringar', {
            id: 'update-contact-button',
            class: [ 'button-green', 'big-button' ],
        });

        // render contact history
        editContactForm.appendChild(getContactHistory(contact));

        return editContactForm;

    }
}



// ----------- HELPER FUNCTIONS -------------------------

function readAndUpdateContact(contact) {

    const newContact = readFormData();

    updateContact(contact, newContact);

}

function getContactHistory(contact) {

    const contactHistoryContainer = createElement('div');

    appendNodeWithText(contactHistoryContainer, 'h2', 'Historik:');

    const contactHistoryWrapper = appendNode(contactHistoryContainer, 'div');

    contact.revisions.forEach((revision, index) => prependRevision(contactHistoryWrapper, revision, contact, index));

    return contactHistoryContainer;

}

function prependRevision(target, revision, contact, index) {

    let className = 'revision-container';

    const isActive = revision === contact.current;

    if (isActive) {

        className = ['revision-container', 'revision-container-active'];

    }

    const revisionContainer = prependNode(target, 'div', {
        class: className,
        id: `revision-container-${index}`,
        handlers: {
            click: () => {
                contact.activeIndex = index;
                state.contacts = state.contacts;
            },
        },
    });

    const contactElement = renderContactBasicView(revision, true, true, index, isActive);

    revisionContainer.appendChild(contactElement);

}

export default editContactPage;