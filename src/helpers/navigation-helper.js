function navigate(slug) {

    // set the url
    window.history.pushState(null, null, slug);

    // dispatch event to let 'router' know that we have navigated
    const event = new PopStateEvent('popstate');
    dispatchEvent(event);
}

export { navigate };