const eventListeners = {};

function eventHandler(event) {

	console.log('event', event);

	Object.keys(eventListeners).forEach(key => {

		if (key === event.type) {

			Object.keys(eventListeners[key]).forEach(target => {

				if (event.target.classList.contains(target)) {

					eventListeners[key][target].forEach(handler => {

						handler(event);

					});

				}

			});

		}

	});

}

function addEventListener(event, target, handler) {

	if (!eventListeners[event]) {

		eventListeners[event] = {};

		document.addEventListener(event, eventHandler);

	}

	eventListeners[event][target] = eventListeners[event][target] ? eventListeners[event][target] : [];

	eventListeners[event][target].push(handler);

}

export { addEventListener };
