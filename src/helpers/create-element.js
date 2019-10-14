import { addEventListener } from '../helpers/event-handler';

function createElement(tag, options) {

	const element = document.createElement(tag);

	if (options) {

		Object.keys(options).forEach(option => {

			if (option === 'class') {

				if (typeof options[option] === 'string') {

					element.className = options[option];

				} else if (typeof options[option] === 'object') {

					element.className = options[option].join(' ');

				}

			} else if (option === 'handlers') {

				if (typeof options.class === 'string') {

					Object.keys(options[option]).forEach(event => {

						addEventListener(event, options.class, options.handlers[event]);

					});

				} else {

					throw new Error('Use exactly one classname for event handlers');

				}

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

export { createElement, appendNode };
