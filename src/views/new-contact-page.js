import { createElement, appendNode } from '../helpers/create-element';
import { appendNodeWithText } from '../helpers/create-text-node';
import { createContact } from '../contact-model';
import { addContact } from '../actions/add-contact';
import { appendInputGroup, readFormData } from '../helpers/input-helpers';

const newContactPage = () => {

	let idCounter = 1;

	const contactPageContainer = createElement('form', { class: 'new-contact-page-container' });

	appendNodeWithText(contactPageContainer, 'a', 'Tillbaka', {
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

	contactPageContainer.onsubmit = createNewContact;

	appendNodeWithText(contactPageContainer, 'h2', 'Skapa kontakt');

	appendNodeWithText(contactPageContainer, 'label', 'Namn:', { for: 'contact-name-input' });

	appendNode(contactPageContainer, 'input', {
		type: 'text',
		id: 'contact-name-input',
		required: true,
	});

	
	const emailsContainer = appendNode(contactPageContainer, 'div');
	
	appendNodeWithText(emailsContainer, 'label', 'Epost:');
	
	appendInputGroup(emailsContainer, 'email', null, idCounter++, null);
	
	appendNodeWithText(emailsContainer, 'button', '+', {
		id: 'add-email-button',
		type: 'button',
		class: [ 'button-green', 'button-small' ],
		handlers: {
			click: event => appendInputGroup(emailsContainer, 'email', null, idCounter++, event.target),
		},
	});

	const numbersContainer = appendNode(contactPageContainer, 'div');

	appendNodeWithText(numbersContainer, 'label', 'Nummer:');

	appendInputGroup(numbersContainer, 'number', null, idCounter++, null);

	appendNodeWithText(numbersContainer, 'button', '+', {
		id: 'add-contact-number',
		type: 'button',
		class: [ 'button-green', 'button-small' ],
		handlers: {
			click: event => appendInputGroup(numbersContainer, 'number', null, idCounter++, event.target),
		},
	});

	appendNodeWithText(contactPageContainer, 'button', 'Skapa Kontakt', {
		id: 'create-contact-button',
		class: [ 'big-button', 'button-green' ],
	});

	return contactPageContainer;
};

function createNewContact(event) {

	event.preventDefault();

	const newContact = readFormData();

	const contact = createContact(newContact);

	addContact(contact);
}

export default newContactPage;