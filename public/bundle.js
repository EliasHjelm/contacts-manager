/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/add-contact.js":
/*!************************************!*\
  !*** ./src/actions/add-contact.js ***!
  \************************************/
/*! exports provided: addContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContact\", function() { return addContact; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/navigation-helper */ \"./src/helpers/navigation-helper.js\");\n\n\n\nfunction addContact(contact) {\n\n    _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = [ ..._application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts, contact ];\n\n    Object(_helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_1__[\"navigate\"])('/');\n\n}\n\n\n\n//# sourceURL=webpack:///./src/actions/add-contact.js?");

/***/ }),

/***/ "./src/actions/delete-contact.js":
/*!***************************************!*\
  !*** ./src/actions/delete-contact.js ***!
  \***************************************/
/*! exports provided: deleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteContact\", function() { return deleteContact; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\nfunction deleteContact(id) {\n\n    _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.filter(contact => contact.id !== id);\n\n    _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].view = 'startPage';\n\n}\n\n\n\n//# sourceURL=webpack:///./src/actions/delete-contact.js?");

/***/ }),

/***/ "./src/application-state.js":
/*!**********************************!*\
  !*** ./src/application-state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-engine */ \"./src/render-engine.js\");\n/* harmony import */ var _local_storage_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-handler */ \"./src/local-storage-handler.js\");\n\n\n\nconst state = {\n\tview: '',\n\tcontacts: [],\n\tpageId: 1,\n};\n\nlet pristine = true;\n\nconst handler = {\n\n\tset: function(object, property, newValue) {\n\n\t\tif (property === 'view' && object[property] !== newValue) {\n\n\t\t\tobject.pageId++;\n\n\t\t\tObject(_render_engine__WEBPACK_IMPORTED_MODULE_0__[\"renderPage\"])(newValue);\n\n\t\t\tobject[property] = newValue;\n\n            return true;\n\n\t\t} else if (property === 'contacts') {\n\n\t\t\tobject[property] = newValue;\n\n\t\t\tif (pristine) {\n\n\t\t\t\tpristine = false;\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tobject.pageId++;\n\n\t\t\t// refresh\n\t\t\tObject(_render_engine__WEBPACK_IMPORTED_MODULE_0__[\"renderPage\"])(object.view);\n\n\t\t\tObject(_local_storage_handler__WEBPACK_IMPORTED_MODULE_1__[\"saveContactsToLocalStorage\"])(newValue);\n\n            return true;\n\n\t\t} else {\n\n\t\t\treturn true;\n\n\t\t}\n\t},\n};\n\nconst proxiedState = new Proxy(state, handler);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proxiedState);\n\n\n//# sourceURL=webpack:///./src/application-state.js?");

/***/ }),

/***/ "./src/contact-model.js":
/*!******************************!*\
  !*** ./src/contact-model.js ***!
  \******************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\nconst contactModel = {\n\n\tupdateContact(newContactData) {\n\n\t\tif (this.latest !== this.current) {\n\n\t\t\t// if we have went back in time, we must stay there when making new changes\n\t\t\tthis.revisions.length = this.revisions.indexOf(this.current) + 1;\n\n\t\t}\n\n\t\tthis.revisions.push(newContactData);\n\n\t\tthis.current = this.latest;\n\n\t},\n\n\tget latest() {\n\n\t\treturn this.revisions[this.count - 1];\n\n\t},\n\n\tget count() {\n\n\t\treturn this.revisions ? this.revisions.length : 0;\n\n\t},\n};\n\nlet idCounter = 1;\n\nfunction createContact(props) {\n\n\tconst contact = Object.create(contactModel);\n\n\t// is a fresh contact\n\tif (props.hasOwnProperty('name')) {\n\n\t\tcontact.revisions = [];\n\n\t\tcontact.revisions.push(props);\n\n\t\tcontact.current = props;\n\n\t} else {\n\n\t\t// we are importing a contact with existing history from localstorage\n\t\tcontact.revisions = props.revisions;\n\n\t\tcontact.current = contact.latest;\n\n\t}\n\n\tcontact.id = idCounter++;\n\n\treturn contact;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/contact-model.js?");

/***/ }),

