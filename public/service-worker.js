'use strict';

// Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// Add list of files to cache here.
const FILES_TO_CACHE = [
  '.',
  'index.html',
  './offline.html',
  'https://fonts.cdnfonts.com/css/google-sans',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
    fetch(evt.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match('offline.html');
          });
      })
  );
});

// (function() {
//   'use strict';
//
//   const FILES_TO_CACHE = [
//     '.',
//     'index.html',
//     '/offline.html',
//     'https://fonts.cdnfonts.com/css/google-sans',
//     'https://fonts.googleapis.com/icon?family=Material+Icons',
//     'https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js'
//   ];
//
//   const staticCaches = 'my-appshell-cache';  //Will use Cache, falling back to Network.
//   const apiCaches = "my-api-cache"; //Will use Cache then Network.
//
//   self.addEventListener('install', function(event) {
//     console.info('##Service Worker## Attempting to install service worker and cache static assets');
//     event.waitUntil(
//       caches.open(staticCaches)
//         .then(function(cache) {
//           return cache.addAll(FILES_TO_CACHE);
//         })
//       // .then(function(){
//       //    self.skipWaiting();
//       // })
//     );
//   });
//
//   self.addEventListener('activate', function(event) {
//     console.log('##Service Worker## Activating new service worker...');
//     const cacheWhitelist = [staticCaches, apiCaches];
//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.map(function(cacheName) {
//             if (cacheWhitelist.indexOf(cacheName) === -1) {
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//       // .then(function(val){
//       //    return self.clients.claim()
//       // })
//     );
//   });
//
//   /* if found in CACHE then return from CACHE else from NETWORK */
//   self.addEventListener('fetch', function(event) {
//     // console.log('Fetch event for >>>> ', event.request.url);
//     event.respondWith(
//       caches.match(event.request)
//         .then(function(response) {
//           if (response) {
//             console.log('Found ', event.request.url, ' in cache');
//             return response;
//           }
//
//           console.warn('##Service Worker##  Not in Cache... Making Network request for ', event.request.url);
//
//           return fetch(event.request)
//             .then(function(response) {
//               if (response.status === 404) {
//                 return caches.match('/offline.html');
//               }
//               //This code prevents caching Github api responses.
//               if (event.request.url.indexOf('github') > -1 ) {
//                 console.info('##Service Worker##  GitHub API requests will not be cached.');
//                 return response;
//               }
//
//               return response
//             });
//         })
//         .catch(function(error) {
//           console.error('##Service Worker##  Failed to fetch', event.request.url);
//           return caches.match('/offline.html');
//         })
//     );
//   });
// })();
