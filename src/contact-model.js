import { generateRevisionDiff } from "./helpers/contact-helpers";
import state from './application-state';

const contactModel = {

	updateContact(newContactData) {

		const diff = generateRevisionDiff(this.current, newContactData);
		
		if (diff.equal) {
			
			// if both version were equal, don't update
			return null;
		}

		if (this.latest !== this.current) {

			// if we have went back in time, we must stay there when making new changes
			this.revisions.length = this.activeIndex + 1;

		}

		newContactData.date = Date.now();
		// generate diff against current version
		newContactData.diff = diff

		// add to revisions
		this.revisions.push(newContactData);

		// set as active
		this.activeIndex = this.count - 1;

	},

	get latest() {

		return this.revisions[this.count - 1];

	},

	get current() {

		return this.revisions[this.activeIndex];

	},

	get count() {

		return this.revisions ? this.revisions.length : 0;

	}
};

function createContact(props) {

	const contact = Object.create(contactModel);

	// is a fresh contact
	if (props.hasOwnProperty('name')) {

		props.date = Date.now();

		contact.revisions = [];

		contact.revisions.push(props);

		contact.activeIndex = 0;

		contact.id = state.safeContactId;

	} else {

		// we are importing a contact with existing history from localstorage

		// convert array of arrays back to map
		props.revisions = props.revisions.map(revision => {

			return {
				...revision,
				emails: new Map(revision.emails),
				numbers: new Map(revision.numbers),
			};

		});

		Object.assign(contact, props);

	}


	return contact;
}

export { createContact };
