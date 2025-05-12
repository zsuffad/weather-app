// Development utility to clear caches
export async function clearServiceWorkerCaches() {
    if ('caches' in window) {
        try {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
            console.log('✅ All service worker caches cleared');

            // Unregister all service workers
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registrations.map((registration) => registration.unregister()));
            console.log('✅ All service workers unregistered');

            console.log('🔄 Please refresh the page to ensure clean state');
            return true;
        } catch (error) {
            console.error('❌ Error clearing caches:', error);
            return false;
        }
    }
    console.log('⚠️ Caches API not available in this browser');
    return false;
}

// You can call this from the console with:
// import('/dev-utils.js').then(module => module.clearServiceWorkerCaches());