/***/ "./src/helpers/create-element.js":
/*!***************************************!*\
  !*** ./src/helpers/create-element.js ***!
  \***************************************/
/*! exports provided: createElement, appendNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendNode\", function() { return appendNode; });\n/* harmony import */ var _helpers_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/event-handler */ \"./src/helpers/event-handler.js\");\n\n\nfunction createElement(tag, options) {\n\n\tconst element = document.createElement(tag);\n\n\tif (options) {\n\n\t\tObject.keys(options).forEach(option => {\n\n\t\t\tif (option === 'class') {\n\n\t\t\t\tif (typeof options[option] === 'string') {\n\n\t\t\t\t\telement.className = options[option];\n\n\t\t\t\t} else if (typeof options[option] === 'object') {\n\n\t\t\t\t\telement.className = options[option].join(' ');\n\n\t\t\t\t}\n\n\t\t\t} else if (option === 'handlers') {\n\n\t\t\t\tif (typeof options.id === 'string') {\n\n\t\t\t\t\tObject.keys(options[option]).forEach(event => {\n\n\t\t\t\t\t\tObject(_helpers_event_handler__WEBPACK_IMPORTED_MODULE_0__[\"addEventListener\"])(event, options.id, options.handlers[event]);\n\n\t\t\t\t\t});\n\n\t\t\t\t} else {\n\n\t\t\t\t\tthrow new Error('Use an ID for event handlers!');\n\n\t\t\t\t}\n\n\t\t\t} else {\n\n\t\t\t\telement.setAttribute(option, options[option]);\n\n\t\t\t}\n\n\t\t});\n\n\t}\n\n\treturn element;\n\n}\n\nfunction appendNode(target, tag, options) {\n\n\tconst element = createElement(tag, options);\n\n\ttarget.appendChild(element);\n\n\treturn element;\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/create-element.js?");

/***/ }),

/***/ "./src/helpers/create-text-node.js":
/*!*****************************************!*\
  !*** ./src/helpers/create-text-node.js ***!
  \*****************************************/
/*! exports provided: createNodeWithText, appendNodeWithText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNodeWithText\", function() { return createNodeWithText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendNodeWithText\", function() { return appendNodeWithText; });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ \"./src/helpers/create-element.js\");\n\n\nfunction createNodeWithText(tag, text, options) {\n\n\tconst tagElement = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(tag, options);\n\n\tconst textNode = document.createTextNode(text);\n\n\ttagElement.appendChild(textNode);\n\n\treturn tagElement;\n\n}\n\nfunction appendNodeWithText(target, tag, text, options) {\n\n\tif (typeof text === 'string') {\n\n\t\tconst nodeWithText = createNodeWithText(tag, text, options);\n\n\t\ttarget.appendChild(nodeWithText);\n\n\t} else if (typeof text === 'object') {\n\n\t\ttext.forEach(text => {\n\n\t\t\tappendNodeWithText(target, tag, text, options);\n\n\t\t});\n\n\t\tif (text.length === 0) {\n\n\t\t\tappendNodeWithText(target, tag, 'Saknas', options);\n\n\t\t}\n\n\t}\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/create-text-node.js?");

/***/ }),

/***/ "./src/helpers/event-handler.js":
/*!**************************************!*\
  !*** ./src/helpers/event-handler.js ***!
  \**************************************/
