import state from '../application-state';
import { createElement, appendNode } from '../helpers/create-element';
import { appendNodeWithText } from '../helpers/create-text-node';

let idCounter = 1;

const editContactPage = () => {

    const { pathname } = window.location;

    let id = pathname.match(/\d+/);

    id = id ? id[0] : null;

    const contact = state.contacts.find(contact => contact.id === Number(id));

    console.log('found', contact, 'on id', id, 'from contacts', state.contacts)

    
    if (!contact) {

        return document.createTextNode('Den kontakt du söker finns ej');

    } else {

        const { name, numbers, emails } = contact.current;

        const editContactContainer = createElement('div');

        appendNodeWithText(editContactContainer, 'label', 'Namn:', {
            for: 'edit-contact-name',
        });

        appendNode(editContactContainer, 'input', {
            value: name,
            id: 'edit-contact-name',
        });

        const emailsContainer = appendNode(editContactContainer, 'div');

        appendNodeWithText(emailsContainer, 'h2', 'E-post:');

        appendNodeWithText(emailsContainer, 'button', '+', {
            id: 'add-contact-email',
            handlers: {
                click: () => addEmailInput(emailsContainer),
            },
        });

        emails.forEach((email, index) => {

            const emailRow = appendNode(emailsContainer, 'div');

            appendNodeWithText(emailRow, 'button', 'X', {
                id: `remove-email-index-${index}`,
                handlers: {
                    click: () => emailsContainer.removeChild(emailRow),
                },
            });

            appendNode(emailRow, 'input', {
                type: 'text',
                value: email,
                class: 'contact-email-input',
            });

        })

        return editContactContainer;
    }
}

function addEmailInput(emailsContainer) {

	const emailRow = appendNode(emailsContainer, 'div');

	appendNodeWithText(emailRow, 'button', 'X', {
		id: `remove-email-${idCounter++}`,
		handlers: {
			click: () => emailsContainer.removeChild(emailRow),
		},
	});

	const input = appendNode(emailRow, 'input', {
		type: 'text',
        class: 'contact-email-input',
        placeholder: 'Skriv e-post...'
    });
    
    input.focus();

}

export default editContactPage;