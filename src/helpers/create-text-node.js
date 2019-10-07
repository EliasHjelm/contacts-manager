function createNodeWithText(tag, text) {

	const tagElement = document.createElement(tag);

	const textNode = document.createTextNode(text);

	tagElement.appendChild(textNode);

	return tagElement;

}

export default createNodeWithText;
