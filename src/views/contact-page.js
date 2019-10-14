const contactPage = () => {

	const contactPageContainer = document.createElement('div');

	contactPageContainer.className='contact-page';

	const nameText = document.createTextNode('Jesus Jansson');

	const nameHeading = document.createElement('h1');

	nameHeading.appendChild(nameText);

	contactPageContainer.appendChild(nameHeading);

	return contactPageContainer;

}

export default contactPage;
