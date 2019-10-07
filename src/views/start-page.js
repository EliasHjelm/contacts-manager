import state from '../application-state'; 
import createNodeWithText from '../helpers/create-text-node';

function getContactsElements() {
	
	console.log('state', state);

	return state.contacts.map(({name, emails, number}) => {

		const contactElement = document.createElement('div');

		const heading = createNodeWithText('h2', name);

		contactElement.appendChild(heading);

		return contactElement;

	});
}

const startPage = (props) => {

	const startPageContainer = document.createElement('div');

	startPageContainer.className = "start-page";

	const headingText = createNodeWithText('h1', 'Contacts');

	startPageContainer.appendChild(headingText);

	const contactsContainer = document.createElement('div');

	contactsContainer.className = 'contacts-container';

	const contactsElements = getContactsElements();

	contactsElements.forEach(contactElement => {
		contactsContainer.appendChild(contactElement);
	});

	startPageContainer.appendChild(contactsContainer);

	return startPageContainer;
}

export default startPage;
