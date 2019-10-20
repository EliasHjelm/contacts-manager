import { appendNode } from "./create-element";
import { appendNodeWithText } from "./create-text-node";

let idCounter = 1;

function appendInputGroup(target, type, value, dataId, reference) {

    const row = document.createElement('div');

    // use event.target as reference when adding more email/number fields
    // (if reference is null it will be inserted last like a regular appendChild)
    target.insertBefore(row, reference);

	appendNodeWithText(row, 'button', 'X', {
        id: `remove-${type}-${idCounter++}`,
        class: [ 'button-red', 'button-small' ],
        type: 'button',
		handlers: {
			click: () => target.removeChild(row),
        },
	});

	const input = appendNode(row, 'input', {
		type: type === 'email' ? 'email' : 'tel',
        class: ['text-input', `contact-${type}-input`],
        required: true,
        minlength: 5,
        maxlength: 40,
    });

    if (value !== undefined && value !== null) {

        input.setAttribute('value', value);

    }

    if (dataId) {

        input.setAttribute('data-id', dataId);

    }

    input.focus();

}

function readFormData() {

    const name = document.getElementById('contact-name-input') ? document.getElementById('contact-name-input').value : null;

    const numbers = getIdAndValueFromDom('contact-number-input');

    const emails = getIdAndValueFromDom('contact-email-input');

    return { name, numbers, emails };

}

function getIdAndValueFromDom(className) {

    // the return value from getElementsByClassName is not an array, but is 'array-like' and can be mapped over like this
    const values = Array.prototype.map.call(document.getElementsByClassName(className), element => {

        const value = element ? element.value : null;

        const id = element ? element.getAttribute('data-id') : null;

        // return array with id and value so we can create a juicy map
        return [ id, value ];

    })
        // filter out falsy values
        .filter(value => Boolean(value[1]));

    // does not really need to be a juicy map, could have been a plain object, but I wanted to try working with a map
    // and it is more convenient to iterate over a map with the .forEach, than it is iterate over an object
    return new Map(values);
}

export { appendInputGroup, readFormData };