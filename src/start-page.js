const startPage = (props) => {

	const startPageContainer = document.createElement('div');

	startPageContainer.className = "start-page";

	const headingText = document.createTextNode('Contacts');

	const mainHeading = document.createElement('h1');

	mainHeading.appendChild(headingText);

	startPageContainer.appendChild(mainHeading);

	return startPageContainer;
}

export default startPage;
