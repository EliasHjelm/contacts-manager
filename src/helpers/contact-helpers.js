function copyContact(contact) {

    return {
        ...contact,
        emails: [ ...contact.emails ],
        numbers: [ ...contact.numers ],
    };
}

export { copyContact };