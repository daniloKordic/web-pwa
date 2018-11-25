var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/web-pwa/',
  '/web-pwa/index.html',
  '/web-pwa/css/main.css',
  '/web-pwa/js/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});