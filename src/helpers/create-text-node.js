import { createElement } from './create-element';

function createNodeWithText(tag, text, options) {

	const tagElement = createElement(tag, options);

	const textNode = document.createTextNode(text);

	tagElement.appendChild(textNode);

	return tagElement;

}

function appendNodeWithText(target, tag, text, options) {

	if (typeof text === 'string') {

		const nodeWithText = createNodeWithText(tag, text, options);

		target.appendChild(nodeWithText);

	} else if (typeof text === 'object') {

		text.forEach(text => {

			appendNodeWithText(target, tag, text, options);

		});

		if (text.length === 0) {

			appendNodeWithText(target, tag, 'Saknas', options);

		}

	}

};

export { createNodeWithText, appendNodeWithText };
