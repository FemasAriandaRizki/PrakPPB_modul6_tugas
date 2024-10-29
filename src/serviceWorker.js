// src/serviceWorker.js
const CACHE_NAME = "pwa-cache-v1";
const URLS_TO_CACHE = [
    "/", // root URL
    "/index.html", // main HTML file
    "/App.js", // main JS file
    "/App.css", // main CSS file
    "/favicon.ico", // favicon (optional)
];

// Install Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Fetch Data from Cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return cache if found, else fetch from network
            return response || fetch(event.request);
        })
    );
});

// Update Service Worker and Clear Old Cache
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cache) => cache !== CACHE_NAME)
                    .map((cache) => caches.delete(cache))
            );
        })
    );
});
