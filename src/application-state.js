import { createContact } from './contact-model';
import { renderPage } from './render-engine';

const fakeContact = {
	name: 'Leffe',
	emails: ['don_leffe@hotmail.se'],
	numbers: ['07014859999', '0703471387', '08-123 145'],
};

const state = {
	view: 'startPage',
	contacts: [createContact(fakeContact)],
};

const handler = {

	set: function(object, property, newValue) {

		if (property === 'view' && object[property] !== newValue) {

			renderPage(newValue);

			object[property] = newValue;

            return true;

		} else if (property === 'contacts') {

            object[property] = newValue;

			// refresh
            renderPage(object.view);

            return true;

		}
	},
};

const proxiedState = new Proxy(state, handler);

export default proxiedState;
