(function () {
    let devtoolsOpened = false;

    // Set an interval to check for devtools
    const checkDevTools = setInterval(() => {
        // Check if the developer tools are open
        if (window.console && (console.firebug || console.table && /Chrome/.test(navigator.userAgent) || console.debug && /Firefox/.test(navigator.userAgent))) {
            devtoolsOpened = true;
        } else {
            devtoolsOpened = false;
        }

        // Log or take action if devtools are open
        if (devtoolsOpened) {
            console.log("Developer tools are open.");
            // You can perform additional actions here if needed
        } else {
            console.log("Developer tools are closed.");
        }
    }, 1000); // Check every second

    // Optional: Clear the interval after a certain time
    setTimeout(() => clearInterval(checkDevTools), 10000); // Stop checking after 10 seconds
})();
