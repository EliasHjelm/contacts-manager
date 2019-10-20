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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContact\", function() { return addContact; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/navigation-helper */ \"./src/helpers/navigation-helper.js\");\n\n\n\nfunction addContact(contact) {\n\n    _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = [ ..._application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts, contact ];\n\n    // go back to start page after adding a contact\n    Object(_helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_1__[\"navigate\"])('/');\n\n}\n\n\n\n//# sourceURL=webpack:///./src/actions/add-contact.js?");

/***/ }),

/***/ "./src/actions/delete-contact.js":
/*!***************************************!*\
  !*** ./src/actions/delete-contact.js ***!
  \***************************************/
/*! exports provided: deleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteContact\", function() { return deleteContact; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\nfunction deleteContact(id) {\n\n    _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.filter(contact => contact.id !== id);\n\n}\n\n\n\n//# sourceURL=webpack:///./src/actions/delete-contact.js?");

/***/ }),

/***/ "./src/actions/update-contact.js":
/*!***************************************!*\
  !*** ./src/actions/update-contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\nfunction updateContact(contact, newProps) {\n\n    contact.updateContact(newProps);\n\n    // what is this silly line of code?\n    // since we have new contact info, we must trick the render engine\n    // into rendering the page anew\n    // so we do this assignment to trigger our trap for the setter which will take care of business\n    _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateContact);\n\n//# sourceURL=webpack:///./src/actions/update-contact.js?");

/***/ }),

/***/ "./src/application-state.js":
/*!**********************************!*\
  !*** ./src/application-state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-engine */ \"./src/render-engine.js\");\n/* harmony import */ var _local_storage_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-handler */ \"./src/local-storage-handler.js\");\n\n\n\nconst state = {\n\tview: '',\n\tcontacts: [],\n\tpageId: 1,\n\tsafeContactId: 1,\n};\n\nlet pristine = true;\n\nconst handler = {\n\n\tset: function(state, property, newValue) {\n\n\t\tif (property === 'view' && state[property] !== newValue) {\n\n\t\t\t// give renders different id's so we can associate event listeners with a specific render instance\n\t\t\tstate.pageId++;\n\n\t\t\tObject(_render_engine__WEBPACK_IMPORTED_MODULE_0__[\"renderPage\"])(newValue);\n\n\t\t\tstate[property] = newValue;\n\n\t\t\tpristine = false;\n\n            return true;\n\n\t\t} else if (property === 'contacts') {\n\n\t\t\tstate[property] = newValue;\n\n\t\t\tstate.pageId++;\n\n\t\t\t// refresh\n\t\t\tObject(_render_engine__WEBPACK_IMPORTED_MODULE_0__[\"renderPage\"])(state.view);\n\n\t\t\t// don't trigger re-save on initial reading of contacts from localstorage\n\t\t\tif (pristine) {\n\n\t\t\t\tpristine = false;\n\n\t\t\t} else {\n\n\t\t\t\tObject(_local_storage_handler__WEBPACK_IMPORTED_MODULE_1__[\"saveContactsToLocalStorage\"])(newValue);\n\n\t\t\t}\n\n\t\t\t// to ensure all contacts have unique ids, start at the current max id + 1\n\t\t\tconst safeContactId = newValue.length ? Math.max( ...newValue.map(contact => contact.id )) + 1 : 1;\n\n\t\t\t// update our safe id for smooth contact creation\n\t\t\tstate.safeContactId = safeContactId;\n            return true;\n\n\t\t} else {\n\n\t\t\t// other properties should not be set by any outside force\n\n\t\t\tconsole.warn('Warning! Someone attempted to set property', property, 'to', newValue, 'on application state.');\n\n\t\t\treturn false;\n\n\t\t}\n\t},\n};\n\nconst proxiedState = new Proxy(state, handler);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proxiedState);\n\n\n//# sourceURL=webpack:///./src/application-state.js?");

/***/ }),

