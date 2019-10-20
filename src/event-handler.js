import state from './application-state';

const eventListeners = {};

function eventHandler(event) {

	const { pageId } = state;

	// loop through all registered event types...
	Object.keys(eventListeners).forEach(key => {

		// ... to check for a match in event type and page id...
		if (key === event.type && eventListeners[key][pageId]) {

			// ... then check all targets ...
			Object.keys(eventListeners[key][pageId]).forEach(target => {

				const targetElement = document.getElementById(target);

				// ... to see if the event target === listener target, or the listener target contains the event target...
				if ((event.target.id === target) || (targetElement && targetElement.contains(event.target))) {

					// ... if so, for each registered handler ...
					eventListeners[key][pageId][target].forEach(handler => {

						// ... pass it the event and execute
						handler(event);

					});

				}

			});

		}

	});

}

function addEventListener(event, target, handler) {

	const { pageId } = state;

	// make sure we are listening for the actual event
	if (!eventListeners[event]) {

		eventListeners[event] = {};

		document.addEventListener(event, eventHandler);

	}

	// make associate the handler with a pageid and a target
	eventListeners[event][pageId] = eventListeners[event][pageId] || {};

	eventListeners[event][pageId][target] = eventListeners[event][pageId][target] || [];


	eventListeners[event][pageId][target].push(handler);

}

export { addEventListener };
