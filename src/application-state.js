import { renderPage } from './render-engine';
import { saveContactsToLocalStorage } from './local-storage-handler';

const state = {
	view: '',
	contacts: [],
	pageId: 1,
};

let pristine = true;

const handler = {

	set: function(object, property, newValue) {

		if (property === 'view' && object[property] !== newValue) {

			object.pageId++;

			renderPage(newValue);

			object[property] = newValue;

            return true;

		} else if (property === 'contacts') {

			object[property] = newValue;

			if (pristine) {

				pristine = false;

				return true;
			}

			object.pageId++;

			// refresh
			renderPage(object.view);

			saveContactsToLocalStorage(newValue);

            return true;

		} else {

			return true;

		}
	},
};

const proxiedState = new Proxy(state, handler);

export default proxiedState;
