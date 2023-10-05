const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  'index.html',
  'secondPage.html',
  'earth.png',
  './', // alias for index.html
  'css/style.css',
  'js/main.js',
  'images/hello-icon-128.ping',
  'images/hello-icon-144.ping',
  'images/hello-icon-152.ping',
  'images/hello-icon-192maskable.ping',
  'images/hello-icon-196.ping',
  'images/hello-icon-256.ping',
  'images/hello-icon-512.ping',
  'favicon.ico',
  'sv.js',
];

//The install handler takes care of precaching resources we always need

self.addEventListener('install', function(event)){
  event.waitUntill(
    caches.open(PRECACHE).then(function(cache)){
    return cache.addAll(PRECACHE_URLS);
    })
  );
});

self.addEventListener('active', event => {
  console.log('Service worker activating....');
});

//the fetch handler serves responses for same-origin resources from a cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
    );
});