/***/ "./src/contact-model.js":
/*!******************************!*\
  !*** ./src/contact-model.js ***!
  \******************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\n/* harmony import */ var _helpers_contact_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/contact-helpers */ \"./src/helpers/contact-helpers.js\");\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-state */ \"./src/application-state.js\");\n\n\n\nconst contactModel = {\n\n\tupdateContact(newContactData) {\n\n\t\tconst diff = Object(_helpers_contact_helpers__WEBPACK_IMPORTED_MODULE_0__[\"generateRevisionDiff\"])(this.current, newContactData);\n\t\t\n\t\tif (diff.equal) {\n\t\t\t\n\t\t\t// if both version were equal, don't update\n\t\t\treturn null;\n\t\t}\n\n\t\tif (this.latest !== this.current) {\n\n\t\t\t// if we have went back in time, we must stay there when making new changes\n\t\t\tthis.revisions.length = this.activeIndex + 1;\n\n\t\t}\n\n\t\tnewContactData.date = Date.now();\n\t\t// generate diff against current version\n\t\tnewContactData.diff = diff\n\n\t\t// add to revisions\n\t\tthis.revisions.push(newContactData);\n\n\t\t// set as active\n\t\tthis.activeIndex = this.count - 1;\n\n\t},\n\n\tget latest() {\n\n\t\treturn this.revisions[this.count - 1];\n\n\t},\n\n\tget current() {\n\n\t\treturn this.revisions[this.activeIndex];\n\n\t},\n\n\tget count() {\n\n\t\treturn this.revisions ? this.revisions.length : 0;\n\n\t}\n};\n\nfunction createContact(props) {\n\n\tconst contact = Object.create(contactModel);\n\n\t// is a fresh contact\n\tif (props.hasOwnProperty('name')) {\n\n\t\tprops.date = Date.now();\n\n\t\tcontact.revisions = [];\n\n\t\tcontact.revisions.push(props);\n\n\t\tcontact.activeIndex = 0;\n\n\t\tcontact.id = _application_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].safeContactId;\n\n\t} else {\n\n\t\t// we are importing a contact with existing history from localstorage\n\n\t\t// convert array of arrays back to map\n\t\tprops.revisions = props.revisions.map(revision => {\n\n\t\t\treturn {\n\t\t\t\t...revision,\n\t\t\t\temails: new Map(revision.emails),\n\t\t\t\tnumbers: new Map(revision.numbers),\n\t\t\t};\n\n\t\t});\n\n\t\tObject.assign(contact, props);\n\n\t}\n\n\n\treturn contact;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/contact-model.js?");

/***/ }),

/***/ "./src/helpers/contact-helpers.js":
/*!****************************************!*\
  !*** ./src/helpers/contact-helpers.js ***!
  \****************************************/
/*! exports provided: renderContactBasicView, generateRevisionDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContactBasicView\", function() { return renderContactBasicView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRevisionDiff\", function() { return generateRevisionDiff; });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-text-node */ \"./src/helpers/create-text-node.js\");\n\n\n\nfunction renderContactBasicView(revision, showDate, showDiff, versionNumber, isActive) {\n\n    const { name, emails, numbers, date, diff } = revision;\n\n    const contactContainer = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', {\n        class: 'contact-container',\n    });\n\n    let numberString = '', activeString = '';\n\n    if (typeof versionNumber === 'number') {\n\n        numberString = 'v' + (versionNumber + 1) + ' ';\n\n    }\n\n    if (isActive) {\n\n        activeString = ' (Aktiv)';\n\n    }\n\n    Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactContainer, 'h3', numberString + name + activeString, {\n        class: ['contact-name', (showDiff && diff && diff.name) ? 'diff-changed' : null],\n    });\n\n    if (showDate) {\n\n        Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactContainer, 'p', new Date(date).toLocaleString('se-SE', {\n            hour12: false,\n        }).slice(0, -3));\n\n    }\n\n    Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactContainer, 'h4', 'E-post:');\n\n    const emailsContainer = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactContainer, 'ul');\n\n    for (let [id, email] of emails) {\n\n        let diffStatus;\n\n        if (diff && showDiff) {\n\n            diffStatus = diff.emails[id];\n\n        }\n\n        const className = diffStatus ? `diff-${diffStatus}` : '';\n\n        Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'li', email, {\n            'data-id': id,\n            class: className,\n        });\n\n    }\n\n    if (showDiff && diff && diff.emails.removed.length) {\n\n        diff.emails.removed.forEach(removedEmail => {\n\n            Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'li', removedEmail, {\n                class: 'diff-removed',\n            });\n\n        });\n\n    }\n\n    Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactContainer, 'h4', 'Nummer:');\n\n    const numbersContainer = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactContainer, 'ul');\n\n    for (let [id, number] of numbers) {\n\n        let diffStatus;\n\n        if (diff && showDiff) {\n\n            diffStatus = diff.numbers[id];\n\n        }\n\n        const className = diffStatus ? `diff-${diffStatus}` : '';\n\n        Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'li', number, {\n            'data-id': id,\n            class: className,\n        });\n\n    }\n\n    if (showDiff && diff && diff.numbers.removed.length) {\n\n        diff.numbers.removed.forEach(removedNumber => {\n\n            Object(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'li', removedNumber, {\n                class: 'diff-removed',\n            });\n\n        });\n\n    }\n\n    return contactContainer;\n\n}\n\nfunction generateRevisionDiff(older, newer) {\n\n    const diff = {\n        name: older.name !== newer.name,\n        emails: generateMapDiff(older.emails, newer.emails),\n        numbers: generateMapDiff(older.numbers, newer.numbers),\n    };\n    \n    // for convenience we store here a boolean indiciating if anything is different at all\n    diff.equal = !diff.name\n        && diff.emails.removed.length === 0\n        && Object.keys(diff.emails).length === 1\n        && diff.numbers.removed.length === 0\n        && Object.keys(diff.numbers).length === 1\n\n    return diff;\n\n}\n\nfunction generateMapDiff(older, newer) {\n\n    // save changed and added with id as key, because they will be in the new map\n    // removed won't be in the new, so discard their id and just save the values\n    const diff = { removed: [] };\n\n    // for each value in the newer, flag if it was changed or added\n    newer.forEach((value, key) => {\n\n        if (!older.has(key)) {\n\n            diff[key] = 'added';\n\n        } else if (older.get(key) !== value) {\n\n            diff[key] = 'changed';\n\n        }\n\n    });\n\n    // for each value in the older, flag if it no longer exists in newer\n    older.forEach((value, key) => {\n\n        if (!newer.has(key)) {\n\n            diff.removed.push(value);\n\n        }\n\n    });\n\n    return diff;\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/helpers/contact-helpers.js?");

