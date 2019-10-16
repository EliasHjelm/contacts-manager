import { renderPage } from '../render-engine';
import state from '../application-state';

function getPageFromUrl() {

    const { pathname } = window.location;

    console.log('stumbled upon', pathname)

    const pagesByUrl = {
        '/': 'startPage',
        '/skapa-kontakt': 'newContactPage',
    }

    if (/redigera-kontakt\/\d+/.test(pathname)) {

        const contactId = pathname.match(/\d+/)[0];

        console.log('found contactId', contactId);

        state.view = `edit-contact-${contactId}`

    } else if (pagesByUrl[pathname]) {

        state.view = pagesByUrl[pathname];

    } else {

        state.view = '404';

    }

}

export default getPageFromUrl;
