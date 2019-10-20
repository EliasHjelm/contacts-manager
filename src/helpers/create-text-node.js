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

		return nodeWithText;

	} else if (typeof text === 'object') {

		const nodes = [];

		text.forEach(text => {

			const node = appendNodeWithText(target, tag, text, options);

			nodes.push(node);

		});

		return nodes;

	}

};

export { createNodeWithText, appendNodeWithText };
