import { createElement, appendNode } from "./create-element";
import { appendNodeWithText } from "./create-text-node";

function renderContactBasicView(revision, showDate, showDiff, versionNumber, isActive) {

    const { name, emails, numbers, date, diff } = revision;

    const contactContainer = createElement('div', {
        class: 'contact-container',
    });

    let numberString = '', activeString = '';

    if (typeof versionNumber === 'number') {

        numberString = 'v' + (versionNumber + 1) + ' ';

    }

    if (isActive) {

        activeString = ' (Aktiv)';

    }

    appendNodeWithText(contactContainer, 'h3', numberString + name + activeString, {
        class: ['contact-name', (showDiff && diff && diff.name) ? 'diff-changed' : null],
    });

    if (showDate) {

        appendNodeWithText(contactContainer, 'p', new Date(date).toLocaleString('se-SE', {
            hour12: false,
        }).slice(0, -3));

    }

    appendNodeWithText(contactContainer, 'h4', 'E-post:');

    const emailsContainer = appendNode(contactContainer, 'ul');

    for (let [id, email] of emails) {

        let diffStatus;

        if (diff && showDiff) {

            diffStatus = diff.emails[id];

        }

        const className = diffStatus ? `diff-${diffStatus}` : '';

        appendNodeWithText(emailsContainer, 'li', email, {
            'data-id': id,
            class: className,
        });

    }

    if (showDiff && diff && diff.emails.removed.length) {

        diff.emails.removed.forEach(removedEmail => {

            appendNodeWithText(emailsContainer, 'li', removedEmail, {
                class: 'diff-removed',
            });

        });

    }

    appendNodeWithText(contactContainer, 'h4', 'Nummer:');

    const numbersContainer = appendNode(contactContainer, 'ul');

    for (let [id, number] of numbers) {

        let diffStatus;

        if (diff && showDiff) {

            diffStatus = diff.numbers[id];

        }

        const className = diffStatus ? `diff-${diffStatus}` : '';

        appendNodeWithText(numbersContainer, 'li', number, {
            'data-id': id,
            class: className,
        });

    }

    if (showDiff && diff && diff.numbers.removed.length) {

        diff.numbers.removed.forEach(removedNumber => {

            appendNodeWithText(numbersContainer, 'li', removedNumber, {
                class: 'diff-removed',
            });

        });

    }

    return contactContainer;

}

function generateRevisionDiff(older, newer) {

    const diff = {
        name: older.name !== newer.name,
        emails: generateMapDiff(older.emails, newer.emails),
        numbers: generateMapDiff(older.numbers, newer.numbers),
    };
    
    // for convenience we store here a boolean indiciating if anything is different at all
    diff.equal = !diff.name
        && diff.emails.removed.length === 0
        && Object.keys(diff.emails).length === 1
        && diff.numbers.removed.length === 0
        && Object.keys(diff.numbers).length === 1

    return diff;

}

function generateMapDiff(older, newer) {

    // save changed and added with id as key, because they will be in the new map
    // removed won't be in the new, so discard their id and just save the values
    const diff = { removed: [] };

    // for each value in the newer, flag if it was changed or added
    newer.forEach((value, key) => {

        if (!older.has(key)) {

            diff[key] = 'added';

        } else if (older.get(key) !== value) {

            diff[key] = 'changed';

        }

    });

    // for each value in the older, flag if it no longer exists in newer
    older.forEach((value, key) => {

        if (!newer.has(key)) {

            diff.removed.push(value);

        }

    });

    return diff;


}

export { renderContactBasicView, generateRevisionDiff };