/***/ }),

/***/ "./src/helpers/create-element.js":
/*!***************************************!*\
  !*** ./src/helpers/create-element.js ***!
  \***************************************/
/*! exports provided: createElement, appendNode, prependNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendNode\", function() { return appendNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prependNode\", function() { return prependNode; });\n/* harmony import */ var _helpers_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/event-handler */ \"./src/helpers/event-handler.js\");\n\n\nfunction createElement(tag, options) {\n\n\tconst element = document.createElement(tag);\n\n\tif (options) {\n\n\t\tObject.keys(options).forEach(option => {\n\n\t\t\t// special treatment for class ...\n\t\t\tif (option === 'class') {\n\n\t\t\t\tif (typeof options[option] === 'string') {\n\n\t\t\t\t\telement.className = options[option];\n\n\t\t\t\t} else if (typeof options[option] === 'object') {\n\n\t\t\t\t\telement.className = options[option].filter(className => typeof className === 'string').join(' ');\n\n\t\t\t\t}\n\n\t\t\t\t// ... and event handlers ...\n\t\t\t} else if (option === 'handlers') {\n\n\t\t\t\t// first check that a valid id was supplied \n\t\t\t\tif (typeof options.id === 'string' && options.id.length > 0) {\n\n\t\t\t\t\t// handlers should be an object where keys and events and properties are handler functions\n\t\t\t\t\tObject.keys(options[option]).forEach(event => {\n\n\t\t\t\t\t\tObject(_helpers_event_handler__WEBPACK_IMPORTED_MODULE_0__[\"addEventListener\"])(event, options.id, options.handlers[event]);\n\n\t\t\t\t\t});\n\n\t\t\t\t} else {\n\n\t\t\t\t\tthrow new Error('Supply a valid ID when attaching event handlers to an element!');\n\n\t\t\t\t}\n\n\t\t\t\t// ... other attributes just set without questioning\n\t\t\t} else {\n\n\t\t\t\telement.setAttribute(option, options[option]);\n\n\t\t\t}\n\n\t\t});\n\n\t}\n\n\treturn element;\n\n}\n\nfunction appendNode(target, tag, options) {\n\n\tconst element = createElement(tag, options);\n\n\ttarget.appendChild(element);\n\n\treturn element;\n\n}\n\nfunction prependNode(target, tag, options) {\n\n\tconst element = createElement(tag, options);\n\n\ttarget.prepend(element);\n\n\treturn element;\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/create-element.js?");

/***/ }),