/*! exports provided: addEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListener\", function() { return addEventListener; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\nconst eventListeners = {};\n\nfunction eventHandler(event) {\n\n\tconst { pageId } = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\tObject.keys(eventListeners).forEach(key => {\n\n\t\tif (key === event.type && eventListeners[key][pageId]) {\n\n\t\t\tObject.keys(eventListeners[key][pageId]).forEach(target => {\n\n\t\t\t\tif (event.target.id === target) {\n\n\t\t\t\t\teventListeners[key][pageId][target].forEach(handler => {\n\n\t\t\t\t\t\thandler(event);\n\n\t\t\t\t\t});\n\n\t\t\t\t}\n\n\t\t\t});\n\n\t\t}\n\n\t});\n\n}\n\nfunction addEventListener(event, target, handler) {\n\n\t// we could clean up handlers attached to old pageIds if we cared to\n\tconst { pageId } = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\tif (!eventListeners[event]) {\n\n\t\teventListeners[event] = {};\n\n\t\tdocument.addEventListener(event, eventHandler);\n\n\t}\n\n\teventListeners[event][pageId] = eventListeners[event][pageId] || {};\n\n\teventListeners[event][pageId][target] = eventListeners[event][pageId][target] || [];\n\n\n\teventListeners[event][pageId][target].push(handler);\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/event-handler.js?");

/***/ }),

/***/ "./src/helpers/get-page-from-url.js":
/*!******************************************!*\
  !*** ./src/helpers/get-page-from-url.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render-engine */ \"./src/render-engine.js\");\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\n\nfunction getPageFromUrl() {\n\n    const { pathname } = window.location;\n\n    console.log('stumbled upon', pathname)\n\n    const pagesByUrl = {\n        '/': 'startPage',\n        '/skapa-kontakt': 'newContactPage',\n    }\n\n    if (/redigera-kontakt\\/\\d+/.test(pathname)) {\n\n        const contactId = pathname.match(/\\d+/)[0];\n\n        console.log('found contactId', contactId);\n\n        _application_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].view = `edit-contact-${contactId}`\n\n    } else if (pagesByUrl[pathname]) {\n\n        _application_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].view = pagesByUrl[pathname];\n\n    } else {\n\n        _application_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].view = '404';\n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPageFromUrl);\n\n\n//# sourceURL=webpack:///./src/helpers/get-page-from-url.js?");

/***/ }),

/***/ "./src/helpers/navigation-helper.js":
/*!******************************************!*\
  !*** ./src/helpers/navigation-helper.js ***!
  \******************************************/
/*! exports provided: navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigate\", function() { return navigate; });\nfunction navigate(slug) {\n\n    // set the url\n    window.history.pushState(null, null, slug);\n\n    // dispatch event to let 'router' know that we have navigated\n    // the benefit of this approach is that we can have the same navigation handler\n    // that checks url and renders appropriate page\n    // and it will work the same for back/forward, links, copy-paste url and JS navigation with pushState\n    const event = new PopStateEvent('popstate');\n    dispatchEvent(event);\n}\n\n\n\n//# sourceURL=webpack:///./src/helpers/navigation-helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage-handler */ \"./src/local-storage-handler.js\");\n/* harmony import */ var _helpers_get_page_from_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/get-page-from-url */ \"./src/helpers/get-page-from-url.js\");\n\n\n\nObject(_local_storage_handler__WEBPACK_IMPORTED_MODULE_0__[\"readDataFromLocalStorage\"])();\n\nObject(_helpers_get_page_from_url__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nwindow.addEventListener('popstate', () => Object(_helpers_get_page_from_url__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/local-storage-handler.js":
/*!**************************************!*\
  !*** ./src/local-storage-handler.js ***!
  \**************************************/
/*! exports provided: readDataFromLocalStorage, saveContactsToLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readDataFromLocalStorage\", function() { return readDataFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveContactsToLocalStorage\", function() { return saveContactsToLocalStorage; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-state */ \"./src/application-state.js\");\n/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-model */ \"./src/contact-model.js\");\n\n\n\nconst { localStorage } = window;\n\n\nfunction readDataFromLocalStorage() {\n\n    const contacts = localStorage.getItem('contacts');\n\n    if (contacts) {\n\n        const json = JSON.parse(contacts);\n\n        const contactObjects = json.map(json => Object(_contact_model__WEBPACK_IMPORTED_MODULE_1__[\"createContact\"])(json));\n\n        _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = contactObjects;\n    }\n\n}\n\nfunction saveContactsToLocalStorage(contacts) {\n\n    // ditch all methods\n    const strippedContacts = contacts.map(({ revisions }) => ({ revisions }));\n\n    localStorage.setItem('contacts', JSON.stringify(strippedContacts));\n\n}\n\n\n\n//# sourceURL=webpack:///./src/local-storage-handler.js?");

