const contactModel = {

	updateContact(newContactData) {

		if (this.latest !== this.current) {

			// if we have went back in time, we must stay there when making new changes
			this.revisions.length = this.revisions.indexOf(this.current) + 1;

		}

		this.revisions.push(newContactData);

		this.current = this.latest;

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

		contact.current = props;

	} else {

		// we are importing a contact with existing history from localstorage
		contact.revisions = props.revisions;

		contact.current = contact.latest;

	}

	contact.id = idCounter++;

	return contact;
}

export { createContact };
