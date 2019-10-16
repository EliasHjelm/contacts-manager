function navigate(slug) {

    // set the url
    window.history.pushState(null, null, slug);

    // dispatch event to let 'router' know that we have navigated
    // the benefit of this approach is that we can have the same navigation handler
    // that checks url and renders appropriate page
    // and it will work the same for back/forward, links, copy-paste url and JS navigation with pushState
    const event = new PopStateEvent('popstate');
    dispatchEvent(event);
}

export { navigate };