/***/ }),

/***/ "./src/render-engine.js":
/*!******************************!*\
  !*** ./src/render-engine.js ***!
  \******************************/
/*! exports provided: renderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPage\", function() { return renderPage; });\n/* harmony import */ var _views_start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/start-page */ \"./src/views/start-page.js\");\n/* harmony import */ var _views_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/contact-page */ \"./src/views/contact-page.js\");\n/* harmony import */ var _views_new_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/new-contact-page */ \"./src/views/new-contact-page.js\");\n/* harmony import */ var _views_edit_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/edit-contact-page */ \"./src/views/edit-contact-page.js\");\n/* harmony import */ var _views_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/not-found */ \"./src/views/not-found.js\");\n\n\n\n\n\n\nconst pagesDictionary = {\n\tstartPage: _views_start_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tcontactPage: _views_contact_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tnewContactPage: _views_new_contact_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n\teditContactPage: _views_edit_contact_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n};\n\nconst renderPage = (page) => {\n\n\temptyBody();\n\n\tif (/edit-contact/.test(page)) {\n\n\t\tdocument.body.appendChild(Object(_views_edit_contact_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n\t} else if (pagesDictionary[page]) {\n\n\t\tdocument.body.appendChild(pagesDictionary[page]());\n\n\t} else {\n\n\t\tdocument.body.appendChild(Object(_views_not_found__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n\t}\n\n\n};\n\nconst emptyBody = () => {\n\n\tconst { body } = document;\n\n\twhile (body.hasChildNodes()) {\n\t\tbody.removeChild(body.firstChild);\n\t}\n};\n\n\n\n\n//# sourceURL=webpack:///./src/render-engine.js?");

/***/ }),

/***/ "./src/views/contact-page.js":
/*!***********************************!*\
  !*** ./src/views/contact-page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactPage = () => {\n\n\tconst contactPageContainer = document.createElement('div');\n\n\tcontactPageContainer.className='contact-page';\n\n\tconst nameText = document.createTextNode('Jesus Jansson');\n\n\tconst nameHeading = document.createElement('h1');\n\n\tnameHeading.appendChild(nameText);\n\n\tcontactPageContainer.appendChild(nameHeading);\n\n\treturn contactPageContainer;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactPage);\n\n\n//# sourceURL=webpack:///./src/views/contact-page.js?");

/***/ }),

/***/ "./src/views/edit-contact-page.js":
/*!****************************************!*\
  !*** ./src/views/edit-contact-page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n\n\n\n\nlet idCounter = 1;\n\nconst editContactPage = () => {\n\n    const { pathname } = window.location;\n\n    let id = pathname.match(/\\d+/);\n\n    id = id ? id[0] : null;\n\n    const contact = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.find(contact => contact.id === Number(id));\n\n    console.log('found', contact, 'on id', id, 'from contacts', _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts)\n\n    \n    if (!contact) {\n\n        return document.createTextNode('Den kontakt du söker finns ej');\n\n    } else {\n\n        const { name, numbers, emails } = contact.current;\n\n        const editContactContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(editContactContainer, 'label', 'Namn:', {\n            for: 'edit-contact-name',\n        });\n\n        Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(editContactContainer, 'input', {\n            value: name,\n            id: 'edit-contact-name',\n        });\n\n        const emailsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(editContactContainer, 'div');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(emailsContainer, 'h2', 'E-post:');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(emailsContainer, 'button', '+', {\n            id: 'add-contact-email',\n            handlers: {\n                click: () => addEmailInput(emailsContainer),\n            },\n        });\n\n        emails.forEach((email, index) => {\n\n            const emailRow = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(emailsContainer, 'div');\n\n            Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(emailRow, 'button', 'X', {\n                id: `remove-email-index-${index}`,\n                handlers: {\n                    click: () => emailsContainer.removeChild(emailRow),\n                },\n            });\n\n            Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(emailRow, 'input', {\n                type: 'text',\n                value: email,\n                class: 'contact-email-input',\n            });\n\n        })\n\n        return editContactContainer;\n    }\n}\n\nfunction addEmailInput(emailsContainer) {\n\n\tconst emailRow = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(emailsContainer, 'div');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(emailRow, 'button', 'X', {\n\t\tid: `remove-email-${idCounter++}`,\n\t\thandlers: {\n\t\t\tclick: () => emailsContainer.removeChild(emailRow),\n\t\t},\n\t});\n\n\tconst input = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(emailRow, 'input', {\n\t\ttype: 'text',\n        class: 'contact-email-input',\n        placeholder: 'Skriv e-post...'\n    });\n    \n    input.focus();\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (editContactPage);\n\n//# sourceURL=webpack:///./src/views/edit-contact-page.js?");

/***/ }),

