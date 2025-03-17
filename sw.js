// todo: 'install' event is for old caches deletion. use it?
// todo: split filesToCache in two arrays for easy configuration and merge them
// todo: use typescript. referernces:
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/service_worker_api

var cacheName = 'fridivingCountdown';

var filesToCache = [

  // infrastructure files ----------------------------------------------------------------------------------------------
  '/',
  'index.html',
  'sw.js',
  'manifest.json',
  'favicon.png',
  //--------------------------------------------------------------------------------------------------------------------

  // app files ---------------------------------------------------------------------------------------------------------
  'css/styles.css',
  'js/settings.js',
  'js/freedivingCountdown.js',
  // 'img/header.jpg',
  'img/offline-img.png',
  // 'https://fonts.googleapis.com/css?family=Raleway',
  'js/freedivingCountdown.js',
  // -------------------------------------------------------------------------------------------------------------------

  // vendor files ------------------------------------------------------------------------------------------------------
  // - luxon
  'vendor/luxon/luxon.min.js',
  // - easytimer
  'vendor/easytimer/easytimer.min.js',
  // - jquery
  'vendor/jquery/jquery-3.7.1.min.js',
  // - tabulator
  'vendor/tabulator/css/tabulator_bootstrap5.min.css',
  'vendor/tabulator/css/tabulator_bootstrap5.min.css.map',
  'vendor/tabulator/js/tabulator.min.js',
  'vendor/tabulator/js/tabulator.min.js.map',  
  // BOOTSTRAP
  'vendor/css/bootstrap.min.css',
  'vendor/js/bootstrap.bundle.min.js',
  // -------------------------------------------------------------------------------------------------------------------

  // Audio files
  'audio/otm120.mp3',
  'audio/otm90.mp3',
  'audio/otm60.mp3',
  'audio/otm30.mp3',
  'audio/ot.mp3',
  'audio/plus_1.mp3',
  'audio/1.mp3',
  'audio/2.mp3',
  'audio/3.mp3',
  'audio/4.mp3',
  'audio/5.mp3',
  'audio/6.mp3',
  'audio/7.mp3',
  'audio/8.mp3',
  'audio/9.mp3',
  'audio/10.mp3',
  'audio/20.mp3',
  'audio/25.mp3',
  'audio/26.mp3',
  'audio/27.mp3',
  'audio/28.mp3',
  'audio/29.mp3',
  'audio/30.mp3',
  'audio/start_cancelled.mp3',

  // fonts:
  'fonts/DigitalNumbers-Regular.ttf',
];

// todo: check if service worker is installed before
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error(err);
  });
}
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Install' event. Writing files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: writing files into cache');
      return cache.addAll(filesToCache);
    })
  )
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('activate', function (event) {
  console.log('sw: service worker ready and activated', event);
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     // test if the request is cached
//     caches.match(event.request).then(function(response) {
//       // 1) if response cached, it will be returned from browser cache
//       // 2) if response not cached, fetch resource from network
//       return response || fetch(event.request);
//     }).catch(function (err) {
//       // if response not cached and network not available an error is thrown => return fallback image
//       return caches.match('img/offline-img.png');
//     })
//   )
// });
// ---------------------------------------------------------------------------------------------------------------------
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("fridivingCountdown");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  event.respondWith(networkFirst(event.request));
});
