const CACHE_NAME = 'hafiz-cache-v2';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:wght@400;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Önce önbelleğe bak, yoksa internete git
      return response || fetch(event.request);
    })
  );
});