/***/ "./src/helpers/create-text-node.js":
/*!*****************************************!*\
  !*** ./src/helpers/create-text-node.js ***!
  \*****************************************/
/*! exports provided: createNodeWithText, appendNodeWithText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNodeWithText\", function() { return createNodeWithText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendNodeWithText\", function() { return appendNodeWithText; });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ \"./src/helpers/create-element.js\");\n\n\nfunction createNodeWithText(tag, text, options) {\n\n\tconst tagElement = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(tag, options);\n\n\tconst textNode = document.createTextNode(text);\n\n\ttagElement.appendChild(textNode);\n\n\treturn tagElement;\n\n}\n\nfunction appendNodeWithText(target, tag, text, options) {\n\n\tif (typeof text === 'string') {\n\n\t\tconst nodeWithText = createNodeWithText(tag, text, options);\n\n\t\ttarget.appendChild(nodeWithText);\n\n\t\treturn nodeWithText;\n\n\t} else if (typeof text === 'object') {\n\n\t\tconst nodes = [];\n\n\t\ttext.forEach(text => {\n\n\t\t\tconst node = appendNodeWithText(target, tag, text, options);\n\n\t\t\tnodes.push(node);\n\n\t\t});\n\n\t\treturn nodes;\n\n\t}\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/create-text-node.js?");

/***/ }),

/***/ "./src/helpers/event-handler.js":
/*!**************************************!*\
  !*** ./src/helpers/event-handler.js ***!
  \**************************************/
/*! exports provided: addEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListener\", function() { return addEventListener; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\nconst eventListeners = {};\n\nfunction eventHandler(event) {\n\n\tconst { pageId } = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\t// loop through all registered event types...\n\tObject.keys(eventListeners).forEach(key => {\n\n\t\t// ... to check for a match in event type and page id...\n\t\tif (key === event.type && eventListeners[key][pageId]) {\n\n\t\t\t// ... then check all targets ...\n\t\t\tObject.keys(eventListeners[key][pageId]).forEach(target => {\n\n\t\t\t\tconst targetElement = document.getElementById(target);\n\n\t\t\t\t// ... to see if the event target === listener target, or the listener target contains the event target...\n\t\t\t\tif ((event.target.id === target) || (targetElement && targetElement.contains(event.target))) {\n\n\t\t\t\t\t// ... if so, for each registered handler ...\n\t\t\t\t\teventListeners[key][pageId][target].forEach(handler => {\n\n\t\t\t\t\t\t// ... pass it the event and execute\n\t\t\t\t\t\thandler(event);\n\n\t\t\t\t\t});\n\n\t\t\t\t}\n\n\t\t\t});\n\n\t\t}\n\n\t});\n\n}\n\nfunction addEventListener(event, target, handler) {\n\n\tconst { pageId } = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\t// make sure we are listening for the actual event\n\tif (!eventListeners[event]) {\n\n\t\teventListeners[event] = {};\n\n\t\tdocument.addEventListener(event, eventHandler);\n\n\t}\n\n\t// make associate the handler with a pageid and a target\n\teventListeners[event][pageId] = eventListeners[event][pageId] || {};\n\n\teventListeners[event][pageId][target] = eventListeners[event][pageId][target] || [];\n\n\n\teventListeners[event][pageId][target].push(handler);\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/event-handler.js?");

/***/ }),

/***/ "./src/helpers/get-page-from-url.js":
/*!******************************************!*\
  !*** ./src/helpers/get-page-from-url.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n\n\nfunction getPageFromUrl() {\n\n    const { pathname } = window.location;\n\n    const pagesByUrl = {\n        '/': 'startPage',\n        '/skapa-kontakt': 'newContactPage',\n    }\n\n    if (/redigera-kontakt\\/\\d+/.test(pathname)) {\n\n        // get the contact id from url\n        const contactId = pathname.match(/\\d+/)[0];\n\n        _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].view = `edit-contact-${contactId}`\n\n    } else if (pagesByUrl[pathname]) {\n\n        _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].view = pagesByUrl[pathname];\n\n    } else {\n\n        _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].view = '404';\n\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPageFromUrl);\n\n\n//# sourceURL=webpack:///./src/helpers/get-page-from-url.js?");

/***/ }),

/***/ "./src/helpers/input-helpers.js":
/*!**************************************!*\
  !*** ./src/helpers/input-helpers.js ***!
  \**************************************/
