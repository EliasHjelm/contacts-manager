import state from '../application-state';

function updateContact(contact, newProps) {

    contact.updateContact(newProps);

    // what is this silly line of code?
    // since we have new contact info, we must trick the render engine
    // into rendering the page anew
    // so we do this assignment to trigger our trap for the setter which will take care of business
    state.contacts = state.contacts;

}

export default updateContact;