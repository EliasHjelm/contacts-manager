import { renderPage } from './render-engine';
import { saveContactsToLocalStorage } from './local-storage-handler';

const state = {
	view: '',
	contacts: [],
	pageId: 1,
	safeContactId: 1,
};

let pristine = true;

const handler = {

	set: function(state, property, newValue) {

		if (property === 'view' && state[property] !== newValue) {

			// give renders different id's so we can associate event listeners with a specific render instance
			state.pageId++;

			renderPage(newValue);

			state[property] = newValue;

			pristine = false;

            return true;

		} else if (property === 'contacts') {

			state[property] = newValue;

			state.pageId++;

			// refresh
			renderPage(state.view);

			// don't trigger re-save on initial reading of contacts from localstorage
			if (pristine) {

				pristine = false;

			} else {

				saveContactsToLocalStorage(newValue);

			}

			// to ensure all contacts have unique ids, start at the current max id + 1
			const safeContactId = newValue.length ? Math.max( ...newValue.map(contact => contact.id )) + 1 : 1;

			// update our safe id for smooth contact creation
			state.safeContactId = safeContactId;
            return true;

		} else {

			// other properties should not be set by any outside force

			console.warn('Warning! Someone attempted to set property', property, 'to', newValue, 'on application state.');

			return false;

		}
	},
};

const proxiedState = new Proxy(state, handler);

export default proxiedState;
