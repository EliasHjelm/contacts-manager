import { copyContact } from './helpers/copy-contact';

const contactModel = {
	
	updateContact(props) {

		this.revisions.push({ ...copyContact(this.latest), ...props });

	},

	get latest() {

		return this.revisions[this.count - 1];

	},

	get count() {

		return this.revisions ? this.revisions.length : 0;

	},
};

let idCounter = 1;

function createContact(props) {

	const contact = Object.create(contactModel);

	// is a fresh contact
	if (props.hasOwnProperty('name')) {

		contact.revisions = [];

		contact.revisions.push(props);

	} else {

		// we are importing a contact with existing history from localstorage
		contact.revisions = props.revisions;

	}

	contact.id = idCounter++;

	return contact;
}

export { createContact };
