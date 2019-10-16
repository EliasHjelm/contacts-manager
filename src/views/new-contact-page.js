import { createElement, appendNode } from '../helpers/create-element';
import { appendNodeWithText } from '../helpers/create-text-node';
import { createContact } from '../contact-model';
import { addContact } from '../actions/add-contact';

let idCounter = 1;

const newContactPage = () => {

	const contactPageContainer = createElement('div', { class: 'new-contact-page-container' });

	appendNodeWithText(contactPageContainer, 'h2', 'Skapa kontakt');

	appendNodeWithText(contactPageContainer, 'label', 'Namn:', { for: 'contact-name-input' });

	appendNode(contactPageContainer, 'input', {
		type: 'text',
		id: 'contact-name-input',
	});

	const numbersContainer = appendNode(contactPageContainer, 'div');

	appendNodeWithText(numbersContainer, 'label', 'Nummer:', { for: 'number-input-1' });

	appendNode(numbersContainer, 'input', {
		type: 'text',
		id: 'contact-number-input-1',
		class: 'contact-number-input',
	});

	appendNodeWithText(numbersContainer, 'button', '+', {
		id: 'add-contact-number',
		handlers: {
			click: () => addNumberInput(numbersContainer),
		},
	});

	const emailsContainer = appendNode(contactPageContainer, 'div');

	appendNodeWithText(emailsContainer, 'label', 'Epost:', { for: 'email-input-1' });

	appendNode(emailsContainer, 'input', {
		type: 'text',
		id: 'email-input-1',
		class: 'contact-email-input',
	});

	appendNodeWithText(emailsContainer, 'button', '+', {
		id: 'add-email-button',
		handlers: {
			click: () => addEmailInput(emailsContainer),
		},
	});

	appendNodeWithText(contactPageContainer, 'button', 'Skapa Kontakt', {
		id: 'create-contact-button',
		handlers: {
			click: createNewContact,
		},
	});

	return contactPageContainer;
};

function addNumberInput(numbersContainer) {

	const numberRow = appendNode(numbersContainer, 'div');

	appendNodeWithText(numberRow, 'button', 'X', {
		id: `remove-number-${idCounter++}`,
		handlers: {
			click: () => numbersContainer.removeChild(numberRow),
		},
	});

	appendNode(numberRow, 'input', {
		type: 'text',
		class: 'contact-number-input',
	});
}

function addEmailInput(emailsContainer) {

	const emailRow = appendNode(emailsContainer, 'div');

	appendNodeWithText(emailRow, 'button', 'X', {
		id: `remove-email-${idCounter++}`,
		handlers: {
			click: () => emailsContainer.removeChild(emailRow),
		},
	});

	appendNode(emailRow, 'input', {
		type: 'text',
		class: 'contact-email-input',
	});

}

function createNewContact() {

	const name = document.getElementById('contact-name-input') ? document.getElementById('contact-name-input').value : 'missing';

	// the return value from getElementsByClassName is not an array, but is 'array-like' and can be mapped over like this
	const numbers = Array.prototype.map.call(document.getElementsByClassName('contact-number-input'), element => element ? element.value : 'Missing');

	const emails = Array.prototype.map.call(document.getElementsByClassName('contact-email-input'), element => element ? element.value : 'Missing');

	const contact = createContact({ name, numbers, emails });

	addContact(contact);
}

export default newContactPage;
