import './components/app-shell.js';

// Get the base path dynamically from current location
function getBasePath() {
    const path = window.location.pathname;

    // If we're at root or just have a filename, return root
    if (path === '/' || path.match(/^\/[^\/]*\.(html)$/)) {
        return '/';
    }

    // Extract directory path - everything up to the last directory
    const segments = path.split('/').filter(Boolean);

    // Remove filename if present (has extension)
    if (segments.length > 0 && segments[segments.length - 1].includes('.')) {
        segments.pop();
    }

    // If we have segments, return the first directory as base path
    if (segments.length > 0) {
        return '/' + segments[0] + '/';
    }

    return '/';
}

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        // Check if in development mode
        const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        if (isDevelopment) {
            try {
                // First, try to unregister any existing service workers
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (let registration of registrations) {
                    await registration.unregister();
                    console.log('Previous service worker unregistered');
                }

                console.log('Development mode detected, service worker will run with caching disabled');
            } catch (error) {
                console.error('Error handling service worker in development:', error);
            }
        }

        // Always register the service worker, but its behavior differs based on environment
        try {
            const basePath = getBasePath();
            const swPath = `${basePath}service-worker.js`;

            const registration = await navigator.serviceWorker.register(swPath, {
                type: 'module',

            });
        } catch (error) {
            console.log('SW registration failed: ', error);
        }
    });
}

// Add install prompt
let deferredPrompt;
const installButton = document.createElement('button');
installButton.style.display = 'none';
installButton.textContent = 'Install App';
document.body.appendChild(installButton);

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    installButton.style.display = 'block';
});

installButton.addEventListener('click', (e) => {
    // Hide our user interface that shows our A2HS button
    installButton.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    });
});
