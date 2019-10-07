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

/***/ "./src/application-state.js":
/*!**********************************!*\
  !*** ./src/application-state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-engine */ \"./src/render-engine.js\");\n/* harmony import */ var _views_start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/start-page */ \"./src/views/start-page.js\");\n/* harmony import */ var _views_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/contact-page */ \"./src/views/contact-page.js\");\n/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-model */ \"./src/contact-model.js\");\n\n\n\n\n\nconst pagesDictionary = {\n\tstartPage: _views_start_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\tcontactPage: _views_contact_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n};\n\nconst fakeContact = {\n\tname: 'Leffe',\n\temails: ['don_leffe@hotmail.se'],\n\tnumber: ['0701485999'],\n};\n\nconst state = {\n\tview: 'startPage',\n\tcontacts: [Object(_contact_model__WEBPACK_IMPORTED_MODULE_3__[\"createContact\"])(fakeContact)],\n};\n\nconst handler = {\n\tset: function(object, property, newValue) {\n\t\tif (property === 'view' && object[property] !== newValue) {\n\t\t\tObject(_render_engine__WEBPACK_IMPORTED_MODULE_0__[\"renderPage\"])(pagesDictionary[newValue]());\n\n\t\t\tobject[property] = newValue;\n\t\t}\n\t},\n};\n\t\t\nconst proxiedState = new Proxy(state, handler);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proxiedState);\n\n\n//# sourceURL=webpack:///./src/application-state.js?");

/***/ }),

/***/ "./src/contact-model.js":
/*!******************************!*\
  !*** ./src/contact-model.js ***!
  \******************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\nconst contactModel = {};\n\nfunction createContact(props) {\n\n\tconst contact = Object.create(contactModel);\n\n\tObject.assign(contact, props);\n\n\tconsole.log('creating', contact);\n\n\treturn contact;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/contact-model.js?");

/***/ }),

/***/ "./src/helpers/create-text-node.js":
/*!*****************************************!*\
  !*** ./src/helpers/create-text-node.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createNodeWithText(tag, text) {\n\n\tconst tagElement = document.createElement(tag);\n\n\tconst textNode = document.createTextNode(text);\n\n\ttagElement.appendChild(textNode);\n\n\treturn tagElement;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createNodeWithText);\n\n\n//# sourceURL=webpack:///./src/helpers/create-text-node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-engine */ \"./src/render-engine.js\");\n/* harmony import */ var _views_start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/start-page */ \"./src/views/start-page.js\");\n/* harmony import */ var _views_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/contact-page */ \"./src/views/contact-page.js\");\nconst applicationState = __webpack_require__(/*! ./application-state */ \"./src/application-state.js\");\n\n\n\n\nObject(_render_engine__WEBPACK_IMPORTED_MODULE_0__[\"renderPage\"])(Object(_views_start_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render-engine.js":
/*!******************************!*\
  !*** ./src/render-engine.js ***!
  \******************************/
/*! exports provided: renderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPage\", function() { return renderPage; });\nconst renderPage = (page) => {\n\temptyBody();\n\tdocument.body.appendChild(page);\n};\n\nconst emptyBody = () => {\n\n\tconst { body } = document;\n\n\twhile (body.hasChildNodes()) {\n\t\tconsole.log('removing once');\n\t\tbody.removeChild(body.firstChild);\n\t}\n};\n\n\n\n\n//# sourceURL=webpack:///./src/render-engine.js?");

/***/ }),

/***/ "./src/views/contact-page.js":
/*!***********************************!*\
  !*** ./src/views/contact-page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactPage = (props) => {\n\n\tconst contactPageContainer = document.createElement('div');\n\n\tcontactPageContainer.className='contact-page';\n\n\tconst nameText = document.createTextNode('Jesus Jansson');\n\n\tconst nameHeading = document.createElement('h1');\n\n\tnameHeading.appendChild(nameText);\n\n\tcontactPageContainer.appendChild(nameHeading);\n\n\treturn contactPageContainer;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactPage);\n\n\n//# sourceURL=webpack:///./src/views/contact-page.js?");

/***/ }),

/***/ "./src/views/start-page.js":
/*!*********************************!*\
  !*** ./src/views/start-page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application-state */ \"./src/application-state.js\");\n/* harmony import */ var _helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-text-node */ \"./src/helpers/create-text-node.js\");\n \n\n\nfunction getContactsElements() {\n\t\n\tconsole.log('state', _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\treturn _application_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contacts.map(({name, emails, number}) => {\n\n\t\tconst contactElement = document.createElement('div');\n\n\t\tconst heading = Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h2', name);\n\n\t\tcontactElement.appendChild(heading);\n\n\t\treturn contactElement;\n\n\t});\n}\n\nconst startPage = (props) => {\n\n\tconst startPageContainer = document.createElement('div');\n\n\tstartPageContainer.className = \"start-page\";\n\n\tconst headingText = Object(_helpers_create_text_node__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', 'Contacts');\n\n\tstartPageContainer.appendChild(headingText);\n\n\tconst contactsContainer = document.createElement('div');\n\n\tcontactsContainer.className = 'contacts-container';\n\n\tconst contactsElements = getContactsElements();\n\n\tcontactsElements.forEach(contactElement => {\n\t\tcontactsContainer.appendChild(contactElement);\n\t});\n\n\tstartPageContainer.appendChild(contactsContainer);\n\n\treturn startPageContainer;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startPage);\n\n\n//# sourceURL=webpack:///./src/views/start-page.js?");

/***/ })

/******/ });