/*! exports provided: appendInputGroup, readFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendInputGroup\", function() { return appendInputGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readFormData\", function() { return readFormData; });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-text-node */ \"./src/helpers/create-text-node.js\");\n\n\n\nlet idCounter = 1;\n\nfunction appendInputGroup(target, type, value, dataId, reference) {\n\n    const row = document.createElement('div');\n\n    // use event.target as reference when adding more email/number fields\n    // (if reference is null it will be inserted last like a regular appendChild)\n    target.insertBefore(row, reference);\n\n\tObject(_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(row, 'button', 'X', {\n        id: `remove-${type}-${idCounter++}`,\n        class: [ 'button-red', 'button-small' ],\n        type: 'button',\n\t\thandlers: {\n\t\t\tclick: () => target.removeChild(row),\n        },\n\t});\n\n\tconst input = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(row, 'input', {\n\t\ttype: type === 'email' ? 'email' : 'tel',\n        class: ['text-input', `contact-${type}-input`],\n        required: true,\n        minlength: 5,\n        maxlength: 40,\n    });\n\n    if (value !== undefined && value !== null) {\n\n        input.setAttribute('value', value);\n\n    }\n\n    if (dataId) {\n\n        input.setAttribute('data-id', dataId);\n\n    }\n\n    input.focus();\n\n}\n\nfunction readFormData() {\n\n    const name = document.getElementById('contact-name-input') ? document.getElementById('contact-name-input').value : null;\n\n    const numbers = getIdAndValueFromDom('contact-number-input');\n\n    const emails = getIdAndValueFromDom('contact-email-input');\n\n    return { name, numbers, emails };\n\n}\n\nfunction getIdAndValueFromDom(className) {\n\n    // the return value from getElementsByClassName is not an array, but is 'array-like' and can be mapped over like this\n    const values = Array.prototype.map.call(document.getElementsByClassName(className), element => {\n\n        const value = element ? element.value : null;\n\n        const id = element ? element.getAttribute('data-id') : null;\n\n        // return array with id and value so we can create a juicy map\n        return [ id, value ];\n\n    })\n        // filter out falsy values\n        .filter(value => Boolean(value[1]));\n\n    // does not really need to be a juicy map, could have been a plain object, but I wanted to try working with a map\n    // and it is more convenient to iterate over a map with the .forEach, than it is iterate over an object\n    return new Map(values);\n}\n\n\n\n//# sourceURL=webpack:///./src/helpers/input-helpers.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage-handler */ \"./src/local-storage-handler.js\");\n/* harmony import */ var _helpers_get_page_from_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/get-page-from-url */ \"./src/helpers/get-page-from-url.js\");\n\n\n\n// check if there is any data saved in local storage\nObject(_local_storage_handler__WEBPACK_IMPORTED_MODULE_0__[\"readDataFromLocalStorage\"])();\n\n// read the url query string and render the appropriate page\nObject(_helpers_get_page_from_url__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// listen for navigation\nwindow.addEventListener('popstate', () => Object(_helpers_get_page_from_url__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/local-storage-handler.js":
/*!**************************************!*\
  !*** ./src/local-storage-handler.js ***!
  \**************************************/
/*! exports provided: readDataFromLocalStorage, saveContactsToLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readDataFromLocalStorage\", function() { return readDataFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveContactsToLocalStorage\", function() { return saveContactsToLocalStorage; });\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-state */ \"./src/application-state.js\");\n/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-model */ \"./src/contact-model.js\");\n\n\n\nconst { localStorage } = window;\n\n\nfunction readDataFromLocalStorage() {\n\n    const contacts = localStorage.getItem('contacts');\n\n    if (contacts) {\n\n        const parsedContacts = JSON.parse(contacts);\n\n        const contactObjects = parsedContacts.map(contact => Object(_contact_model__WEBPACK_IMPORTED_MODULE_1__[\"createContact\"])(contact));\n\n        _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = contactObjects;\n\n    }\n\n}\n\nfunction saveContactsToLocalStorage(contacts) {\n\n    // ditch all methods, convert maps to array of arrays before stringifying\n    const strippedContacts = contacts.map(({ revisions, activeIndex, id }) => ({\n        activeIndex,\n        id,\n        revisions: revisions.map(revision => {\n            return {\n                date: revision.date,\n                name: revision.name,\n                diff: revision.diff,\n                emails: Array.from(revision.emails),\n                numbers: Array.from(revision.numbers),\n            }\n        }),\n    }));\n\n    localStorage.setItem('contacts', JSON.stringify(strippedContacts));\n\n}\n\n\n\n//# sourceURL=webpack:///./src/local-storage-handler.js?");

