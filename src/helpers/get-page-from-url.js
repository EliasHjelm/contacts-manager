import state from '../application-state';

function getPageFromUrl() {

    const { pathname } = window.location;

    const pagesByUrl = {
        '/': 'startPage',
        '/skapa-kontakt': 'newContactPage',
    }

    if (/redigera-kontakt\/\d+/.test(pathname)) {

        // get the contact id from url
        const contactId = pathname.match(/\d+/)[0];

        state.view = `edit-contact-${contactId}`

    } else if (pagesByUrl[pathname]) {

        state.view = pagesByUrl[pathname];

    } else {

        state.view = '404';

    }

}

export default getPageFromUrl;
