import state from '../application-state';

const eventListeners = {};

function eventHandler(event) {

	const { pageId } = state;

	Object.keys(eventListeners).forEach(key => {

		if (key === event.type && eventListeners[key][pageId]) {

			Object.keys(eventListeners[key][pageId]).forEach(target => {

				if (event.target.id === target) {

					eventListeners[key][pageId][target].forEach(handler => {

						handler(event);

					});

				}

			});

		}

	});

}

function addEventListener(event, target, handler) {

	// we could clean up handlers attached to old pageIds if we cared to
	const { pageId } = state;

	if (!eventListeners[event]) {

		eventListeners[event] = {};

		document.addEventListener(event, eventHandler);

	}

	eventListeners[event][pageId] = eventListeners[event][pageId] || {};

	eventListeners[event][pageId][target] = eventListeners[event][pageId][target] || [];


	eventListeners[event][pageId][target].push(handler);

}

export { addEventListener };
