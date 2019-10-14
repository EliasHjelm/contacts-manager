const contactModel = {
	
	updateContact(props) {

		this.revisions.push({ ...this.latest, ...props });

	},

	get latest() {

		console.log('getting latest from ', this);

		return this.revisions[this.count - 1];

	},

	get count() {

		return this.revisions ? this.revisions.length : 0;

	},
};

let idCounter = 1;

function createContact(props) {

	const contact = Object.create(contactModel);
	
	const current = {};

	Object.assign(current, props);

	contact.revisions = [];

	contact.revisions.push(current);

	contact.id = idCounter++;

	window.contact = contact;

	return contact;
}

export { createContact };
