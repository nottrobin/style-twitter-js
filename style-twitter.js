function styleTwitterWidget(stylesheetUrl, frameId) {
    // Defaults
    frameId = frameId || 'twitter-widget-0';        

    frame = document.getElementById(frameId);
    link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', stylesheetUrl);
    frame.contentDocument.body.appendChild(link);
}

function styleTwitterWidgetWhenReady(stylesheetUrl, frameId) {
    // Defaults
    frameId = frameId || 'twitter-widget-0';

    if (document.getElementById(frameId)) {
        // If the element exists, style it straight away
        styleTwitterWidget(stylesheetUrl, frameId);
    } else if (typeof(MutationObserver) != 'undefined') {
        // If the element doesn't exist yet, but the browser supports MutationObserver
        // Set a mutation observer to try again on mutation

        var styleTwitterObserver = new MutationObserver(function() {
            if (document.getElementById(frameId)) {
                styleTwitterWidget(stylesheetUrl, frameId);
                this.disconnect();
            }
        });
        styleTwitterObserver.observe(document.body, {childList: true});
    } else {
        // If mutation observers aren't available, simply check
        // if the element exists every 100 milliseconds
        var styleTwitterInterval = setInterval(function() {
            if (document.getElementById(frameId)) {
                styleTwitterWidget(stylesheetUrl, frameId);
                clearInterval(styleTwitterInterval)
            }
        }, 100)
    }
}
