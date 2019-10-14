import { readDataFromLocalStorage } from './local-storage-handler';
import getPageFromUrl from './helpers/get-page-from-url';

readDataFromLocalStorage();

getPageFromUrl();

window.addEventListener('popstate', () => getPageFromUrl())