/***/ "./src/views/new-contact-page.js":
/*!***************************************!*\
  !*** ./src/views/new-contact-page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-model */ \"./src/contact-model.js\");\n/* harmony import */ var _actions_add_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/add-contact */ \"./src/actions/add-contact.js\");\n\n\n\n\n\nlet idCounter = 1;\n\nconst newContactPage = () => {\n\n\tconst contactPageContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', { class: 'new-contact-page-container' });\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'h2', 'Skapa kontakt');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'label', 'Namn:', { for: 'contact-name-input' });\n\n\tObject(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactPageContainer, 'input', {\n\t\ttype: 'text',\n\t\tid: 'contact-name-input',\n\t});\n\n\tconst numbersContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactPageContainer, 'div');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'label', 'Nummer:', { for: 'number-input-1' });\n\n\tObject(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(numbersContainer, 'input', {\n\t\ttype: 'text',\n\t\tid: 'contact-number-input-1',\n\t\tclass: 'contact-number-input',\n\t});\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'button', '+', {\n\t\tid: 'add-contact-number',\n\t\thandlers: {\n\t\t\tclick: () => addNumberInput(numbersContainer),\n\t\t},\n\t});\n\n\tconst emailsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactPageContainer, 'div');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'label', 'Epost:', { for: 'email-input-1' });\n\n\tObject(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(emailsContainer, 'input', {\n\t\ttype: 'text',\n\t\tid: 'email-input-1',\n\t\tclass: 'contact-email-input',\n\t});\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'button', '+', {\n\t\tid: 'add-email-button',\n\t\thandlers: {\n\t\t\tclick: () => addEmailInput(emailsContainer),\n\t\t},\n\t});\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'button', 'Skapa Kontakt', {\n\t\tid: 'create-contact-button',\n\t\thandlers: {\n\t\t\tclick: createNewContact,\n\t\t},\n\t});\n\n\treturn contactPageContainer;\n};\n\nfunction addNumberInput(numbersContainer) {\n\n\tconst numberRow = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(numbersContainer, 'div');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numberRow, 'button', 'X', {\n\t\tid: `remove-number-${idCounter++}`,\n\t\thandlers: {\n\t\t\tclick: () => numbersContainer.removeChild(numberRow),\n\t\t},\n\t});\n\n\tObject(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(numberRow, 'input', {\n\t\ttype: 'text',\n\t\tclass: 'contact-number-input',\n\t});\n}\n\nfunction addEmailInput(emailsContainer) {\n\n\tconst emailRow = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(emailsContainer, 'div');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailRow, 'button', 'X', {\n\t\tid: `remove-email-${idCounter++}`,\n\t\thandlers: {\n\t\t\tclick: () => emailsContainer.removeChild(emailRow),\n\t\t},\n\t});\n\n\tObject(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(emailRow, 'input', {\n\t\ttype: 'text',\n\t\tclass: 'contact-email-input',\n\t});\n\n}\n\nfunction createNewContact() {\n\n\tconst name = document.getElementById('contact-name-input') ? document.getElementById('contact-name-input').value : 'missing';\n\n\t// the return value from getElementsByClassName is not an array, but is 'array-like' and can be mapped over like this\n\tconst numbers = Array.prototype.map.call(document.getElementsByClassName('contact-number-input'), element => element ? element.value : 'Missing');\n\n\tconst emails = Array.prototype.map.call(document.getElementsByClassName('contact-email-input'), element => element ? element.value : 'Missing');\n\n\tconst contact = Object(_contact_model__WEBPACK_IMPORTED_MODULE_2__[\"createContact\"])({ name, numbers, emails });\n\n\tObject(_actions_add_contact__WEBPACK_IMPORTED_MODULE_3__[\"addContact\"])(contact);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newContactPage);\n\n\n//# sourceURL=webpack:///./src/views/new-contact-page.js?");

