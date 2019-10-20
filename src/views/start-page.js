import state from '../application-state'; 
import { appendNodeWithText } from '../helpers/create-text-node';
import { createElement } from '../helpers/create-element';
import { deleteContact } from '../actions/delete-contact';
import { navigate } from '../helpers/navigation-helper';
import { renderContactBasicView } from '../helpers/contact-helpers';

function getContactsElements() {

	return state.contacts.map((contact) => {
		const {id, current } = contact;

		const contactElement = createElement('div', {
			class: 'start-page-contact-container'
		});

		contactElement.appendChild(renderContactBasicView(current, false, false));

		appendNodeWithText(contactElement, 'button', 'Redigera', {
			class: [ 'button-medium', 'button-orange' ],
			id: `edit-contact-button-${id}`,
			handlers: {
				click: () => navigate(`redigera-kontakt/${id}`),
			},
		});

		appendNodeWithText(contactElement, 'button', 'Ta Bort', {
			id: `delete-contact-button-${id}`,
			class: [ 'button-medium', 'button-red' ],
			handlers: {
				click: () => deleteContact(id),
			},
		});

		return contactElement;

	});
}

const handleCreateNewContactClick = () => {

	navigate('skapa-kontakt');

};

const startPage = () => {

	const startPageContainer = createElement('div', { class: 'start-page' });

	appendNodeWithText(startPageContainer, 'h1', 'Kontakter');

	const contactsContainer = createElement('div', { class: 'start-page' });

	const contactsElements = getContactsElements();

	contactsElements.forEach(contactElement => {
		contactsContainer.appendChild(contactElement);
	});

	startPageContainer.appendChild(contactsContainer);

	appendNodeWithText(startPageContainer, 'button', 'Ny kontakt', {
		id: 'new-contact-button',
		class: [ 'big-button', 'button-green' ],
		handlers: { click: handleCreateNewContactClick }
	});

	return startPageContainer;
};

export default startPage;
