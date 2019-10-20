import { readDataFromLocalStorage } from './local-storage-handler';
import getPageFromUrl from './helpers/get-page-from-url';

// check if there is any data saved in local storage
readDataFromLocalStorage();

// read the url query string and render the appropriate page
getPageFromUrl();

// listen for navigation
window.addEventListener('popstate', () => getPageFromUrl())