/***/ }),

/***/ "./src/render-engine.js":
/*!******************************!*\
  !*** ./src/render-engine.js ***!
  \******************************/
/*! exports provided: renderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPage\", function() { return renderPage; });\n/* harmony import */ var _views_start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/start-page */ \"./src/views/start-page.js\");\n/* harmony import */ var _views_new_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/new-contact-page */ \"./src/views/new-contact-page.js\");\n/* harmony import */ var _views_edit_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/edit-contact-page */ \"./src/views/edit-contact-page.js\");\n/* harmony import */ var _views_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/not-found */ \"./src/views/not-found.js\");\n\n\n\n\n\nconst pagesDictionary = {\n\tstartPage: _views_start_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\tnewContactPage: _views_new_contact_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\teditContactPage: _views_edit_contact_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n};\n\nconst renderPage = (page) => {\n\n\temptyBody();\n\n\tif (/edit-contact/.test(page)) {\n\n\t\tdocument.body.appendChild(Object(_views_edit_contact_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n\t} else if (pagesDictionary[page]) {\n\n\t\tdocument.body.appendChild(pagesDictionary[page]());\n\n\t} else {\n\n\t\tdocument.body.appendChild(Object(_views_not_found__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n\t}\n\n\n};\n\nconst emptyBody = () => {\n\n\tconst { body } = document;\n\n\twhile (body.hasChildNodes()) {\n\t\tbody.removeChild(body.firstChild);\n\t}\n};\n\n\n\n\n//# sourceURL=webpack:///./src/render-engine.js?");

/***/ }),

/***/ "./src/views/edit-contact-page.js":
/*!****************************************!*\
  !*** ./src/views/edit-contact-page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n/* harmony import */ var _helpers_input_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/input-helpers */ \"./src/helpers/input-helpers.js\");\n/* harmony import */ var _actions_update_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/update-contact */ \"./src/actions/update-contact.js\");\n/* harmony import */ var _helpers_contact_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/contact-helpers */ \"./src/helpers/contact-helpers.js\");\n\n\n\n\n\n\n\n// ------ \"TEMPLATE\" --------\nconst editContactPage = () => {\n\n    const { pathname } = window.location;\n\n    let id = pathname.match(/\\d+/);\n\n    id = id ? id[0] : null;\n\n    const contact = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.find(contact => contact.id === Number(id));\n\n    if (!contact) {\n\n        return document.createTextNode('Den kontakt du söker finns ej');\n\n    } else {\n\n        const { name, numbers, emails } = contact.current;\n\n        const editContactForm = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('form');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(editContactForm, 'a', 'Tillbaka', {\n            href: '/',\n            className: 'back-link',\n            id: 'back-link',\n            handlers: {\n                click: (event) => {\n                    event.preventDefault();\n                    window.history.back();\n                },\n            },\n        });\n\n        editContactForm.onsubmit = (event) => {\n            event.preventDefault();\n            readAndUpdateContact(contact);\n        };\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(editContactForm, 'h1', 'Redigera kontakt');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(editContactForm, 'h3', 'Namn:', {\n            for: 'contact-name-input',\n        });\n\n        Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(editContactForm, 'input', {\n            value: name,\n            type: 'text',\n            id: 'contact-name-input',\n            required: true,\n            minlength: 1,\n            maxlength: 30,\n        });\n\n        // edit emails\n        const emailsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(editContactForm, 'div');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(emailsContainer, 'h3', 'E-post:');\n\n        let safeEmailId = emails.size ? Math.max( ...emails.keys() ) + 1 : 1;\n\n        for (let [id, email] of emails) {\n\n            Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_3__[\"appendInputGroup\"])(emailsContainer, 'email', email, id);\n\n        }\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(emailsContainer, 'button', '+', {\n            id: 'add-contact-email',\n            type: 'button',\n            class: [ 'button-green', 'button-small' ],\n            handlers: {\n                click: event => Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_3__[\"appendInputGroup\"])(emailsContainer, 'email', null, safeEmailId++, event.target),\n            },\n        });\n\n\n        // edit numbers\n        const numbersContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(editContactForm, 'div');\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(numbersContainer, 'h3', 'Nummer:');\n\n        let safeNumberId = numbers.size ? Math.max( ...numbers.keys() ) + 1 : 1;\n\n        for (let [id, number] of numbers) {\n\n            Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_3__[\"appendInputGroup\"])(numbersContainer, 'number', number, id);\n\n        }\n\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(numbersContainer, 'button', '+', {\n            id: 'add-contact-numer',\n            class: [ 'button-green', 'button-small' ],\n            type: 'button',\n            handlers: {\n                click: event => Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_3__[\"appendInputGroup\"])(numbersContainer, 'number', null, safeNumberId++, event.target),\n            },\n        });\n\n        // save changes button\n        Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(editContactForm, 'button', 'Spara ändringar', {\n            id: 'update-contact-button',\n            class: [ 'button-green', 'big-button' ],\n        });\n\n        // render contact history\n        editContactForm.appendChild(getContactHistory(contact));\n\n        return editContactForm;\n\n    }\n}\n\n\n\n// ----------- HELPER FUNCTIONS -------------------------\n\nfunction readAndUpdateContact(contact) {\n\n    const newContact = Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_3__[\"readFormData\"])();\n\n    Object(_actions_update_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(contact, newContact);\n\n}\n\nfunction getContactHistory(contact) {\n\n    const contactHistoryContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div');\n\n    Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_2__[\"appendNodeWithText\"])(contactHistoryContainer, 'h2', 'Historik:');\n\n    const contactHistoryWrapper = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"appendNode\"])(contactHistoryContainer, 'div');\n\n    contact.revisions.forEach((revision, index) => prependRevision(contactHistoryWrapper, revision, contact, index));\n\n    return contactHistoryContainer;\n\n}\n\nfunction prependRevision(target, revision, contact, index) {\n\n    let className = 'revision-container';\n\n    const isActive = revision === contact.current;\n\n    if (isActive) {\n\n        className = ['revision-container', 'revision-container-active'];\n\n    }\n\n    const revisionContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__[\"prependNode\"])(target, 'div', {\n        class: className,\n        id: `revision-container-${index}`,\n        handlers: {\n            click: () => {\n                contact.activeIndex = index;\n                _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts = _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts;\n            },\n        },\n    });\n\n    const contactElement = Object(_helpers_contact_helpers__WEBPACK_IMPORTED_MODULE_5__[\"renderContactBasicView\"])(revision, true, true, index, isActive);\n\n    revisionContainer.appendChild(contactElement);\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (editContactPage);\n\n//# sourceURL=webpack:///./src/views/edit-contact-page.js?");

