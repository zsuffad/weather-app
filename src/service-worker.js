import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate, CacheFirst} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';

// Check for development mode
const isDevelopment = self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';

// This single placeholder will be replaced by the Workbox injectManifest plugin
// Just define it once and use it conditionally
const manifestEntries = self.__WB_MANIFEST || [];

// Log environment mode
if (isDevelopment) {
    console.log('Service Worker running in development mode - caching disabled');
} else {
    console.log('Service Worker running in production mode - caching enabled');

    // Only precache in production mode
    precacheAndRoute(manifestEntries);

    // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy
    registerRoute(
        ({url}) => url.origin === 'https://fonts.googleapis.com',
        new StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
        }),
    );

    // Cache the underlying font files with a cache-first strategy for 1 year
    registerRoute(
        ({url}) => url.origin === 'https://fonts.gstatic.com',
        new CacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
                new ExpirationPlugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 30,
                }),
            ],
        }),
    );

    // Cache images
    registerRoute(
        ({request}) => request.destination === 'image',
        new CacheFirst({
            cacheName: 'images',
            plugins: [
                new ExpirationPlugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        }),
    );

    // Default handler for all other routes
    registerRoute(
        ({request}) => request.destination === 'script' || request.destination === 'style',
        new StaleWhileRevalidate({
            cacheName: 'static-resources',
        }),
    );

    // Handle offline fallback
    self.addEventListener('fetch', (event) => {
        // This is a basic fallback for navigation requests
        if (event.request.mode === 'navigate') {
            event.respondWith(
                fetch(event.request).catch(() => {
                    return caches.match('index.html');
                }),
            );
        }
    });
}

// For development mode, add a no-op fetch handler
if (isDevelopment) {
    self.addEventListener('fetch', (event) => {
        // Don't do anything - let the browser handle requests normally
        // without caching in development mode
    });
}