/***/ }),

/***/ "./src/views/not-found.js":
/*!********************************!*\
  !*** ./src/views/not-found.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst notFound = () => {\n\n    return document.createTextNode('404');\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (notFound);\n\n//# sourceURL=webpack:///./src/views/not-found.js?");

/***/ }),

/***/ "./src/views/start-page.js":
/*!*********************************!*\
  !*** ./src/views/start-page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _actions_delete_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/delete-contact */ \"./src/actions/delete-contact.js\");\n/* harmony import */ var _helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/navigation-helper */ \"./src/helpers/navigation-helper.js\");\n \n\n\n\n\n\nfunction getContactsElements() {\n\n\treturn _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.map((contact) => {\n\t\tconst {id, latest: { name, emails, numbers } } = contact;\n\n\t\tconst contactElement = document.createElement('div');\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactElement, 'h2', name);\n\n\t\t// email elements\n\t\tconst emailsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', { class: 'emails-container' });\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'div', 'Email:', { class: 'emails-heading' });\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'div', emails, { class: 'emails-email' });\n\n\t\tcontactElement.appendChild(emailsContainer);\n\n\t\t// numbers elements\n\t\tconst numbersContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', { class: 'numbers-container' });\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'div', 'Nummer:', { class: 'numbers-heading' });\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'div', numbers, { class: 'numbers-number' });\n\n\t\tcontactElement.appendChild(numbersContainer);\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactElement, 'button', 'Redigera', {\n\t\t\tid: `edit-contact-button-${id}`,\n\t\t\thandlers: {\n\t\t\t\tclick: () => Object(_helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_4__[\"navigate\"])(`redigera-kontakt/${id}`),\n\t\t\t},\n\t\t});\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactElement, 'button', 'Ta Bort', {\n\t\t\tid: `delete-contact-button-${id}`,\n\t\t\thandlers: {\n\t\t\t\tclick: () => Object(_actions_delete_contact__WEBPACK_IMPORTED_MODULE_3__[\"deleteContact\"])(id),\n\t\t\t},\n\t\t});\n\n\t\treturn contactElement;\n\n\t});\n}\n\nconst handleCreateNewContactClick = () => {\n\n\tObject(_helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_4__[\"navigate\"])('skapa-kontakt');\n\n};\n\nconst startPage = () => {\n\n\tconst startPageContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', { class: 'start-page' });\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(startPageContainer, 'h1', 'Contacts');\n\n\tconst contactsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', { class: 'start-page' });\n\n\tconst contactsElements = getContactsElements();\n\n\tcontactsElements.forEach(contactElement => {\n\t\tcontactsContainer.appendChild(contactElement);\n\t});\n\n\tstartPageContainer.appendChild(contactsContainer);\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(startPageContainer, 'button', 'Ny kontakt', {\n\t\tid: 'new-contact-button',\n\t\thandlers: { click: handleCreateNewContactClick }\n\t});\n\n\treturn startPageContainer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startPage);\n\n\n//# sourceURL=webpack:///./src/views/start-page.js?");

/***/ })

/******/ });