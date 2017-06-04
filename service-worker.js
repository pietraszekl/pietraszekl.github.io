const CACHE_NAME = "pietraszekl";
const CACHE_VERSION = "v1";

// List of files which are store in cache.
let filesToCache = [
  "/",
  "/images/favicons/apple-touch-icon-144x144.png",
  "/images/favicons/apple-touch-icon-200x200.png"
];

self.addEventListener("activate", function(evt) {
  // console.log('[EVENT] activate', evt);
});

self.addEventListener("install", function(evt) {
  // console.log('[EVENT] install', evt);
  // evt.waitUntil(
  //     caches.open(CACHE_NAME + '-' + CACHE_VERSION)
  //         .then(function (cache) {
  //             return cache.addAll(filesToCache);
  //         })
  //         .catch(function (err) {
  //             console.error(err);
  //         })
  // );
});

self.addEventListener("fetch", function(evt) {
  // console.log('[EVENT] fetch', evt.request.url);
  // evt.respondWith(
  //     caches.match(evt.request)
  //         .catch(function (err) {
  //             console.log('fetch: failed', evt.request.url);
  //             console.log(err);
  //             return fetch(evt.request);
  //         })
  // );
});
