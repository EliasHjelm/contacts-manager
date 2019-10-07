const contactModel = {};

function createContact(props) {

	const contact = Object.create(contactModel);

	Object.assign(contact, props);

	console.log('creating', contact);

	return contact;
}

export { createContact };