/***/ }),

/***/ "./src/views/new-contact-page.js":
/*!***************************************!*\
  !*** ./src/views/new-contact-page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-model */ \"./src/contact-model.js\");\n/* harmony import */ var _actions_add_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/add-contact */ \"./src/actions/add-contact.js\");\n/* harmony import */ var _helpers_input_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/input-helpers */ \"./src/helpers/input-helpers.js\");\n\n\n\n\n\n\nconst newContactPage = () => {\n\n\tlet idCounter = 1;\n\n\tconst contactPageContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('form', { class: 'new-contact-page-container' });\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'a', 'Tillbaka', {\n\t\thref: '/',\n\t\tclassName: 'back-link',\n\t\tid: 'back-link',\n\t\thandlers: {\n\t\t\tclick: (event) => {\n\t\t\t\tevent.preventDefault();\n\t\t\t\twindow.history.back();\n\t\t\t},\n\t\t},\n\t});\n\n\tcontactPageContainer.onsubmit = createNewContact;\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'h2', 'Skapa kontakt');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'label', 'Namn:', { for: 'contact-name-input' });\n\n\tObject(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactPageContainer, 'input', {\n\t\ttype: 'text',\n\t\tid: 'contact-name-input',\n\t\trequired: true,\n\t});\n\n\t\n\tconst emailsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactPageContainer, 'div');\n\t\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'label', 'Epost:');\n\t\n\tObject(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_4__[\"appendInputGroup\"])(emailsContainer, 'email', null, idCounter++, null);\n\t\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(emailsContainer, 'button', '+', {\n\t\tid: 'add-email-button',\n\t\ttype: 'button',\n\t\tclass: [ 'button-green', 'button-small' ],\n\t\thandlers: {\n\t\t\tclick: event => Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_4__[\"appendInputGroup\"])(emailsContainer, 'email', null, idCounter++, event.target),\n\t\t},\n\t});\n\n\tconst numbersContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__[\"appendNode\"])(contactPageContainer, 'div');\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'label', 'Nummer:');\n\n\tObject(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_4__[\"appendInputGroup\"])(numbersContainer, 'number', null, idCounter++, null);\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(numbersContainer, 'button', '+', {\n\t\tid: 'add-contact-number',\n\t\ttype: 'button',\n\t\tclass: [ 'button-green', 'button-small' ],\n\t\thandlers: {\n\t\t\tclick: event => Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_4__[\"appendInputGroup\"])(numbersContainer, 'number', null, idCounter++, event.target),\n\t\t},\n\t});\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactPageContainer, 'button', 'Skapa Kontakt', {\n\t\tid: 'create-contact-button',\n\t\tclass: [ 'big-button', 'button-green' ],\n\t});\n\n\treturn contactPageContainer;\n};\n\nfunction createNewContact(event) {\n\n\tevent.preventDefault();\n\n\tconst newContact = Object(_helpers_input_helpers__WEBPACK_IMPORTED_MODULE_4__[\"readFormData\"])();\n\n\tconst contact = Object(_contact_model__WEBPACK_IMPORTED_MODULE_2__[\"createContact\"])(newContact);\n\n\tObject(_actions_add_contact__WEBPACK_IMPORTED_MODULE_3__[\"addContact\"])(contact);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newContactPage);\n\n//# sourceURL=webpack:///./src/views/new-contact-page.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/create-element */ \"./src/helpers/create-element.js\");\n/* harmony import */ var _actions_delete_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/delete-contact */ \"./src/actions/delete-contact.js\");\n/* harmony import */ var _helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/navigation-helper */ \"./src/helpers/navigation-helper.js\");\n/* harmony import */ var _helpers_contact_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/contact-helpers */ \"./src/helpers/contact-helpers.js\");\n \n\n\n\n\n\n\nfunction getContactsElements() {\n\n\treturn _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.map((contact) => {\n\t\tconst {id, current } = contact;\n\n\t\tconst contactElement = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', {\n\t\t\tclass: 'start-page-contact-container'\n\t\t});\n\n\t\tcontactElement.appendChild(Object(_helpers_contact_helpers__WEBPACK_IMPORTED_MODULE_5__[\"renderContactBasicView\"])(current, false, false));\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactElement, 'button', 'Redigera', {\n\t\t\tclass: [ 'button-medium', 'button-orange' ],\n\t\t\tid: `edit-contact-button-${id}`,\n\t\t\thandlers: {\n\t\t\t\tclick: () => Object(_helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_4__[\"navigate\"])(`redigera-kontakt/${id}`),\n\t\t\t},\n\t\t});\n\n\t\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(contactElement, 'button', 'Ta Bort', {\n\t\t\tid: `delete-contact-button-${id}`,\n\t\t\tclass: [ 'button-medium', 'button-red' ],\n\t\t\thandlers: {\n\t\t\t\tclick: () => Object(_actions_delete_contact__WEBPACK_IMPORTED_MODULE_3__[\"deleteContact\"])(id),\n\t\t\t},\n\t\t});\n\n\t\treturn contactElement;\n\n\t});\n}\n\nconst handleCreateNewContactClick = () => {\n\n\tObject(_helpers_navigation_helper__WEBPACK_IMPORTED_MODULE_4__[\"navigate\"])('skapa-kontakt');\n\n};\n\nconst startPage = () => {\n\n\tconst startPageContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', { class: 'start-page' });\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(startPageContainer, 'h1', 'Kontakter');\n\n\tconst contactsContainer = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('div', { class: 'start-page' });\n\n\tconst contactsElements = getContactsElements();\n\n\tcontactsElements.forEach(contactElement => {\n\t\tcontactsContainer.appendChild(contactElement);\n\t});\n\n\tstartPageContainer.appendChild(contactsContainer);\n\n\tObject(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"appendNodeWithText\"])(startPageContainer, 'button', 'Ny kontakt', {\n\t\tid: 'new-contact-button',\n\t\tclass: [ 'big-button', 'button-green' ],\n\t\thandlers: { click: handleCreateNewContactClick }\n\t});\n\n\treturn startPageContainer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startPage);\n\n\n//# sourceURL=webpack:///./src/views/start-page.js?");

/***/ })

/******/ });