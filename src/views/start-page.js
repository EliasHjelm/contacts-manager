import state from '../application-state'; 
import { appendNodeWithText } from '../helpers/create-text-node';
import { createElement } from '../helpers/create-element';

function getContactsElements() {
	
	console.log('state', state);

	return state.contacts.map((contact) => {

		const { name, emails, numbers } = contact.latest;

		const contactElement = document.createElement('div');

		appendNodeWithText(contactElement, 'h2', name);

		// email elements
		const emailsContainer = createElement('div', { class: 'emails-container' });

		appendNodeWithText(emailsContainer, 'div', 'Email:', { class: 'emails-heading' });

		appendNodeWithText(emailsContainer, 'div', emails, { class: 'emails-email' });

		contactElement.appendChild(emailsContainer);

		// numbers elements
		const numbersContainer = createElement('div', { class: 'numbers-container' });

		appendNodeWithText(numbersContainer, 'div', 'Nummer:', { class: 'numbers-heading' });

		appendNodeWithText(numbersContainer, 'div', numbers, { class: 'numbers-number' });

		contactElement.appendChild(numbersContainer);

		return contactElement;

	});
}

const handleCreateNewContactClick = () => {

	state.view = 'newContactPage';

};

const startPage = () => {

	const startPageContainer = createElement('div', { class: 'start-page' });

	appendNodeWithText(startPageContainer, 'h1', 'Contacts');

	const contactsContainer = createElement('div', { class: 'start-page' });

	const contactsElements = getContactsElements();

	contactsElements.forEach(contactElement => {
		contactsContainer.appendChild(contactElement);
	});

	startPageContainer.appendChild(contactsContainer);

	appendNodeWithText(startPageContainer, 'button', 'Ny kontakt', { class: 'new-contact-button', handlers: { click: handleCreateNewContactClick } });

	return startPageContainer;
};

export default startPage;
