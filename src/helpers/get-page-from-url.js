import { renderPage } from '../render-engine';

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

        renderPage(`edit-contact-${contactId}`);

    } else if (pagesByUrl[pathname]) {

        renderPage(pagesByUrl[pathname]);

    } else {

        renderPage('not found');
    }

}

export default getPageFromUrl;
