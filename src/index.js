const applicationState = require('./application-state');
import { renderPage } from './render-engine';
import startPage from './start-page';
import contactPage from './views/contact-page';

renderPage(startPage());

applicationState.view = 'contactPage';
