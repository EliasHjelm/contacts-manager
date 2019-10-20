import { addEventListener } from '../event-handler';

function createElement(tag, options) {

	const element = document.createElement(tag);

	if (options) {

		Object.keys(options).forEach(option => {

			// special treatment for class ...
			if (option === 'class') {

				if (typeof options[option] === 'string') {

					element.className = options[option];

				} else if (typeof options[option] === 'object') {

					element.className = options[option].filter(className => typeof className === 'string').join(' ');

				}

				// ... and event handlers ...
			} else if (option === 'handlers') {

				// first check that a valid id was supplied 
				if (typeof options.id === 'string' && options.id.length > 0) {

					// handlers should be an object where keys and events and properties are handler functions
					Object.keys(options[option]).forEach(event => {

						addEventListener(event, options.id, options.handlers[event]);

					});

				} else {

					throw new Error('Supply a valid ID when attaching event handlers to an element!');

				}

				// ... other attributes just set without questioning
			} else {

				element.setAttribute(option, options[option]);

			}

		});

	}

	return element;

}

function appendNode(target, tag, options) {

	const element = createElement(tag, options);

	target.appendChild(element);

	return element;

}

function prependNode(target, tag, options) {

	const element = createElement(tag, options);

	target.prepend(element);

	return element;

}

export { createElement, appendNode, prependNode };
