import state from '../application-state';
import { createElement, appendNode } from '../helpers/create-element';
import { appendNodeWithText } from '../helpers/create-text-node';

const editContactPage = () => {

    const { pathname } = window.location;

    let id = pathname.match(/\d+/);

    id = id ? id[0] : null;

    const contact = state.contacts.find(contact => contact.id === Number(id));

    console.log('found', contact, 'on id', id, 'from contacts', state.contacts)

    
    if (!contact) {

        return document.createTextNode('Den kontakt du söker finns ej');

    } else {

        const { name, numbers, emails } = contact.latest;

        const editContactContainer = createElement('div');

        appendNodeWithText(editContactContainer, 'label', 'Namn:', {
            for: 'edit-contact-name',
        });

        appendNode(editContactContainer, 'input', {
            value: name,
            id: 'edit-contact-name',
        });

        return editContactContainer;
    }
}



export default editContactPage;